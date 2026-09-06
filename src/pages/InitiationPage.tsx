import { useState } from 'react'
import { useStore } from '@/lib/store'
import { Card, Callout, Button, Disclaimer } from '@/components/ui'

interface DailySymbol {
  glyphe: string
  nom: string
  planete?: string
  signe?: string
  mythe: string
  question: string
  contemplation: string
}

const DAYS: DailySymbol[] = [
  { glyphe: '☉', nom: 'Le Soleil', planete: 'Soleil', mythe: 'Les dieux solaires traversent le ciel chaque jour, portant la lumière.', question: 'Qu\'est-ce qui cherche à rayonner à travers moi ?', contemplation: 'Cinq minutes, yeux mi-clos : sentez, au centre de la poitrine, ce qui voudrait être vu et offert. Ne jugez pas ; observez.' },
  { glyphe: '☽', nom: 'La Lune', planete: 'Lune', mythe: 'La mère qui descend chaque année chercher son enfant : l\'amour qui traverse la perte.', question: 'De quoi ai-je besoin, ce soir, pour me sentir en sécurité ?', contemplation: 'Repérez l\'émotion dominante du jour. Donnez-lui une image (météo, paysage). Respirez avec elle sans vouloir la changer.' },
  { glyphe: '☿', nom: 'Mercure', planete: 'Mercure', signe: 'Gémeaux', mythe: 'Le messager qui circule entre tous les mondes et ne s\'installe nulle part.', question: 'Est-ce que je pense, ou est-ce que je répète ?', contemplation: 'Choisissez une conviction. Formulez-la à voix basse, puis son contraire. Écoutez ce qui résiste.' },
  { glyphe: '♀', nom: 'Vénus', planete: 'Vénus', signe: 'Taureau', mythe: 'Née de l\'écume, l\'attraction qui relie et parfois divise les êtres.', question: 'Qu\'est-ce qui a vraiment de la valeur pour moi, hors du regard des autres ?', contemplation: 'Prenez un objet aimé dans les mains. Sans mots, laissez venir pourquoi il compte.' },
  { glyphe: '♂', nom: 'Mars', planete: 'Mars', signe: 'Bélier', mythe: 'Le guerrier : l\'ivresse du combat, mais aussi la force qui protège.', question: 'Comment est-ce que j\'utilise ma force aujourd\'hui ?', contemplation: 'Serrez les poings dix secondes, puis relâchez très lentement. Où va l\'énergie quand elle n\'est pas dépensée contre quelque chose ?' },
  { glyphe: '♃', nom: 'Jupiter', planete: 'Jupiter', signe: 'Sagittaire', mythe: 'Le centaure sage qui éduque les héros ; la fortune qui élargit ce qu\'elle touche.', question: 'Vers quoi est-ce que je grandis — et cette croissance a-t-elle un sens ?', contemplation: 'Nommez une chose apprise cette semaine. Reliez-la à quelque chose de plus grand.' },
  { glyphe: '♄', nom: 'Saturne', planete: 'Saturne', signe: 'Capricorne', mythe: 'Le dieu du temps qui dévore ses enfants : la limite, la loi, la maturité.', question: 'Quelle peur suis-je en train d\'appeler « réalisme » ?', contemplation: 'Asseyez-vous immobile trois minutes. Observez l\'inconfort. La contrainte peut-elle devenir un appui ?' },
  { glyphe: '♅', nom: 'Uranus', planete: 'Uranus', signe: 'Verseau', mythe: 'Prométhée vole le feu aux dieux pour le donner aux humains, et en paie le prix.', question: 'Qu\'est-ce qui, en moi, demande à être libéré ?', contemplation: 'Repérez une habitude suivie sans y croire. Imaginez précisément la vie sans elle.' },
  { glyphe: '♆', nom: 'Neptune', planete: 'Neptune', signe: 'Poissons', mythe: 'La goutte qui a peur de tomber dans la mer et découvre qu\'elle devient la mer.', question: 'Où est-ce que je confonds me relier au tout et me fuir moi-même ?', contemplation: 'Vingt minutes sans écran, sans but. Notez ensuite une seule image surgie du silence.' },
  { glyphe: '♇', nom: 'Pluton', planete: 'Pluton', signe: 'Scorpion', mythe: 'Perséphone goûte la grenade et devient reine de ce qu\'elle a traversé.', question: 'Qu\'est-ce qui doit mourir en moi pour que quelque chose de vrai puisse naître ?', contemplation: 'Nommez une chose d\'un passé révolu. Posez un petit geste de fin (ranger, jeter, écrire un adieu).' },
  { glyphe: '△', nom: 'Le Feu', mythe: 'L\'étincelle qui met en mouvement ce qui dormait.', question: 'Qu\'est-ce qui a allumé un élan en moi récemment ?', contemplation: 'Regardez une flamme (bougie) une minute. Qu\'est-ce qui, en vous, brûle en ce moment ?' },
  { glyphe: '▽', nom: 'La Terre', mythe: 'Le jardinier qui enlève les pierres une à une et découvre que la richesse était sa fidélité.', question: 'Quelle petite chose concrète est-ce que je repousse ?', contemplation: 'Touchez trois matières différentes. Revenez pleinement dans le corps et l\'instant.' },
  { glyphe: '✦', nom: 'Le Symbole', mythe: 'Le sumbolon : un objet brisé en deux dont les moitiés se reconnaissent.', question: 'Quel objet ou animal revient dans mes rêves sans que je sache pourquoi ?', contemplation: 'Choisissez un objet du quotidien. Listez dix choses qu\'il pourrait « vouloir dire ».' },
]

