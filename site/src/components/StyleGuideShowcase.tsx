import { Link } from 'react-router-dom'
import { Badge } from '@lib/components/Badge/Badge'
import { Card } from '@lib/components/Card/Card'
import { Heading } from '@lib/components/Heading/Heading'
import { Text } from '@lib/components/Text/Text'
import styles from './StyleGuideShowcase.module.css'

const brandPalette = [
  ['50', '#f0fdfa'],
  ['100', '#ccfbf1'],
  ['200', '#99f6e4'],
  ['300', '#5eead4'],
  ['400', '#2dd4bf'],
  ['500', '#14b8a6'],
  ['600', '#0d9488'],
  ['700', '#0f766e'],
  ['800', '#115e59'],
  ['900', '#134e4a'],
] as const

const neutralPalette = [
  ['0', '#ffffff'],
  ['50', '#fafaf9'],
  ['100', '#f5f5f4'],
  ['200', '#e7e5e4'],
  ['300', '#d6d3d1'],
  ['400', '#a8a29e'],
  ['500', '#78716c'],
  ['600', '#57534e'],
  ['700', '#44403c'],
  ['800', '#292524'],
  ['900', '#1c1917'],
  ['1000', '#0c0a09'],
] as const

const semanticPalette = [
  ['Success', '#2f9e44', '#d3f9d8', '#1e6e2e'],
  ['Warning', '#f08c00', '#fff3bf', '#b35900'],
  ['Error', '#e03131', '#ffe3e3', '#a61e1e'],
  ['Info', '#1971c2', '#d0ebff', '#0d3d73'],
] as const

const spacingScale = [
  ['space-1', '4px'],
  ['space-2', '8px'],
  ['space-3', '12px'],
  ['space-4', '16px'],
  ['space-5', '20px'],
  ['space-6', '24px'],
  ['space-8', '32px'],
  ['space-10', '40px'],
  ['space-12', '48px'],
  ['space-16', '64px'],
] as const

const radiusScale = [
  ['radius-sm', '4px'],
  ['radius-md', '8px'],
  ['radius-lg', '12px'],
  ['radius-xl', '16px'],
  ['radius-full', '9999px'],
] as const

const shadowScale = [
  ['shadow-sm', '0 1px 2px'],
  ['shadow-md', '0 4px 6px'],
  ['shadow-lg', '0 10px 15px'],
  ['shadow-xl', '0 20px 25px'],
] as const

const motionScale = [
  ['transition-fast', '100ms ease'],
  ['transition-normal', '200ms ease'],
  ['transition-slow', '300ms ease'],
] as const

const zScale = [
  ['z-base', '0'],
  ['z-raised', '10'],
  ['z-overlay', '100'],
  ['z-modal', '200'],
  ['z-toast', '300'],
] as const

export const styleGuideSections = [
  {
    slug: 'typography',
    name: 'Typography',
    description: 'Fonts, type scale, and text rhythm for headings, body copy, and code.',
  },
  {
    slug: 'color-system',
    name: 'Color System',
    description: 'Brand, neutral, and semantic color tokens for surfaces, text, and states.',
  },
  {
    slug: 'spacing-scale',
    name: 'Spacing Scale',
    description: 'Spacing primitives that drive layout rhythm, gaps, and component padding.',
  },
  {
    slug: 'radii',
    name: 'Radii',
    description: 'Corner radii used to shape controls, surfaces, and rounded containers.',
  },
  {
    slug: 'shadows',
    name: 'Shadows',
    description: 'Elevation tokens for raised surfaces and interactive depth.',
  },
  {
    slug: 'motion-layering',
    name: 'Motion & Layering',
    description: 'Transition timing and layering primitives for interaction and hierarchy.',
  },
] as const

export type StyleGuideSectionSlug = (typeof styleGuideSections)[number]['slug']

