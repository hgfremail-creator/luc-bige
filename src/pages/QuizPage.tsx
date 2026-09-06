import { useMemo, useState } from 'react'
import { QUIZZES, QUIZ_THEMES, FICTIONAL_CHARTS } from '@/content/quizzes'
import type { QuizQuestion } from '@/content/types'
import { PLANETS } from '@/content/planets'
import { SIGNS } from '@/content/signs'
import { HOUSES } from '@/content/houses'
import { useStore } from '@/lib/store'
import { Card, Button, Callout, Pill, Disclaimer, SectionTitle } from '@/components/ui'

const MODES = ['Quiz', 'Apprenti astrologue', "Exercices d'interprétation"] as const

export function QuizPage() {
  const [mode, setMode] = useState<(typeof MODES)[number]>('Quiz')
  return (
    <div className="space-y-8">
      <div>
        <div className="font-sans text-[11px] uppercase tracking-[0.22em] text-gold-400/80">Quiz & exercices</div>
        <h1 className="mt-1 font-display text-3xl md:text-4xl">S'entraîner à lire</h1>
      </div>
      <div className="flex flex-wrap gap-2">
        {MODES.map((m) => (
          <button key={m} onClick={() => setMode(m)}
            className={`rounded-full border px-3 py-1 font-sans text-[12px] ${mode === m ? 'border-gold-400/60 bg-gold-400/10 text-gold-200' : 'border-gold-500/15 text-ink-300'}`}>
            {m}
          </button>
        ))}
      </div>
      {mode === 'Quiz' && <QuizRunner />}
      {mode === 'Apprenti astrologue' && <Apprenti />}
      {mode === "Exercices d'interprétation" && <Exercices />}
      <Disclaimer />
    </div>
  )
}

function QuizRunner() {
  const recordQuiz = useStore((s) => s.recordQuiz)
  const [theme, setTheme] = useState<string>('Tous')
  const pool = useMemo(() => (theme === 'Tous' ? QUIZZES : QUIZZES.filter((q) => q.theme === theme)), [theme])
  const [i, setI] = useState(0)
  const [answer, setAnswer] = useState<number | null>(null)

  const q: QuizQuestion | undefined = pool[i]

  function check(idx: number) {
    if (answer !== null) return
    setAnswer(idx)
    const correct = Array.isArray(q!.bonneReponse) ? false : q!.bonneReponse === idx
    recordQuiz({ quizId: q!.id, correct })
  }
  function next() {
    setAnswer(null)
    setI((n) => (n + 1) % pool.length)
  }

  if (!q) return <p className="text-ink-400">Aucune question.</p>

  const isAssoc = q.type === 'association' || q.type === 'classement'

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {['Tous', ...QUIZ_THEMES].map((t) => (
          <button key={t} onClick={() => { setTheme(t); setI(0); setAnswer(null) }}
            className={`rounded-full border px-2.5 py-0.5 font-sans text-[11px] ${theme === t ? 'border-gold-400/60 text-gold-200' : 'border-gold-500/15 text-ink-400'}`}>
            {t}
          </button>
        ))}
      </div>
      <Card>
        <div className="flex items-center justify-between">
          <Pill tone="or">{q.theme}</Pill>
          <span className="font-sans text-[11px] text-ink-400">Question {i + 1} / {pool.length}</span>
        </div>
        <h3 className="mt-3 font-display text-xl text-ink-100">{q.question}</h3>

        {!isAssoc && (
          <div className="mt-3 space-y-2">
            {q.options.map((opt, idx) => {
              const correct = q.bonneReponse === idx
              const chosen = answer === idx
              return (
                <button key={idx} onClick={() => check(idx)} disabled={answer !== null}
                  className={`block w-full rounded-lg border px-3 py-2 text-left text-[14px] transition-colors ${
                    answer === null ? 'border-gold-500/15 hover:border-gold-400/40 text-ink-200'
                      : correct ? 'border-verdigris/60 bg-verdigris/10 text-ink-100'
                      : chosen ? 'border-ember/60 bg-ember/10 text-ink-100' : 'border-gold-500/10 text-ink-400'
                  }`}>
                  {opt} {answer !== null && correct && ' ✓'}
                </button>
              )
            })}
          </div>
        )}

        {isAssoc && (
          <Callout title={q.type === 'association' ? 'Association' : 'Classement'} tone="note">
            {q.options.map((o, idx) => <span key={idx}>{idx > 0 && ' · '}{o}</span>)}
            {answer === null ? (
              <div className="mt-2"><Button variant="outline" onClick={() => setAnswer(0)}>Révéler la réponse</Button></div>
            ) : null}
          </Callout>
        )}

        {answer !== null && (
          <div className="mt-4">
            <Callout title="Pourquoi ?">{q.explication}</Callout>
            <Button variant="primary" onClick={next}>Question suivante</Button>
          </div>
        )}
      </Card>
    </div>
  )
}

