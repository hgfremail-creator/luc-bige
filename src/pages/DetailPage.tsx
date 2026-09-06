import { useParams, useLocation, Link, Navigate } from 'react-router-dom'
import { SIGN_BY_ID, SIGNS } from '@/content/signs'
import { PLANET_BY_ID } from '@/content/planets'
import { HOUSE_BY_NUM } from '@/content/houses'
import { ASPECT_BY_ID } from '@/content/aspects'
import { ELEMENT_BY_ID } from '@/content/elements'
import { MYTH_BY_ID } from '@/content/myths'
import { TAROT_BY_ID } from '@/content/tarot'
import { GENERIC_GROUPS } from '@/content'
import type { Correspondance } from '@/content/types'
import { useStore } from '@/lib/store'
import { Card, Callout, Pill, SourceBadge, Glyph, Disclaimer } from '@/components/ui'
import { FacetList } from '@/components/FacetList'

function BookmarkBar({ title }: { title: string }) {
  const loc = useLocation()
  const { bookmarks, toggleBookmark, annotations, setAnnotation } = useStore()
  const route = loc.pathname
  const marked = bookmarks.includes(route)
  return (
    <div className="mb-6 flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <Link to="/bibliotheque" className="font-sans text-xs text-gold-400/70 hover:text-gold-300">← Bibliothèque</Link>
        <button
          onClick={() => toggleBookmark(route)}
          className="font-sans text-xs text-gold-400/70 hover:text-gold-300"
        >
          {marked ? '★ Retirer des favoris' : '☆ Ajouter aux favoris'}
        </button>
      </div>
      <details className="text-[13px]">
        <summary className="cursor-pointer font-sans text-xs text-ink-400">Annotation personnelle</summary>
        <textarea
          value={annotations[route] ?? ''}
          onChange={(e) => setAnnotation(route, e.target.value)}
          placeholder={`Vos notes sur ${title}…`}
          rows={3}
          className="mt-2 w-full rounded-lg border border-gold-500/20 bg-night-900/60 p-2 text-[14px] outline-none focus:border-gold-400/50"
        />
      </details>
    </div>
  )
}

