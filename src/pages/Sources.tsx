import { SOURCE_LABELS, type SourceTag } from '@/content/types'
import { Card, SourceBadge, Callout, Disclaimer, SectionTitle } from '@/components/ui'

const EXPLAIN: Record<SourceTag, string> = {
  traditionnel: "Élément présent de longue date dans la tradition astrologique ou mythologique concernée (ex. : la maîtrise de Vénus sur le Taureau, le récit d'un mythe grec).",
  'interpretation-symbolique': "Lecture symbolique proposée dans cette école : une mise en images cohérente, mais qui reste une interprétation, pas un fait.",
  'rapprochement-moderne': "Analogie établie surtout aux XIXᵉ–XXIᵉ siècles (psychologie des profondeurs, Golden Dawn, auteurs contemporains). Utile, mais récente et discutée.",
  hypothese: "Piste avancée à titre exploratoire, sans consensus. À prendre comme une question, pas comme une réponse.",
  'contenu-pedagogique': "Formulation, exercice ou schéma créés pour cette école afin de faciliter l'apprentissage.",
}

const TRADITIONS = [
  { titre: 'Astrologie', corps: "Héritage babylonien, hellénistique (Ptolémée), médiéval arabe et latin, puis renouveau psychologique au XXᵉ siècle. Les significations planétaires et les maîtrises viennent surtout de la tradition hellénistique ; l'usage psychologique est moderne." },
  { titre: 'Mythologie', corps: "Sources grecques et romaines (Homère, Hésiode, Ovide, tragiques). Les récits sont ici résumés avec nos propres mots ; aucune traduction protégée n'est reproduite. Les variantes existent : nous en signalons certaines." },
  { titre: 'Psychologie des profondeurs', corps: "C. G. Jung et ses continuateurs (von Franz, Hillman…). Les concepts (archétype, Ombre, Soi, individuation) sont de Jung ; leur application à l'astrologie est le fait d'auteurs ultérieurs et n'engage pas Jung lui-même." },
  { titre: 'Alchimie', corps: "Traités latins et de la Renaissance (Rosarium, Splendor Solis, Atalanta fugiens). La lecture psychologique de l'alchimie suit notamment Jung (Psychologie et alchimie). Les correspondances avec les signes ne sont pas historiquement universelles." },
  { titre: 'Hermétisme', corps: "Corpus Hermeticum et Table d'Émeraude (Antiquité tardive). La liste des « sept principes » vient d'un ouvrage anonyme de 1908, Le Kybalion, qui est une reformulation moderne — nous le précisons systématiquement." },
  { titre: 'Tarot', corps: "Tarot de Marseille (XVIIᵉ–XVIIIᵉ s.) pour l'iconographie ; correspondances astrologiques surtout issues de la Golden Dawn (fin XIXᵉ) et d'écoles francophones. Elles divergent : nous écrivons « selon telle tradition »." },
]

export function Sources() {
  return (
    <div className="space-y-8">
      <div>
        <div className="font-sans text-[11px] uppercase tracking-[0.22em] text-gold-400/80">Sources & traditions</div>
        <h1 className="mt-1 font-display text-3xl md:text-4xl">D'où vient ce qui est enseigné ici</h1>
        <p className="mt-2 max-w-2xl text-ink-300">
          La transparence est essentielle. Chaque enseignement important porte un badge indiquant sa
          nature. Aucun texte protégé n'est reproduit ; le contenu est original et pédagogique.
        </p>
      </div>

      <Card>
        <SectionTitle kicker="Légende des badges">Cinq natures de contenu</SectionTitle>
        <div className="space-y-3">
          {(Object.keys(SOURCE_LABELS) as SourceTag[]).map((t) => (
            <div key={t} className="flex flex-col gap-1 border-b border-gold-500/10 pb-2 last:border-0">
              <SourceBadge tag={t} />
              <p className="text-[14px] text-ink-300">{EXPLAIN[t]}</p>
            </div>
          ))}
        </div>
      </Card>

      <div>
        <SectionTitle kicker="Les grands corpus">Traditions mobilisées</SectionTitle>
        <div className="grid gap-3 sm:grid-cols-2">
          {TRADITIONS.map((tr) => (
            <Card key={tr.titre}>
              <h3 className="font-display text-xl text-gold-200">{tr.titre}</h3>
              <p className="mt-1 text-[14px] text-ink-300">{tr.corps}</p>
            </Card>
          ))}
        </div>
      </div>

      <Callout title="Sur l'inspiration de cette école" tone="note">
        Cette application s'inspire librement de grands thèmes publics associés à l'astrologie
        symbolique et archétypale francophone (l'astrologie comme langage, les signes comme étapes de
        la conscience, le thème comme mythe personnel, les liens avec Jung, le Tarot et l'alchimie).
        Elle ne reproduit aucun texte, cours ou ouvrage protégé et ne prétend représenter
        l'enseignement d'aucun auteur en particulier. Le contenu a été rédigé spécifiquement pour ce
        parcours.
      </Callout>

      <Disclaimer />
    </div>
  )
}
