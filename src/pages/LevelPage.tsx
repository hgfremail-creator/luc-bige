import { useState, useEffect } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { LEVEL_BY_SLUG } from '@/content/curriculum'
import type { Level } from '@/content/types'
import { useStore, isLevelUnlocked } from '@/lib/store'
import { Card, Button, Pill, Callout, Disclaimer } from '@/components/ui'
import { FacetList } from '@/components/FacetList'
import { SYMBOLIC_LANGUAGE } from '@/content/symbolic'
import { ELEMENTS } from '@/content/elements'
import { MODES, GRILLE } from '@/content/modes'
import { PLANETS } from '@/content/planets'
import { HOUSES } from '@/content/houses'
import { ASPECTS } from '@/content/aspects'
import { MYTHS } from '@/content/myths'
import { JUNG_CONCEPTS } from '@/content/jung'
import { ALCHEMY_CONCEPTS } from '@/content/alchemy'
import { HERMETIC_PRINCIPLES } from '@/content/hermetism'
import { HERO_JOURNEY, TRAVAUX_HERCULE } from '@/content/hero'
import { REGLE_PEDAGOGIQUE } from '@/content/disclaimers'

interface Lesson {
  key: string
  title: string
  subtitle?: string
  body: React.ReactNode
}

export function LevelPage() {
  const { slug = '' } = useParams()
  const level = LEVEL_BY_SLUG[slug]
  const xp = useStore((s) => s.xp)
  const startLevel = useStore((s) => s.startLevel)

  if (!level) return <Navigate to="/parcours" replace />
  if (!isLevelUnlocked(level.numero, startLevel, xp)) {
    return (
      <div className="space-y-4">
        <h1 className="font-display text-3xl">Niveau {level.numero} — {level.titre}</h1>
        <Callout title="Seuil non franchi" tone="ombre">
          Ce niveau se débloquera avec l'expérience acquise dans les niveaux précédents. Continuez le
          parcours, ou explorez librement la <Link to="/bibliotheque" className="link-underline">bibliothèque</Link>.
        </Callout>
        <Button to="/parcours" variant="outline">Retour à la carte</Button>
      </div>
    )
  }

  return <LevelContent slug={slug} level={level} />
}

function LevelContent({ slug, level }: { slug: string; level: Level }) {
  const { completed, completeLesson, setLevelProgress, levelProgress } = useStore()
  const lessons = getLessons(slug)
  const doneCount = lessons.filter((l) => completed.includes(`${slug}:${l.key}`)).length
  const pct = lessons.length ? Math.round((doneCount / lessons.length) * 100) : 0

  useEffect(() => {
    if (pct > (levelProgress[slug] ?? 0)) setLevelProgress(slug, pct)
  }, [pct, slug, levelProgress, setLevelProgress])

  return (
    <div className="space-y-8">
      <div>
        <Link to="/parcours" className="font-sans text-xs text-gold-400/70 hover:text-gold-300">← Carte du parcours</Link>
        <div className="mt-2 flex items-center gap-3">
          <span className="text-3xl text-gold-300">{level.glyphe}</span>
          <div>
            <div className="font-sans text-[11px] uppercase tracking-[0.22em] text-gold-400/80">
              Niveau {level.numero} · {level.etape}
            </div>
            <h1 className="font-display text-3xl md:text-4xl">{level.titre}</h1>
          </div>
        </div>
        <p className="mt-3 max-w-2xl text-ink-200">{level.intention}</p>
        <div className="mt-3 flex items-center gap-3">
          <Pill tone="or">{doneCount}/{lessons.length} unités</Pill>
          <span className="font-sans text-[11px] text-ink-400">{pct}% — chaque unité étudiée donne de l'XP</span>
        </div>
      </div>

      {['planetes', 'maisons', 'aspects'].includes(slug) && (
        <Callout title="Rappel" tone="or">
          {REGLE_PEDAGOGIQUE.map((r) => `${r.cle} = ${r.valeur}`).join('   ·   ')}
        </Callout>
      )}

      <div className="space-y-3">
        {lessons.map((l) => (
          <LessonBlock
            key={l.key}
            lesson={l}
            done={completed.includes(`${slug}:${l.key}`)}
            onComplete={() => completeLesson(`${slug}:${l.key}`)}
          />
        ))}
      </div>

      <Disclaimer />
    </div>
  )
}