function Corr({ items }: { items: Correspondance[] }) {
  if (!items?.length) return null
  return (
    <Card className="mt-4">
      <div className="font-sans text-[11px] uppercase tracking-[0.2em] text-gold-400/70 mb-2">Correspondances proposées</div>
      <div className="space-y-2">
        {items.map((c, i) => (
          <div key={i} className="flex flex-col gap-1 border-b border-gold-500/10 pb-2 last:border-0">
            <div className="flex items-center gap-2">
              <span className="font-display text-ink-100">{c.domaine}</span>
              <SourceBadge tag={c.tag} />
            </div>
            <p className="text-[14px] text-ink-300">{c.contenu}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}

export function DetailPage() {
  const params = useParams()
  const kind = params.group ? 'concept' : params.kind
  const id = params.id ?? ''

  if (kind === 'signe') {
    const s = SIGN_BY_ID[id]
    if (!s) return <Navigate to="/bibliotheque" replace />
    const next = SIGNS[s.ordre % 12]
    return (
      <article>
        <BookmarkBar title={s.nom} />
        <header className="flex items-center gap-4">
          <Glyph className="h-16 w-16 text-3xl">{s.glyphe}</Glyph>
          <div>
            <h1 className="font-display text-4xl">{s.nom}</h1>
            <div className="mt-1 flex flex-wrap gap-1.5">
              <Pill tone={s.element as 'feu'}>{s.element}</Pill>
              <Pill>{s.mode}</Pill>
              <Pill>{s.polarite}</Pill>
              <Pill tone="or">Maître : {s.maitre}</Pill>
              <Pill>Étape {s.ordre}/12</Pill>
            </div>
            <p className="mt-1 font-serif text-lg italic text-gold-200">« {s.motCle} » · {s.dates}</p>
          </div>
        </header>

        <p className="mt-5 text-[15px] text-ink-200">{s.dynamiquePsychologique}</p>

        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          <Callout title="Archétype">{s.archetype}</Callout>
          <Callout title="Besoin fondamental">{s.besoinFondamental}</Callout>
          <Callout title="Potentiel">{s.potentiel}</Callout>
          <Callout title="Ombre" tone="ombre">{s.ombre}</Callout>
          <Callout title="Excès" tone="ombre">{s.exces}</Callout>
          <Callout title="Manque" tone="ombre">{s.manque}</Callout>
        </div>

        <Card className="mt-4">
          <div className="font-sans text-[11px] uppercase tracking-[0.2em] text-gold-400/70 mb-2">Quatre niveaux de lecture</div>
          <dl className="space-y-2 text-[14px]">
            <div><dt className="font-display text-ink-100">Instinctif</dt><dd className="text-ink-300">{s.niveaux.instinctif}</dd></div>
            <div><dt className="font-display text-ink-100">Psychologique</dt><dd className="text-ink-300">{s.niveaux.psychologique}</dd></div>
            <div><dt className="font-display text-ink-100">Conscient</dt><dd className="text-ink-300">{s.niveaux.conscient}</dd></div>
            <div><dt className="font-display text-ink-100">Transpersonnel</dt><dd className="text-ink-300">{s.niveaux.transpersonnel}</dd></div>
          </dl>
        </Card>

        <div className="mt-4 space-y-2 text-[15px] text-ink-200">
          <p><strong>Mythologie :</strong> {s.mythologie}</p>
          <Callout title="Conte symbolique">{s.conteSymbolique}</Callout>
          <Callout title="Question initiatique" tone="note">« {s.questionInitiatique} »</Callout>
          <Callout title="Exercice" tone="note">{s.exercice}</Callout>
          <p><strong>Chemin du héros :</strong> {s.etapeHeros}</p>
        </div>

        <Corr items={s.correspondances} />

        <div className="mt-6 flex items-center justify-between font-sans text-sm">
          <Link to={`/bibliotheque/signe/${SIGNS[(s.ordre + 10) % 12].id}`} className="text-gold-400/70 hover:text-gold-300">
            ← {SIGNS[(s.ordre + 10) % 12].nom}
          </Link>
          <Link to="/zodiaque" className="text-gold-400/70 hover:text-gold-300">La roue</Link>
          <Link to={`/bibliotheque/signe/${next.id}`} className="text-gold-400/70 hover:text-gold-300">
            {next.nom} (suite du cycle) →
          </Link>
        </div>
        <div className="mt-8"><Disclaimer /></div>
      </article>
    )
  }

  if (kind === 'planete') {
    const p = PLANET_BY_ID[id]
    if (!p) return <Navigate to="/bibliotheque" replace />
    return (
      <article>
        <BookmarkBar title={p.nom} />
        <header className="flex items-center gap-4">
          <Glyph className="h-16 w-16 text-3xl">{p.glyphe}</Glyph>
          <div>
            <h1 className="font-display text-4xl">{p.nom}</h1>
            <Pill tone="or">{p.categorie}</Pill>
            <p className="mt-1 text-[15px] text-ink-200">{p.fonction}</p>
          </div>
        </header>
        <div className="mt-5 space-y-2 text-[15px] text-ink-200">
          <p><strong>Archétype :</strong> {p.archetype} · <strong>Principe :</strong> {p.principe}</p>
          <div className="grid gap-2 sm:grid-cols-2">
            <Callout title="Expression harmonieuse">{p.expressionHarmonieuse}</Callout>
            <Callout title="Expression déséquilibrée" tone="ombre">{p.expressionDesequilibree}</Callout>
          </div>
          <Callout title="Ombre" tone="ombre">{p.ombre}</Callout>
          <Callout title="Potentiel évolutif">{p.potentielEvolutif}</Callout>
          <Callout title="Question initiatique" tone="note">« {p.questionInitiatique} »</Callout>
          <p><strong>Mythologie :</strong> {p.mythologie}</p>
          <p><strong>Jung :</strong> {p.jung}</p>
          <p><strong>Tarot :</strong> {p.tarot}</p>
          <p><strong>Alchimie :</strong> {p.alchimie}</p>
          <p><strong>Hermétisme :</strong> {p.hermetisme}</p>
        </div>
        <Card className="mt-4">
          <div className="font-sans text-[11px] uppercase tracking-wider text-gold-400/70">Exemples dans un thème natal</div>
          <ul className="mt-1 list-disc pl-5 text-[14px] text-ink-300">{p.exemplesTheme.map((e, i) => <li key={i}>{e}</li>)}</ul>
        </Card>
        <Corr items={p.correspondances} />
        <div className="mt-8"><Disclaimer /></div>
      </article>
    )
  }

  if (kind === 'maison') {
    const h = HOUSE_BY_NUM[Number(id)]
    if (!h) return <Navigate to="/bibliotheque" replace />
    return (
      <article>
        <BookmarkBar title={`Maison ${h.romain}`} />
        <h1 className="font-display text-4xl">Maison {h.romain}</h1>
        <p className="font-display text-xl text-gold-200">{h.nom}</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <Pill>{h.categorie}</Pill>
          {h.planeteNaturelle && <Pill tone="or">Planète naturelle : {h.planeteNaturelle}</Pill>}
          {h.signeNaturel && <Pill>Signe naturel : {h.signeNaturel}</Pill>}
        </div>
        <div className="mt-5 space-y-2 text-[15px] text-ink-200">
          <p><strong>Domaine traditionnel :</strong> {h.domaineTraditionnel}</p>
          <Callout title="Question existentielle" tone="note">{h.questionExistentielle}</Callout>
          <p><strong>Archétype :</strong> {h.archetype}</p>
          <p><strong>Psychologie :</strong> {h.psychologie}</p>
          <Callout title={`Axe ${h.axe}`}>{h.axeSens}</Callout>
          <Callout title="Ombre" tone="ombre">{h.ombre}</Callout>
          <Callout title="Potentiel">{h.potentiel}</Callout>
          <Callout title="Exercice" tone="note">{h.exercice}</Callout>
          <p><strong>Exemple d'interprétation :</strong> {h.exempleInterpretation}</p>
        </div>
        <div className="mt-8"><Disclaimer /></div>
      </article>
    )
  }

  if (kind === 'aspect') {
    const a = ASPECT_BY_ID[id]
    if (!a) return <Navigate to="/bibliotheque" replace />
    return (
      <article>
        <BookmarkBar title={a.nom} />
        <h1 className="font-display text-4xl">{a.glyphe} {a.nom}</h1>
        <div className="mt-1 flex gap-1.5"><Pill tone="or">{a.angle}°</Pill><Pill>{a.famille}</Pill><Pill>orbe ~{a.orbe}°</Pill></div>
        <p className="mt-4 text-[15px] text-ink-200">{a.nature}</p>
        <Card className="mt-4">
          <div className="font-sans text-[11px] uppercase tracking-wider text-gold-400/70 mb-1">Processus</div>
          <ol className="list-decimal space-y-1 pl-5 text-[14px] text-ink-300">{a.processus.map((s, i) => <li key={i}>{s}</li>)}</ol>
        </Card>
        <Callout title="Le malentendu à éviter" tone="ombre">{a.malentendu}</Callout>
        <Callout title="Lecture">{a.lecture}</Callout>
        <Callout title="Exercice" tone="note">{a.exercice}</Callout>
        <Corr items={a.correspondances} />
        <div className="mt-8"><Disclaimer /></div>
      </article>
    )
  }

  if (kind === 'element') {
    const e = ELEMENT_BY_ID[id as 'feu']
    if (!e) return <Navigate to="/bibliotheque" replace />
    return (
      <article>
        <BookmarkBar title={e.nom} />
        <h1 className="font-display text-4xl">{e.glyphe} {e.nom}</h1>
        <div className="mt-1 flex flex-wrap gap-1.5">{e.signes.map((s) => <Pill key={s} tone={e.id as 'feu'}>{s}</Pill>)}</div>
        <div className="mt-4 space-y-2 text-[15px] text-ink-200">
          <p>{e.symbolisme}</p>
          <p>{e.psychologie}</p>
          <p><strong>Qualités :</strong> {e.qualites.join(', ')}.</p>
          <Callout title="Fonction dans le développement humain">{e.fonctionDeveloppement}</Callout>
          <div className="grid gap-2 sm:grid-cols-2">
            <Callout title="Excès" tone="ombre">{e.exces}</Callout>
            <Callout title="Manque" tone="ombre">{e.manque}</Callout>
          </div>
          <Callout title="Exercice interactif" tone="note">{e.exerciceInteractif}</Callout>
        </div>
        <Corr items={[e.paralleleAlchimique, e.paralleleTarot, e.paralleleHermetique]} />
        <div className="mt-8"><Disclaimer /></div>
      </article>
    )
  }

  if (kind === 'mythe') {
    const m = MYTH_BY_ID[id]
    if (!m) return <Navigate to="/bibliotheque" replace />
    return (
      <article>
        <BookmarkBar title={m.nom} />
        <h1 className="font-display text-4xl">{m.nom}{m.nomRomain && <span className="text-ink-400"> / {m.nomRomain}</span>}</h1>
        <p className="font-sans text-[12px] uppercase tracking-wider text-gold-400/70">{m.domaine}</p>
        <div className="mt-4 space-y-2 text-[15px] text-ink-200">
          <p>{m.histoire}</p>
          <Callout title="Symbolisme">{m.symbolisme}</Callout>
          <p><strong>Archétype :</strong> {m.archetype}</p>
          {(m.planete || m.signe) && (
            <p className="font-sans text-[12px] text-ink-400">
              Rapprochements symboliques (non scientifiques) :{' '}
              {m.planete && <>planète <em>{m.planete}</em> </>}
              {m.signe && <>· signe <em>{m.signe}</em></>}
            </p>
          )}
          <Callout title="Thème psychologique">{m.themePsychologique}</Callout>
          <Callout title="Enseignement initiatique" tone="note">{m.enseignementInitiatique}</Callout>
        </div>
        <div className="mt-8"><Disclaimer /></div>
      </article>
    )
  }

  if (kind === 'tarot') {
    const c = TAROT_BY_ID[id]
    if (!c) return <Navigate to="/bibliotheque" replace />
    return (
      <article>
        <BookmarkBar title={c.nom} />
        <h1 className="font-display text-4xl">{c.numero}. {c.nom}</h1>
        <p className="font-display text-xl text-gold-200">{c.archetype}</p>
        <div className="mt-4 space-y-2 text-[15px] text-ink-200">
          <p><strong>Symbolisme :</strong> {c.symbolisme}</p>
          <Callout title="Chemin initiatique">{c.cheminInitiatique}</Callout>
          <div className="grid gap-2 sm:grid-cols-2">
            <Callout title="Lumière">{c.lumiere}</Callout>
            <Callout title="Ombre" tone="ombre">{c.ombre}</Callout>
          </div>
        </div>
        <Corr items={c.correspondances} />
        <p className="mt-3 font-sans text-[11px] text-ink-400">
          Les correspondances Tarot ↔ astrologie varient selon les traditions. Elles sont indiquées
          « selon telle tradition », jamais comme la correspondance exacte.
        </p>
        <div className="mt-8"><Disclaimer /></div>
      </article>
    )
  }

  if (kind === 'concept') {
    const group = GENERIC_GROUPS[params.group ?? '']
    const c = group?.find((x) => x.id === id)
    if (!c) return <Navigate to="/bibliotheque" replace />
    return (
      <article>
        <BookmarkBar title={c.nom} />
        <h1 className="font-display text-4xl">{c.glyphe && <span className="mr-2 text-gold-300">{c.glyphe}</span>}{c.nom}</h1>
        <p className="font-sans text-[12px] uppercase tracking-wider text-gold-400/70">{c.categorie}</p>
        <div className="mt-2 flex flex-wrap gap-1.5">{c.sources.map((t) => <SourceBadge key={t} tag={t} />)}</div>
        <div className="mt-5"><FacetList facets={c.facets} /></div>
        <div className="mt-8"><Disclaimer /></div>
      </article>
    )
  }

  return <Navigate to="/bibliotheque" replace />
}
