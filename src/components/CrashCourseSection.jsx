import { motion } from 'framer-motion'
import { CheckCircle2, Target } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { crashHighlights } from '../data/siteData'
import { fadeUp, smoothReveal } from '../utils/animation'

function CrashCourseSection() {
  return (
    <section id="crash-course" className="bg-[#fffbf4] px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="Upcoming Batch"
          title="MHT-CET 40 Days Power Crash Course"
          text="An elite, focused, high-performance academic program."
          centered
        />

        <div className="mx-auto mt-11 grid max-w-5xl gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            className="rounded-lg border border-[#11183f]/10 bg-white p-8 shadow-[0_18px_42px_rgba(31,22,14,0.08)]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={smoothReveal}
          >
            <Target size={30} className="text-[#f58220]" />
            <span className="mt-5 block text-xs font-black uppercase tracking-wide text-[#f58220]">
              Our Goal
            </span>
            <strong className="mt-3 block font-serif text-[clamp(1.8rem,3vw,3rem)] leading-tight text-[#11183f]">
              40 Days | 40 Students | 400% Result
            </strong>
            <p className="mt-5 leading-8 text-[#6d6254]">
              *Demo Classes begins from 27th February. Limited seat Serious aspirants only.
            </p>
          </motion.div>

          <div className="grid gap-3">
            {crashHighlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-lg bg-white p-5 font-black text-[#11183f] shadow-[0_14px_32px_rgba(31,22,14,0.08)]"
              >
                <CheckCircle2 size={18} className="shrink-0 text-[#f58220]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CrashCourseSection