export function InitiationPage() {
  const { initiationDay, advanceInitiation } = useStore()
  const addJournal = useStore((s) => s.addJournal)
  const [note, setNote] = useState('')
  const idx = initiationDay % DAYS.length
  const d = DAYS[idx]
  const today = new Date().toDateString()
  const doneToday = useStore((s) => s.lastInitiation) === today

  return (
    <div className="space-y-6">
      <div>
        <div className="font-sans text-[11px] uppercase tracking-[0.22em] text-gold-400/80">Initiation quotidienne</div>
        <h1 className="mt-1 font-display text-3xl md:text-4xl">Jour {initiationDay + (doneToday ? 0 : 1)} — {d.nom}</h1>
        <p className="mt-2 text-ink-300">Un parcours plus contemplatif : un symbole par jour, une question, un exercice, une trace dans le journal.</p>
      </div>

      <Card>
        <div className="flex items-center gap-4">
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold-500/30 bg-night-900/60 text-3xl text-gold-300">{d.glyphe}</span>
          <div>
            <h2 className="font-display text-2xl">{d.nom}</h2>
            <p className="font-sans text-[12px] text-ink-400">
              {d.planete && `planète : ${d.planete}`}{d.planete && d.signe && ' · '}{d.signe && `signe : ${d.signe}`}
            </p>
          </div>
        </div>
        <Callout title="Mythe">{d.mythe}</Callout>
        <Callout title="Question du jour" tone="note">« {d.question} »</Callout>
        <Callout title="Exercice de contemplation">{d.contemplation}</Callout>

        <div className="mt-4">
          <div className="font-sans text-[11px] uppercase tracking-wider text-gold-400/70">Écriture</div>
          <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={4} placeholder="Ce qui est venu pendant la contemplation…"
            className="mt-1 w-full rounded-lg border border-gold-500/20 bg-night-900/60 p-3 text-[14px] outline-none focus:border-gold-400/50" />
          <div className="mt-3 flex gap-2">
            <Button variant="primary" disabled={doneToday} onClick={() => {
              if (note.trim()) addJournal({ titre: `Initiation — ${d.nom}`, texte: `${d.question}\n\n${note}`, tags: [d.planete ?? d.nom.replace('Le ', '').replace('La ', ''), 'Initiation'], type: 'reflexion' })
              advanceInitiation()
              setNote('')
            }}>
              {doneToday ? 'Symbole du jour accompli ✓' : "Terminer et passer au symbole suivant"}
            </Button>
          </div>
          {doneToday && <p className="mt-2 font-sans text-[11px] text-ink-400">Revenez demain pour le prochain symbole.</p>}
        </div>
      </Card>

      <Disclaimer />
    </div>
  )
}