function TypographySection() {
  return (
    <div className={styles.sectionContent}>
      <div className={styles.grid}>
        <Card variant="outlined" padding="md">
          <div className={styles.stack}>
            <Text size="xs" weight="semibold" color="subtle">
              Heading Family
            </Text>
            <div className={styles.specimen}>
              <Heading level={1} size="2xl">
                Sora creates the display voice.
              </Heading>
              <Text size="sm" color="subtle">
                Used for headings, emphasis, and strong page-level hierarchy.
              </Text>
            </div>
          </div>
        </Card>

        <Card variant="outlined" padding="md">
          <div className={styles.stack}>
            <Text size="xs" weight="semibold" color="subtle">
              Body Family
            </Text>
            <div className={styles.specimen}>
              <Text size="md">
                Plus Jakarta Sans carries long-form reading, form labels, and supporting copy.
              </Text>
              <Text size="sm" color="subtle">
                Default body line height is 1.5 for readable UI copy.
              </Text>
            </div>
          </div>
        </Card>

        <Card variant="outlined" padding="md">
          <div className={styles.stack}>
            <Text size="xs" weight="semibold" color="subtle">
              Monospace
            </Text>
            <div className={styles.specimen}>
              <Text size="sm" mono>
                --space-4: 1rem; --radius-lg: 0.75rem;
              </Text>
              <Text size="sm" color="subtle">
                JetBrains Mono is reserved for code, tokens, and raw values.
              </Text>
            </div>
          </div>
        </Card>
      </div>

      <div className={styles.grid} style={{ marginTop: 'var(--space-4)' }}>
        <Card variant="filled" padding="md">
          <div className={styles.stack}>
            <div className={styles.tokenLine}>
              <Text size="sm" weight="semibold">
                Heading scale
              </Text>
              <Text size="xs" mono>
                2xl / xl / lg / md / sm / xs
              </Text>
            </div>
            <Heading level={1} size="2xl">
              Display
            </Heading>
            <Heading level={2} size="xl">
              Hero
            </Heading>
            <Heading level={3} size="lg">
              Section
            </Heading>
            <Heading level={4} size="md">
              Subsection
            </Heading>
            <Heading level={5} size="sm">
              Card title
            </Heading>
            <Heading level={6} size="xs">
              Micro heading
            </Heading>
          </div>
        </Card>

        <Card variant="filled" padding="md">
          <div className={styles.stack}>
            <div className={styles.tokenLine}>
              <Text size="sm" weight="semibold">
                Body scale
              </Text>
              <Text size="xs" mono>
                xl / lg / md / sm / xs
              </Text>
            </div>
            <Text size="xl">Extra large body</Text>
            <Text size="lg">Large body</Text>
            <Text size="md">Default body text</Text>
            <Text size="sm">Supporting text</Text>
            <Text size="xs" color="subtle">
              Caption and metadata
            </Text>
          </div>
        </Card>
      </div>
    </div>
  )
}