function LessonBlock({ lesson, done, onComplete }: { lesson: Lesson; done: boolean; onComplete: () => void }) {
  const [open, setOpen] = useState(false)
  return (
    <Card className={done ? 'border-gold-400/30' : ''}>
      <button className="flex w-full items-center justify-between text-left" onClick={() => setOpen((o) => !o)}>
        <div>
          <div className="font-display text-xl text-ink-100">{lesson.title}</div>
          {lesson.subtitle && <div className="font-sans text-[12px] text-ink-400">{lesson.subtitle}</div>}
        </div>
        <span className="text-gold-400/70">{done ? '✓' : open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="mt-4 border-t border-gold-500/10 pt-4">
          {lesson.body}
          <div className="mt-4 flex items-center gap-3">
            <Button variant={done ? 'ghost' : 'primary'} onClick={onComplete} disabled={done}>
              {done ? 'Étudié ✓' : "J'ai étudié cette unité (+XP)"}
            </Button>
            <Link to={`/quiz`} className="font-sans text-xs text-gold-400/70 hover:text-gold-300">
              S'entraîner au quiz →
            </Link>
          </div>
        </div>
      )}
    </Card>
  )
}

function getLessons(slug: string): Lesson[] {
  switch (slug) {
    case 'langage-symbolique':
      return SYMBOLIC_LANGUAGE.map((c) => ({
        key: c.id,
        title: c.nom,
        subtitle: c.categorie,
        body: <FacetList facets={c.facets} />,
      }))
    case 'elements':
      return ELEMENTS.map((e) => ({
        key: e.id,
        title: `${e.glyphe} ${e.nom}`,
        subtitle: `Signes : ${e.signes.join(', ')}`,
        body: (
          <div className="space-y-3 text-[15px] text-ink-200">
            <p>{e.symbolisme}</p>
            <p>{e.psychologie}</p>
            <Callout title="Fonction dans le développement humain">{e.fonctionDeveloppement}</Callout>
            <div className="grid gap-2 sm:grid-cols-2">
              <Callout title="Excès" tone="ombre">{e.exces}</Callout>
              <Callout title="Manque" tone="ombre">{e.manque}</Callout>
            </div>
            <p><strong>Parallèle alchimique :</strong> {e.paralleleAlchimique.contenu}</p>
            <p><strong>Parallèle Tarot :</strong> {e.paralleleTarot.contenu}</p>
            <p><strong>Parallèle hermétique :</strong> {e.paralleleHermetique.contenu}</p>
            <Callout title="Exercice interactif" tone="note">{e.exerciceInteractif}</Callout>
          </div>
        ),
      }))
    case 'signes':
      return [
        {
          key: 'cycle',
          title: 'Le zodiaque comme cycle',
          subtitle: 'Douze étapes d’un même processus',
          body: (
            <div className="space-y-3 text-[15px] text-ink-200">
              <p>
                Les douze signes peuvent être étudiés comme les étapes successives d'un même
                mouvement de conscience : de l'affirmation première (Bélier) au retour au tout
                (Poissons), puis un nouveau départ. Chaque signe hérite du précédent et prépare le
                suivant.
              </p>
              <p>
                Rendez-vous sur la page <Link to="/zodiaque" className="link-underline">Le zodiaque</Link>{' '}
                pour la roue interactive et les fiches complètes des douze signes (symbole, élément,
                mode, archétype, mythologie, ombre, question initiatique, correspondances, étape du
                chemin du héros).
              </p>
              <Button to="/zodiaque" variant="outline">Ouvrir la roue du zodiaque</Button>
            </div>
          ),
        },
        ...MODES.map((m) => ({
          key: `mode-${m.id}`,
          title: `Mode ${m.nom} — ${m.principe}`,
          subtitle: m.signes.join(', '),
          body: (
            <div className="space-y-3 text-[15px] text-ink-200">
              <p>{m.description}</p>
              <p className="text-ink-400">{m.saison}</p>
              <Callout title="Ombre" tone="ombre">{m.ombre}</Callout>
              <Callout title="Exercice" tone="note">{m.exercice}</Callout>
            </div>
          ),
        })),
        {
          key: 'grille',
          title: 'Grille Élément × Mode',
          body: (
            <table className="w-full text-[14px]">
              <thead>
                <tr className="text-gold-300"><th className="p-2 text-left">Élément</th><th className="p-2">Cardinal</th><th className="p-2">Fixe</th><th className="p-2">Mutable</th></tr>
              </thead>
              <tbody>
                {GRILLE.map((g) => (
                  <tr key={g.element} className="border-t border-gold-500/10">
                    <td className="p-2 font-display text-ink-100">{g.element}</td>
                    <td className="p-2 text-center text-ink-200">{g.cardinal}</td>
                    <td className="p-2 text-center text-ink-200">{g.fixe}</td>
                    <td className="p-2 text-center text-ink-200">{g.mutable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ),
        },
      ]
    case 'planetes':
      return PLANETS.map((p) => ({
        key: p.id,
        title: `${p.glyphe} ${p.nom}`,
        subtitle: p.fonction,
        body: <PlanetBody id={p.id} />,
      }))
    case 'maisons':
      return HOUSES.map((h) => ({
        key: `m${h.numero}`,
        title: `Maison ${h.romain} — ${h.nom}`,
        subtitle: h.domaineTraditionnel,
        body: (
          <div className="space-y-2 text-[15px] text-ink-200">
            <p><strong>Question existentielle :</strong> {h.questionExistentielle}</p>
            <p><strong>Archétype :</strong> {h.archetype}</p>
            <p><strong>Psychologie :</strong> {h.psychologie}</p>
            <p className="text-ink-400"><strong>Axe {h.axe} :</strong> {h.axeSens}</p>
            <Callout title="Ombre" tone="ombre">{h.ombre}</Callout>
            <Callout title="Potentiel">{h.potentiel}</Callout>
            <Callout title="Exercice" tone="note">{h.exercice}</Callout>
            <p className="text-ink-300"><strong>Exemple d'interprétation :</strong> {h.exempleInterpretation}</p>
          </div>
        ),
      }))
    case 'aspects':
      return ASPECTS.map((a) => ({
        key: a.id,
        title: `${a.glyphe} ${a.nom} — ${a.angle}°`,
        subtitle: `Famille : ${a.famille}`,
        body: (
          <div className="space-y-2 text-[15px] text-ink-200">
            <p>{a.nature}</p>
            <ol className="list-decimal space-y-1 pl-5">
              {a.processus.map((s, i) => <li key={i}>{s}</li>)}
            </ol>
            <Callout title="Le malentendu à éviter" tone="ombre">{a.malentendu}</Callout>
            <Callout title="Lecture">{a.lecture}</Callout>
            <Callout title="Exercice" tone="note">{a.exercice}</Callout>
          </div>
        ),
      }))
    case 'theme-natal':
      return [
        { key: 'intro', title: 'Données calculées vs interprétation', body: (
          <div className="space-y-3 text-[15px] text-ink-200">
            <p>Un thème natal comporte deux registres qu'il ne faut jamais confondre :</p>
            <Callout title="1 · Données astronomiques calculées">
              Les positions écliptiques du Soleil, de la Lune, des planètes ; l'Ascendant et le
              Milieu du Ciel (si l'heure est connue) ; les maisons. C'est vérifiable et exact.
            </Callout>
            <Callout title="2 · Interprétation symbolique" tone="note">
              Le sens attribué à ces positions par une tradition. C'est une lecture proposée, à
              confronter à l'expérience — jamais une prédiction.
            </Callout>
            <p>Si l'heure de naissance est inconnue : on n'invente ni l'Ascendant ni les maisons.</p>
          </div>
        ) },
        { key: 'couches', title: 'La lecture en dix couches', body: (
          <div className="space-y-2 text-[15px] text-ink-200">
            <p>On lit un thème par strates successives, du plus central au plus fin :</p>
            <ol className="list-decimal space-y-0.5 pl-5">
              <li>Soleil</li><li>Lune</li><li>Ascendant</li><li>Planètes personnelles (Mercure, Vénus, Mars)</li>
              <li>Maisons</li><li>Aspects</li><li>Dominantes</li><li>Axes</li><li>Éléments</li><li>Synthèse</li>
            </ol>
            <Button to="/theme" variant="outline">Ouvrir le calculateur de thème</Button>
          </div>
        ) },
        { key: 'dominante', title: 'La dominante', body: (
          <div className="space-y-2 text-[15px] text-ink-200">
            <p>
              Une carte contient beaucoup d'informations : il faut apprendre à <strong>hiérarchiser</strong>.
              La « dominante » est la fonction qui, selon une pondération transparente (angularité,
              maîtrise de l'Ascendant, dignités, nombre et serrage des aspects), ressort le plus.
            </p>
            <Callout title="Pourquoi cette planète est-elle dominante ?">
              Le calculateur affiche le détail du score, ligne par ligne. Ce n'est jamais présenté
              comme une vérité absolue : c'est un outil de lecture.
            </Callout>
          </div>
        ) },
      ]
    case 'mythologie':
      return MYTHS.map((m) => ({
        key: m.id,
        title: `${m.nom}${m.nomRomain ? ` / ${m.nomRomain}` : ''}`,
        subtitle: m.domaine,
        body: (
          <div className="space-y-2 text-[15px] text-ink-200">
            <p>{m.histoire}</p>
            <p><strong>Symbolisme :</strong> {m.symbolisme}</p>
            <p><strong>Archétype :</strong> {m.archetype}{m.planete ? ` · planète : ${m.planete}` : ''}{m.signe ? ` · signe : ${m.signe}` : ''}</p>
            <Callout title="Thème psychologique">{m.themePsychologique}</Callout>
            <Callout title="Enseignement initiatique" tone="note">{m.enseignementInitiatique}</Callout>
            <p className="font-sans text-[11px] text-ink-400">
              Les correspondances planète / signe sont des lectures symboliques, pas des équivalences scientifiques.
            </p>
          </div>
        ),
      }))
    case 'jung':
      return JUNG_CONCEPTS.map((c) => ({ key: c.id, title: c.nom, subtitle: 'Psychologie des profondeurs', body: <FacetList facets={c.facets} /> }))
    case 'tarot':
      return [
        { key: 'intro', title: 'Le Tarot comme parcours — et ses correspondances', body: (
          <div className="space-y-3 text-[15px] text-ink-200">
            <p>
              Les 22 arcanes majeurs forment une galerie d'archétypes disposée en chemin initiatique,
              du Mat (0) au Monde (21). On peut les mettre en regard de l'astrologie, mais{' '}
              <strong>les correspondances varient selon les traditions</strong> (Golden Dawn, tarot de
              Marseille symbolique, écoles francophones…).
            </p>
            <Callout title="Formulation juste">
              « Correspondance selon telle tradition » — jamais « c'est la correspondance exacte ».
            </Callout>
            <Button to="/bibliotheque" variant="outline">Parcourir les 22 arcanes</Button>
            <Button to="/comparateur" variant="ghost">Comparer Tarot et Zodiaque</Button>
          </div>
        ) },
      ]
    case 'alchimie':
      return ALCHEMY_CONCEPTS.map((c) => ({ key: c.id, title: `${c.glyphe ?? ''} ${c.nom}`, subtitle: "Étape ou principe de l'Œuvre", body: <FacetList facets={c.facets} /> }))
    case 'hermetisme':
      return HERMETIC_PRINCIPLES.map((c) => ({ key: c.id, title: `${c.glyphe ?? ''} ${c.nom}`, subtitle: 'Formulation moderne (Le Kybalion, 1908)', body: <FacetList facets={c.facets} /> }))
    case 'heros':
      return [
        ...HERO_JOURNEY.map((h) => ({
          key: `etape-${h.numero}`,
          title: `${h.numero}. ${h.titre}`,
          subtitle: h.signeParallele,
          body: (
            <div className="space-y-2 text-[15px] text-ink-200">
              <p>{h.description}</p>
              <Callout title="Versant intérieur">{h.interieur}</Callout>
              {h.travailHercule && <Callout title="Écho — un travail d'Hercule">{h.travailHercule}</Callout>}
              <Callout title="Question" tone="note">« {h.question} »</Callout>
            </div>
          ),
        })),
        {
          key: 'travaux',
          title: "Les douze travaux d'Hercule",
          subtitle: 'Une carte de l’individuation par les épreuves',
          body: (
            <div className="space-y-3 text-[14px] text-ink-200">
              <p className="font-sans text-[11px] text-ink-400">
                Plusieurs systèmes de correspondances zodiacales existent ; l'ordre et les attributions
                varient selon les auteurs. Ci-dessous, une version parmi d'autres.
              </p>
              {TRAVAUX_HERCULE.map((t) => (
                <div key={t.numero} className="rounded-lg border border-gold-500/12 p-3">
                  <div className="font-display text-ink-100">{t.numero}. {t.nom} <span className="font-sans text-[11px] text-gold-400/70">≈ {t.correspondanceZodiacale}</span></div>
                  <p className="mt-1">{t.recit}</p>
                  <p className="mt-1 text-ink-300"><strong>Sens :</strong> {t.sens}</p>
                </div>
              ))}
            </div>
          ),
        },
      ]
    case 'lire-un-theme':
      return [
        { key: 'methode', title: 'Méthode : assembler les couches', body: (
          <div className="space-y-2 text-[15px] text-ink-200">
            <p>Lire un thème, c'est superposer des calques sans jamais réduire la personne à une formule.</p>
            <ol className="list-decimal space-y-0.5 pl-5">
              <li>Identifier les fonctions en jeu (planètes) et leur couleur (signes).</li>
              <li>Situer les domaines (maisons).</li>
              <li>Repérer les relations dynamiques (aspects) — tensions et fluidités.</li>
              <li>Dégager 1 à 3 dominantes et les axes principaux.</li>
              <li>Regarder l'équilibre des éléments.</li>
              <li>Formuler une <strong>hypothèse symbolique</strong> et une <strong>question</strong> — pas une prédiction.</li>
            </ol>
            <Button to="/quiz" variant="outline">Aller aux exercices d'interprétation</Button>
          </div>
        ) },
      ]
    case 'mythe-personnel':
      return [
        { key: 'atelier', title: 'Le thème natal comme mythe personnel', body: (
          <div className="space-y-3 text-[15px] text-ink-200">
            <p>
              Dernière étape : à partir de votre propre carte, composer un récit symbolique. Non
              « votre destin est… », mais « votre carte peut être explorée comme le récit d'une
              personne appelée à… ». Une invitation à la réflexion.
            </p>
            <p>
              Le calculateur de thème génère un brouillon de mythe personnel à partir du Soleil, de
              la Lune, de l'Ascendant, de la dominante, des aspects majeurs et des éléments — que
              vous retravaillez ensuite dans le journal.
            </p>
            <Button to="/theme" variant="outline">Ouvrir mon thème</Button>
            <Button to="/journal" variant="ghost">Écrire dans le journal</Button>
          </div>
        ) },
      ]
    default:
      return []
  }
}

function PlanetBody({ id }: { id: string }) {
  const p = PLANETS.find((x) => x.id === id)!
  return (
    <div className="space-y-2 text-[15px] text-ink-200">
      <p><strong>Fonction :</strong> {p.fonction}</p>
      <p><strong>Archétype :</strong> {p.archetype} — <strong>Principe :</strong> {p.principe}</p>
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
      <div className="rounded-lg border border-gold-500/12 p-3">
        <div className="font-sans text-[11px] uppercase tracking-wider text-gold-400/70">Exemples dans un thème</div>
        <ul className="mt-1 list-disc pl-5">{p.exemplesTheme.map((e, i) => <li key={i}>{e}</li>)}</ul>
      </div>
    </div>
  )
}
