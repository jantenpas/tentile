import { render, screen } from '@testing-library/react'
import {
  StyleGuideSectionContent,
  StyleGuideShowcase,
  styleGuideSections,
} from './StyleGuideShowcase'

describe('StyleGuideShowcase', () => {
  it('renders the core style-guide sections', () => {
    render(<StyleGuideShowcase />)

    expect(screen.getByText('The visual language behind Tentile')).toBeInTheDocument()
    for (const section of styleGuideSections) {
      expect(screen.getByRole('link', { name: new RegExp(section.name, 'i') })).toHaveAttribute(
        'href',
        `#/style-guide/${section.slug}`
      )
    }
  }, 10000)

  it('shows section descriptions on the style guide index', () => {
    render(<StyleGuideShowcase />)

    expect(screen.getByText(/browse the core foundation areas/i)).toBeInTheDocument()
    expect(screen.getByText(/fonts, type scale, and text rhythm/i)).toBeInTheDocument()
    expect(screen.getByText(/brand, neutral, and semantic color tokens/i)).toBeInTheDocument()
  })
})

describe('StyleGuideSectionContent', () => {
  it('renders typography section content', () => {
    render(<StyleGuideSectionContent slug="typography" />)

    expect(screen.getByText('Heading Family')).toBeInTheDocument()
    expect(screen.getByText('Body Family')).toBeInTheDocument()
    expect(screen.getByText('Monospace')).toBeInTheDocument()
  })

  it('renders spacing scale section content', () => {
    render(<StyleGuideSectionContent slug="spacing-scale" />)

    expect(screen.getByText('space-16')).toBeInTheDocument()
    expect(screen.getByText('64px')).toBeInTheDocument()
  })

  it('renders color system section content', () => {
    render(<StyleGuideSectionContent slug="color-system" />)

    expect(screen.getByText('Brand palette')).toBeInTheDocument()
    expect(screen.getByText('neutral-1000')).toBeInTheDocument()
    expect(screen.getByText('Success')).toBeInTheDocument()
    expect(screen.getAllByText('Dark').length).toBeGreaterThan(0)
  })

  it('renders radii section content', () => {
    render(<StyleGuideSectionContent slug="radii" />)

    expect(screen.getByText('radius-sm')).toBeInTheDocument()
    expect(screen.getByText('radius-full')).toBeInTheDocument()
    expect(screen.getByText('9999px')).toBeInTheDocument()
  })

  it('renders shadows section content', () => {
    render(<StyleGuideSectionContent slug="shadows" />)

    expect(screen.getByText('shadow-sm')).toBeInTheDocument()
    expect(screen.getByText('shadow-xl')).toBeInTheDocument()
    expect(screen.getByText('0 20px 25px')).toBeInTheDocument()
  })

  it('renders motion and layering section content', () => {
    render(<StyleGuideSectionContent slug="motion-layering" />)

    expect(screen.getByText('Transitions')).toBeInTheDocument()
    expect(screen.getByText('transition-slow')).toBeInTheDocument()
    expect(screen.getByText('Interactive surface')).toBeInTheDocument()
    expect(screen.getByText('z-toast')).toBeInTheDocument()
  })
})