function ColorSystemSection() {
  return (
    <div className={styles.sectionContent}>
      <div className={styles.grid}>
        <Card variant="outlined" padding="md">
          <div className={styles.palette}>
            <Text size="sm" weight="semibold">
              Brand palette
            </Text>
            {brandPalette.map(([step, value]) => (
              <div key={step} className={styles.swatch}>
                <div className={styles.swatchChip} style={{ backgroundColor: value }} />
                <div className={styles.swatchMeta}>
                  <Text as="span" size="sm" className={styles.swatchName}>{`brand-${step}`}</Text>
                  <Text as="span" size="xs" mono>
                    {value}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card variant="outlined" padding="md">
          <div className={styles.palette}>
            <Text size="sm" weight="semibold">
              Neutral palette
            </Text>
            {neutralPalette.map(([step, value]) => (
              <div key={step} className={styles.swatch}>
                <div className={styles.swatchChip} style={{ backgroundColor: value }} />
                <div className={styles.swatchMeta}>
                  <Text as="span" size="sm" className={styles.swatchName}>{`neutral-${step}`}</Text>
                  <Text as="span" size="xs" mono>
                    {value}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className={styles.grid} style={{ marginTop: 'var(--space-4)' }}>
        {semanticPalette.map(([name, base, light, dark]) => (
          <Card key={name} variant="filled" padding="md">
            <div className={styles.stack}>
              <Text size="sm" weight="semibold">
                {name}
              </Text>
              <div className={styles.swatch}>
                <div className={styles.swatchChip} style={{ backgroundColor: light }} />
                <div className={styles.swatchMeta}>
                  <Text as="span" size="sm">
                    Light
                  </Text>
                  <Text as="span" size="xs" mono>
                    {light}
                  </Text>
                </div>
              </div>
              <div className={styles.swatch}>
                <div className={styles.swatchChip} style={{ backgroundColor: base }} />
                <div className={styles.swatchMeta}>
                  <Text as="span" size="sm">
                    Base
                  </Text>
                  <Text as="span" size="xs" mono>
                    {base}
                  </Text>
                </div>
              </div>
              <div className={styles.swatch}>
                <div className={styles.swatchChip} style={{ backgroundColor: dark }} />
                <div className={styles.swatchMeta}>
                  <Text as="span" size="sm">
                    Dark
                  </Text>
                  <Text as="span" size="xs" mono>
                    {dark}
                  </Text>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

function SpacingScaleSection() {
  return (
    <div className={styles.sectionContent}>
      <Card variant="outlined" padding="md">
        <div className={styles.spacingScale}>
          {spacingScale.map(([token, value]) => (
            <div key={token} className={styles.spacingRow}>
              <Text size="sm" weight="medium">
                {token}
              </Text>
              <div className={styles.spacingBarTrack}>
                <div className={styles.spacingBar} style={{ width: `var(--${token})` }} />
              </div>
              <Text size="xs" mono>
                {value}
              </Text>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

function RadiiSection() {
  return (
    <div className={styles.sectionContent}>
      <div className={styles.radiusGrid}>
        {radiusScale.map(([token, value]) => (
          <Card key={token} variant="outlined" padding="md">
            <div className={styles.radiusTile}>
              <div className={styles.radiusShape} style={{ borderRadius: `var(--${token})` }} />
              <Text size="sm" weight="semibold">
                {token}
              </Text>
              <Text size="xs" mono>
                {value}
              </Text>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

function ShadowsSection() {
  return (
    <div className={styles.sectionContent}>
      <div className={styles.shadowGrid}>
        {shadowScale.map(([token, value]) => (
          <Card key={token} variant="filled" padding="md">
            <div className={styles.shadowTile}>
              <div className={styles.shadowSurface} style={{ boxShadow: `var(--${token})` }} />
              <Text size="sm" weight="semibold">
                {token}
              </Text>
              <Text size="xs" mono>
                {value}
              </Text>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

function MotionLayeringSection() {
  return (
    <div className={styles.sectionContent}>
      <div className={styles.motionGrid}>
        <Card variant="outlined" padding="md">
          <div className={styles.motionTile}>
            <Text size="sm" weight="semibold">
              Transitions
            </Text>
            {motionScale.map(([token, value]) => (
              <div key={token} className={styles.tokenLine}>
                <div>
                  <Text size="sm" className={styles.tokenLabel}>
                    {token}
                  </Text>
                  <Text size="xs" color="subtle">
                    Use for hover, disclosure, and focus transitions.
                  </Text>
                </div>
                <Text size="xs" mono className={styles.tokenValue}>
                  {value}
                </Text>
              </div>
            ))}
            <div className={styles.motionPill}>Interactive surface</div>
          </div>
        </Card>

        <Card variant="outlined" padding="md">
          <div className={styles.motionTile}>
            <Text size="sm" weight="semibold">
              Z-index scale
            </Text>
            <div className={styles.zList}>
              {zScale.map(([token, value]) => (
                <div key={token} className={styles.zRow}>
                  <Text size="sm">{token}</Text>
                  <Text size="xs" mono>
                    {value}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export function StyleGuideSectionContent({ slug }: { slug: StyleGuideSectionSlug }) {
  switch (slug) {
    case 'typography':
      return <TypographySection />
    case 'color-system':
      return <ColorSystemSection />
    case 'spacing-scale':
      return <SpacingScaleSection />
    case 'radii':
      return <RadiiSection />
    case 'shadows':
      return <ShadowsSection />
    case 'motion-layering':
      return <MotionLayeringSection />
  }
}

export function StyleGuideShowcase() {
  return (
    <div className={styles.showcase}>
      <div className={styles.intro}>
        <Badge variant="brand" className={styles.introEyebrow}>
          Foundation
        </Badge>
        <Heading level={2} size="sm">
          The visual language behind Tentile
        </Heading>
        <Text color="subtle">
          Browse the core foundation areas of the system and open each one as its own reference
          page.
        </Text>
      </div>

      <div className={styles.sectionIndex}>
        {styleGuideSections.map((section) => (
          <Link
            key={section.slug}
            to={`/style-guide/${section.slug}`}
            className={styles.sectionCard}
          >
            <Card variant="outlined" padding="md">
              <div className={styles.stack}>
                <Heading level={3} size="xs">
                  {section.name}
                </Heading>
                <Text size="sm" color="subtle">
                  {section.description}
                </Text>
                <Text size="xs" weight="semibold" className={styles.sectionCardMeta}>
                  View section
                </Text>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
