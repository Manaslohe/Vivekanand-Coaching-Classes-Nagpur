import BranchesSection from './components/BranchesSection'
import BackToTop from './components/BackToTop'
import ContactSection from './components/ContactSection'
import CrashCourseSection from './components/CrashCourseSection'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import LearningSection from './components/LearningSection'
import LegacySection from './components/LegacySection'
import ProgramsPanel from './components/ProgramsPanel'
import TimingSection from './components/TimingSection'

function App() {
  return (
    <main className="min-w-[320px] overflow-x-hidden bg-[#fff7ea] text-[#11183f]">
      <Header />
      <Hero />
      <ProgramsPanel />
      <LegacySection />
      <LearningSection />
      <CrashCourseSection />
      <TimingSection />
      <BranchesSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </main>
  )
}

export default App
