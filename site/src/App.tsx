import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { QuickStart } from './components/QuickStart'
import { ReleaseFiles } from './components/ReleaseFiles'
import { UpdatesPipeline } from './components/UpdatesPipeline'
import { UsedBy } from './components/UsedBy'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-main)] text-[var(--text-main)] font-mono selection:bg-accent/25 selection:text-accent">
      <Header />
      <main className="flex-1">
        <Hero />
        <QuickStart />
        <ReleaseFiles />
        <UpdatesPipeline />
        <UsedBy />
      </main>
      <Footer />
    </div>
  )
}

export default App
