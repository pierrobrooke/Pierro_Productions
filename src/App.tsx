import {
  BrandCard,
  BrandProvider,
  PageHeader,
  SectionLabel,
  Tag,
  ThroughLine,
} from '@pierro-productions/butterfly-system'
import './App.css'

export default function App() {
  return (
    <BrandProvider brand="pierro" className="page">
      <div className="page__inner">
        <PageHeader
          eyebrow="Brand Universe"
          title={
            <>
              Clarissa
              <br />
              <em>Pierro</em>
            </>
          }
          tagline="The through line of all of it. Five distinct worlds, one source — a consciousness guide, founder, and creator who spent 24 years building and finally set the blueprint on fire."
        />

        <main className="page__main">
          <ThroughLine
            title={
              <>
                I see your frequency
                <br />
                before you do.
              </>
            }
            usp="“I help people recognize they've always been exactly who they were meant to become.”"
          >
            Not mindset. Not motivation. Frequency — the energetic signature you're broadcasting
            that's either calling in your best life or quietly blocking it. Every brand below is a
            different door into that same truth.
          </ThroughLine>

          <SectionLabel>Five Projects</SectionLabel>

          <div className="page__brands">
            <BrandCard
              number="01"
              name="PoleClass Pro"
              pill="Separate project"
              description="Pole fitness education platform — professional-grade instruction and curriculum for instructors and studios."
              href="#"
            />
            <BrandCard
              number="02"
              name="Zensual Mastery"
              pill="Separate project"
              description="The embodiment arm — where frequency becomes a daily, physical, undeniable practice. Proprietary methodology, digital lessons, and movement resources."
              tags={['Proprietary methodology', 'Goddess Quiz']}
              href="#"
            />
            <BrandCard
              number="03"
              name="Feminine Fitness Branding Platform"
              pill="In development"
              description={
                <>
                  Build your own feminine fitness brand — a SaaS platform with a 5-layer design
                  system and four distinct style directions.
                  <span className="page__style-chips">
                    <Tag variant="outline">Fitness</Tag>
                    <Tag variant="outline">Silky</Tag>
                    <Tag variant="outline">Mystical</Tag>
                    <Tag variant="outline">AfterDark</Tag>
                  </span>
                </>
              }
              href="#"
            />
            <BrandCard
              number="04"
              name="Cotton Candy Revolt"
              pill="Separate project"
              description="Sarcastic clapbacks at misogyny — digital art creations for women who were handed a script they never agreed to, and are in the process of setting it on fire."
              tags={['Looks Sweet, Bites Back', 'Said To Her: Vol. I']}
              href="#"
            />
            <BrandCard
              number="05"
              name="The Frequency Blueprint"
              pill="Separate project"
              description="A consciousness and spiritual framework — and the tools built on top of it. Daily frequency calibration, not theory."
              tags={['Wealth Currency Game', 'Notion Life Planner RPG', 'Course System']}
              href="#"
            />
          </div>
        </main>

        <footer className="page__footer">
          <span className="page__footer-sig">Clarissa Pierro — The through line</span>
          <span className="page__footer-note">Brand Universe ☂</span>
        </footer>
      </div>
    </BrandProvider>
  )
}
