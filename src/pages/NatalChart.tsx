import { useMemo, useState } from 'react'
import { CITIES } from '@/lib/astro/cities'
import { buildFullChart, type BirthData, type FullChart } from '@/lib/astro/chart'
import { ZodiacWheel } from '@/components/ZodiacWheel'
import { Card, Callout, Pill, Button, Disclaimer, SectionTitle } from '@/components/ui'
import { useStore } from '@/lib/store'
import { ASPECT_BY_ID } from '@/content/aspects'

const TABS = ['Roue', 'Données calculées', 'Lecture en couches', 'Dominante', 'Mythe personnel'] as const

export function NatalChart() {
  const saveChart = useStore((s) => s.saveChart)
  const charts = useStore((s) => s.charts)
  const addJournal = useStore((s) => s.addJournal)

  const [form, setForm] = useState<BirthData>({
    date: '1990-01-01',
    heure: '12:00',
    heureConnue: true,
    lieu: 'Paris',
    latitude: 48.8566,
    longitude: 2.3522,
    utcOffset: 1,
  })
  const [result, setResult] = useState<FullChart | null>(null)
  const [tab, setTab] = useState<(typeof TABS)[number]>('Roue')
  const [saved, setSaved] = useState(false)

  const cityMatch = useMemo(
    () => CITIES.find((c) => c.nom.toLowerCase() === form.lieu.trim().toLowerCase()),
    [form.lieu],
  )

  function set<K extends keyof BirthData>(k: K, v: BirthData[K]) {
    setForm((f) => ({ ...f, [k]: v }))
  }

  function pickCity(nom: string) {
    const c = CITIES.find((x) => x.nom === nom)
    if (c) setForm((f) => ({ ...f, lieu: c.nom, latitude: c.lat, longitude: c.lon, utcOffset: c.utc }))
    else set('lieu', nom)
  }

  function compute() {
    setResult(buildFullChart(form))
    setSaved(false)
    setTab('Roue')
  }

  return (
    <div className="space-y-8">
      <div>
        <div className="font-sans text-[11px] uppercase tracking-[0.22em] text-gold-400/80">Mon thème natal</div>
        <h1 className="mt-1 font-display text-3xl md:text-4xl">Calculer et lire une carte du ciel</h1>
        <p className="mt-2 max-w-2xl text-ink-300">
          Les positions sont <strong>calculées</strong> (astronomie). Les lectures sont{' '}
          <strong>symboliques</strong> : des invitations à réfléchir, jamais des prédictions.
        </p>
      </div>

      <Card>
        <SectionTitle kicker="Données de naissance">Saisie</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="font-sans text-[12px] text-ink-400">Date de naissance</span>
            <input type="date" value={form.date} onChange={(e) => set('date', e.target.value)}
              className="mt-1 w-full rounded-lg border border-gold-500/20 bg-night-900/60 px-3 py-2 outline-none focus:border-gold-400/50" />
          </label>
          <label className="block">
            <span className="font-sans text-[12px] text-ink-400">Heure (locale au lieu de naissance)</span>
            <input type="time" value={form.heure} disabled={!form.heureConnue}
              onChange={(e) => set('heure', e.target.value)}
              className="mt-1 w-full rounded-lg border border-gold-500/20 bg-night-900/60 px-3 py-2 outline-none focus:border-gold-400/50 disabled:opacity-40" />
          </label>
          <label className="flex items-center gap-2 sm:col-span-2">
            <input type="checkbox" checked={form.heureConnue} onChange={(e) => set('heureConnue', e.target.checked)} className="accent-gold-400" />
            <span className="text-[14px] text-ink-200">Je connais l'heure de naissance</span>
          </label>
          <label className="block sm:col-span-2">
            <span className="font-sans text-[12px] text-ink-400">Lieu de naissance</span>
            <input list="cities" value={form.lieu} onChange={(e) => pickCity(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gold-500/20 bg-night-900/60 px-3 py-2 outline-none focus:border-gold-400/50" />
            <datalist id="cities">
              {CITIES.map((c) => <option key={c.nom} value={c.nom}>{c.pays}</option>)}
            </datalist>
          </label>
          <label className="block">
            <span className="font-sans text-[12px] text-ink-400">Latitude</span>
            <input type="number" step="0.0001" value={form.latitude} onChange={(e) => set('latitude', Number(e.target.value))}
              className="mt-1 w-full rounded-lg border border-gold-500/20 bg-night-900/60 px-3 py-2 outline-none focus:border-gold-400/50" />
          </label>
          <label className="block">
            <span className="font-sans text-[12px] text-ink-400">Longitude (est +)</span>
            <input type="number" step="0.0001" value={form.longitude} onChange={(e) => set('longitude', Number(e.target.value))}
              className="mt-1 w-full rounded-lg border border-gold-500/20 bg-night-900/60 px-3 py-2 outline-none focus:border-gold-400/50" />
          </label>
          <label className="block sm:col-span-2">
            <span className="font-sans text-[12px] text-ink-400">
              Décalage UTC à la naissance (heure d'été comprise) — ex. Paris hiver = 1, Paris été = 2
            </span>
            <input type="number" step="0.5" value={form.utcOffset} onChange={(e) => set('utcOffset', Number(e.target.value))}
              className="mt-1 w-full rounded-lg border border-gold-500/20 bg-night-900/60 px-3 py-2 outline-none focus:border-gold-400/50" />
            {cityMatch && (
              <span className="mt-1 block font-sans text-[11px] text-ink-500">
                {cityMatch.nom} : décalage standard {cityMatch.utc >= 0 ? '+' : ''}{cityMatch.utc} h — ajoutez 1 h si naissance à l'heure d'été.
              </span>
            )}
          </label>
        </div>
        <div className="mt-4">
          <Button variant="primary" onClick={compute}>Calculer le thème</Button>
        </div>
      </Card>

      {charts.length > 0 && !result && (
        <Card>
          <div className="font-sans text-[11px] uppercase tracking-wider text-gold-400/70 mb-2">Thèmes enregistrés</div>
          <div className="flex flex-wrap gap-2">
            {charts.map((c) => (
              <button key={c.id} onClick={() => { setForm(c); setResult(buildFullChart(c)) }}
                className="rounded-lg border border-gold-500/20 px-3 py-1.5 text-[13px] text-ink-200 hover:border-gold-400/50">
                {c.label}
              </button>
            ))}
          </div>
        </Card>
      )}

      {result && (
        <div>
          {result.birth.heureConnue ? null : (
            <Callout title="Heure inconnue" tone="ombre">
              L'Ascendant, le Milieu du Ciel et les maisons ne sont pas calculés — on ne les invente pas.
            </Callout>
          )}

          <div className="mb-4 flex flex-wrap gap-2">
            {TABS.map((t) => (
              <button key={t} onClick={() => setTab(t)}
                className={`rounded-full border px-3 py-1 font-sans text-[12px] transition-colors ${
                  tab === t ? 'border-gold-400/60 bg-gold-400/10 text-gold-200' : 'border-gold-500/15 text-ink-300 hover:border-gold-500/30'
                }`}>
                {t}
              </button>
            ))}
          </div>

          {tab === 'Roue' && (
            <div className="grid gap-6 lg:grid-cols-[440px_1fr]">
              <div className="parchment starfield rounded-[var(--radius-card)] p-4">
                <ZodiacWheel
                  size={400}
                  bodies={result.chart.bodies}
                  aspects={result.aspects}
                  ascendantLon={result.chart.ascendant?.longitude}
                  fixedZodiac
                />
              </div>
              <div className="space-y-3">
                <Card>
                  <div className="grid grid-cols-3 gap-2 text-center text-[13px]">
                    <div><div className="font-sans text-[10px] text-ink-400">SOLEIL</div><div className="font-display text-lg text-gold-200">{sun(result)}</div></div>
                    <div><div className="font-sans text-[10px] text-ink-400">LUNE</div><div className="font-display text-lg text-gold-200">{moon(result)}</div></div>
                    <div><div className="font-sans text-[10px] text-ink-400">ASC</div><div className="font-display text-lg text-gold-200">{result.chart.ascendant?.signe ?? '—'}</div></div>
                  </div>
                </Card>
                <Callout title="Élément dominant">
                  {cap(result.elements.dominant)} — {result.elements.manquant ? `élément à cultiver : ${cap(result.elements.manquant)}` : 'les 4 éléments sont représentés'}
                </Callout>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => { const id = saveChart(form, form.lieu + ' ' + form.date); setSaved(true); void id }} disabled={saved}>
                    {saved ? 'Enregistré ✓' : 'Enregistrer ce thème'}
                  </Button>
                  <Button variant="ghost" onClick={() => addJournal({ titre: `Thème — ${form.lieu} ${form.date}`, texte: result.myth.join('\n\n'), tags: ['Thème', 'Mythe'], type: 'reflexion' })}>
                    Envoyer le mythe au journal
                  </Button>
                </div>
              </div>
            </div>
          )}

          {tab === 'Données calculées' && (
            <Card>
              <SectionTitle kicker="Registre 1 — vérifiable">Positions astronomiques</SectionTitle>
              <table className="w-full text-[14px]">
                <thead><tr className="text-gold-300"><th className="p-1.5 text-left">Corps</th><th className="p-1.5 text-left">Signe</th><th className="p-1.5">Degré</th><th className="p-1.5">Maison</th></tr></thead>
                <tbody>
                  {result.chart.bodies.map((b) => (
                    <tr key={b.id} className="border-t border-gold-500/10">
                      <td className="p-1.5 text-ink-100">{b.glyphe} {b.nom} {b.retrograde && <span className="text-ember">℞</span>}</td>
                      <td className="p-1.5 text-ink-200">{b.signe}</td>
                      <td className="p-1.5 text-center text-ink-300">{b.degre.toFixed(1)}°</td>
                      <td className="p-1.5 text-center text-ink-300">{b.maison ?? '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {result.chart.ascendant && (
                <p className="mt-3 text-[14px] text-ink-200">
                  Ascendant : {result.chart.ascendant.degre.toFixed(1)}° {result.chart.ascendant.signe} ·
                  Milieu du Ciel : {result.chart.milieuCiel?.degre.toFixed(1)}° {result.chart.milieuCiel?.signe} ·
                  Maisons : signes entiers.
                </p>
              )}
              <div className="mt-4 space-y-1">
                {result.avertissements.map((a, i) => (
                  <p key={i} className="font-sans text-[11px] text-ink-400">• {a}</p>
                ))}
              </div>
            </Card>
          )}

          {tab === 'Lecture en couches' && (
            <div className="space-y-3">
              <Callout title="Registre 2 — interprétation symbolique" tone="note">
                Chaque couche part de la donnée, puis propose une lecture ouverte. « Cette configuration
                peut être explorée comme… », jamais « vous êtes… ».
              </Callout>
              {result.layers.map((l) => (
                <Card key={l.numero}>
                  <h3 className="font-display text-xl text-gold-200">{l.titre}</h3>
                  {l.donnees.length > 0 && (
                    <ul className="mt-1 list-disc pl-5 text-[13px] text-ink-400">{l.donnees.map((d, i) => <li key={i}>{d}</li>)}</ul>
                  )}
                  <div className="mt-2 space-y-1.5 text-[14px] text-ink-200">
                    {l.lecture.map((t, i) => <p key={i}>{t}</p>)}
                  </div>
                </Card>
              ))}
            </div>
          )}

          {tab === 'Dominante' && (
            <Card>
              <SectionTitle kicker="Pondération transparente">Pourquoi ces planètes ressortent</SectionTitle>
              <p className="text-[14px] text-ink-300">
                La dominante n'est pas une vérité : c'est le résultat d'un calcul explicite (angularité,
                luminaires, maîtrise de l'Ascendant, dignités, aspects). Voici le détail.
              </p>
              <div className="mt-4 space-y-3">
                {result.dominantes.slice(0, 4).map((d, idx) => (
                  <div key={d.id} className={`rounded-lg border p-3 ${idx === 0 ? 'border-gold-400/40' : 'border-gold-500/12'}`}>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-lg text-ink-100">{d.nom}</span>
                      <Pill tone="or">score {d.score}</Pill>
                    </div>
                    <ul className="mt-1 space-y-0.5 font-sans text-[12px] text-ink-400">
                      {d.raisons.map((r, i) => <li key={i}>{r}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
              {result.aspects.length > 0 && (
                <div className="mt-4">
                  <div className="font-sans text-[11px] uppercase tracking-wider text-gold-400/70">Aspects principaux</div>
                  <ul className="mt-1 text-[13px] text-ink-300">
                    {result.aspects.slice(0, 8).map((a, i) => (
                      <li key={i}>{a.a} {a.glyphe} {a.b} — {a.aspectNom} ({a.ecart}°) · {ASPECT_BY_ID[a.aspectId]?.famille}</li>
                    ))}
                  </ul>
                </div>
              )}
            </Card>
          )}

          {tab === 'Mythe personnel' && (
            <Card>
              <SectionTitle kicker="Niveau 15 — une invitation, pas un destin">Brouillon de mythe personnel</SectionTitle>
              <div className="space-y-3 font-serif text-[16px] leading-relaxed text-ink-100">
                {result.myth.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              <div className="mt-4">
                <Button variant="outline" onClick={() => addJournal({ titre: `Mon mythe personnel — ${form.date}`, texte: result.myth.join('\n\n'), tags: ['Mythe', 'Soleil', 'Lune'], type: 'reflexion' })}>
                  Reprendre et retravailler dans le journal
                </Button>
              </div>
            </Card>
          )}
        </div>
      )}

      <Disclaimer />
    </div>
  )
}

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)
const sun = (r: FullChart) => r.chart.bodies.find((b) => b.id === 'soleil')?.signe ?? '—'
const moon = (r: FullChart) => r.chart.bodies.find((b) => b.id === 'lune')?.signe ?? '—'
