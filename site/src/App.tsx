import '@lib/tokens/index.css'
import '@lib/styles/reset.css'
import '@lib/styles/typography.css'
import './styles/site.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SiteLayout from './layout/SiteLayout'
import HomePage from './pages/HomePage'
import ComponentsPage from './pages/ComponentsPage'
import ComponentPage from './pages/ComponentPage'
import StyleGuidePage from './pages/StyleGuidePage'
import StyleGuideSectionPage from './pages/StyleGuideSectionPage'

export default function App() {
  return (
    <BrowserRouter>
      <SiteLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/components/:slug" element={<ComponentPage />} />
          <Route path="/style-guide" element={<StyleGuidePage />} />
          <Route path="/style-guide/:slug" element={<StyleGuideSectionPage />} />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  )
}