const STEPS = [
  { key: 'ps', label: 'Planète + Signe' },
  { key: 'pm', label: 'Planète + Maison' },
  { key: 'psm', label: 'Planète + Signe + Maison' },
  { key: 'asp', label: 'Aspect entre deux planètes' },
] as const

const CRITERIA = [
  'Compréhension des fonctions en jeu',
  'Cohérence interne de la lecture',
  'Capacité symbolique (images, nuances)',
  'Identification de l\'ombre',
  'Formulation en question plutôt qu\'en prédiction',
]

function Apprenti() {
  const addXP = useStore((s) => s.addXP)
  const [step, setStep] = useState(0)
  const [seed, setSeed] = useState(0)
  const [text, setText] = useState('')
  const [revealed, setRevealed] = useState(false)
  const [scores, setScores] = useState<number[]>(CRITERIA.map(() => 0))

  const prompt = useMemo(() => {
    const p = PLANETS[(seed * 3) % 10]
    const s = SIGNS[(seed * 5) % 12]
    const h = HOUSES[(seed * 7) % 12]
    const p2 = PLANETS[(seed * 3 + 4) % 10]
    switch (STEPS[step].key) {
      case 'ps': return { titre: `${p.nom} en ${s.nom}`, model: `${p.nom} = ${p.fonction} Colorée « ${s.nom} » : ${s.dynamiquePsychologique} Ombre possible : ${p.ombre} / ${s.ombre} Question : « ${p.questionInitiatique} »` }
      case 'pm': return { titre: `${p.nom} en Maison ${h.romain}`, model: `${p.nom} (${p.fonction}) se déploie dans le domaine « ${h.nom} » : ${h.questionExistentielle} Potentiel : ${h.potentiel}. Ombre : ${h.ombre}` }
      case 'psm': return { titre: `${p.nom} en ${s.nom}, Maison ${h.romain}`, model: `Fonction ${p.nom} (${p.fonction}), style ${s.nom} (${s.motCle}), terrain « ${h.nom} ». On peut explorer : ${s.dynamiquePsychologique} — vécu dans ${h.questionExistentielle}` }
      case 'asp': return { titre: `${p.nom} en aspect avec ${p2.nom}`, model: `Deux fonctions se relient : « ${p.principe} » et « ${p2.principe} ». Selon l'aspect : tension (à travailler), fluidité (talent à cultiver) ou ajustement (bricolage permanent). Question : quelle compétence ce dialogue demande-t-il ?` }
    }
  }, [step, seed])

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {STEPS.map((s, idx) => (
          <button key={s.key} onClick={() => { setStep(idx); setText(''); setRevealed(false) }}
            className={`rounded-full border px-3 py-1 font-sans text-[12px] ${step === idx ? 'border-gold-400/60 text-gold-200' : 'border-gold-500/15 text-ink-300'}`}>
            {idx + 1}. {s.label}
          </button>
        ))}
      </div>
      <Card>
        <SectionTitle kicker={`Étape ${step + 1}`}>{prompt!.titre}</SectionTitle>
        <p className="text-[14px] text-ink-300">
          Rédigez une lecture symbolique : identifiez la ou les fonctions, la manière, le domaine, une
          tension possible, l'ombre, le potentiel — et terminez par une <strong>question</strong>, pas
          une prédiction.
        </p>
        <textarea value={text} onChange={(e) => setText(e.target.value)} rows={6}
          className="mt-3 w-full rounded-lg border border-gold-500/20 bg-night-900/60 p-3 text-[14px] outline-none focus:border-gold-400/50" />
        <div className="mt-3 flex gap-2">
          <Button variant="outline" onClick={() => setRevealed(true)} disabled={!text.trim()}>Comparer à une lecture-modèle</Button>
          <Button variant="ghost" onClick={() => { setSeed((n) => n + 1); setText(''); setRevealed(false); setScores(CRITERIA.map(() => 0)) }}>Autre tirage</Button>
        </div>
        {revealed && (
          <div className="mt-4 space-y-3">
            <Callout title="Une lecture-modèle (parmi d'autres)">{prompt!.model}</Callout>
            <div>
              <div className="font-sans text-[11px] uppercase tracking-wider text-gold-400/70 mb-1">Auto-évaluation pédagogique</div>
              {CRITERIA.map((c, idx) => (
                <div key={c} className="flex items-center justify-between py-1 text-[13px]">
                  <span className="text-ink-300">{c}</span>
                  <span className="flex gap-1">
                    {[1, 2, 3, 4].map((n) => (
                      <button key={n} onClick={() => setScores((s) => s.map((v, i) => (i === idx ? n : v)))}
                        className={`h-6 w-6 rounded border text-[11px] ${scores[idx] >= n ? 'border-gold-400 bg-gold-400/15 text-gold-200' : 'border-gold-500/20 text-ink-500'}`}>
                        {n}
                      </button>
                    ))}
                  </span>
                </div>
              ))}
              <Button variant="primary" className="mt-2" onClick={() => addXP(15)} disabled={scores.some((s) => s === 0)}>
                Valider l'exercice (+XP)
              </Button>
              <p className="mt-1 font-sans text-[11px] text-ink-400">
                On n'évalue pas « la bonne réponse » mais la qualité symbolique : cohérence, nuance,
                repérage de l'ombre, refus du déterminisme.
              </p>
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}

function Exercices() {
  const [i, setI] = useState(0)
  const [open, setOpen] = useState<string | null>(null)
  const c = FICTIONAL_CHARTS[i]
  const steps: [string, string][] = [
    ['1 · Identifier les fonctions', c.pistes.fonctions],
    ['2 · Identifier les tensions', c.pistes.tensions],
    ['3 · Formuler une hypothèse symbolique', c.pistes.hypothese],
    ['4 · Identifier l\'ombre', c.pistes.ombre],
    ['5 · Identifier le potentiel', c.pistes.potentiel],
    ['6 · Formuler une question (pas une prédiction)', c.pistes.question],
  ]
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {FICTIONAL_CHARTS.map((fc, idx) => (
          <button key={fc.id} onClick={() => { setI(idx); setOpen(null) }}
            className={`rounded-full border px-3 py-1 font-sans text-[12px] ${i === idx ? 'border-gold-400/60 text-gold-200' : 'border-gold-500/15 text-ink-300'}`}>
            {fc.nom}
          </button>
        ))}
      </div>
      <Card>
        <SectionTitle kicker="Thème fictif">{c.nom}</SectionTitle>
        <div className="grid gap-2 sm:grid-cols-2">
          <div>
            <div className="font-sans text-[11px] uppercase tracking-wider text-gold-400/70">Placements</div>
            <ul className="mt-1 list-disc pl-5 text-[13px] text-ink-200">{c.placements.map((p, k) => <li key={k}>{p}</li>)}</ul>
          </div>
          <div>
            <div className="font-sans text-[11px] uppercase tracking-wider text-gold-400/70">Aspects</div>
            <ul className="mt-1 list-disc pl-5 text-[13px] text-ink-200">{c.aspects.map((p, k) => <li key={k}>{p}</li>)}</ul>
          </div>
        </div>
        <p className="mt-3 text-[14px] text-ink-300">
          Travaillez d'abord par vous-même (dans le journal ou sur papier), puis dépliez chaque piste
          pour comparer.
        </p>
        <div className="mt-3 space-y-2">
          {steps.map(([label, body]) => (
            <div key={label} className="rounded-lg border border-gold-500/12">
              <button onClick={() => setOpen(open === label ? null : label)} className="flex w-full items-center justify-between px-3 py-2 text-left font-display text-ink-100">
                {label}<span className="text-gold-400/70">{open === label ? '−' : '+'}</span>
              </button>
              {open === label && <p className="border-t border-gold-500/10 px-3 py-2 text-[14px] text-ink-200">{body}</p>}
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
