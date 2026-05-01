import { CalendarDays, CheckCircle2 } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { boards, classes, programHighlights } from '../data/siteData'

function LearningSection() {
  return (
    <section id="learning" className="bg-[#fff7ea] px-4 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="overflow-hidden rounded-t-full rounded-b-lg bg-[#d7aa5d] shadow-[0_26px_60px_rgba(31,22,14,0.16)]">
          <img
            src="./Class.jpeg"
            alt="Teacher supporting students in class"
            className="h-[330px] w-full object-cover sm:h-[460px] lg:h-[540px]"
          />
        </div>

        <div>
          <SectionHeader
            kicker="Digital Learning Leadership"
            title="Advanced Digital Learning methodology for deep conceptual clarity."
            text="VCC Hingna is the only institute in the area focusing on advanced Digital Learning methodology, where every subject is taught visually to ensure deep conceptual clarity and retention. VCC is highly specialized in 11th & 12th Science, delivering structured, performance-driven preparation."
          />

          <div className="mt-7 flex flex-wrap gap-3">
            {classes.map((item) => (
              <span key={item} className="rounded-full bg-white px-4 py-3 font-black text-[#11183f] shadow-[0_12px_26px_rgba(31,22,14,0.07)]">
                {item}
              </span>
            ))}
            {boards.map((item) => (
              <span key={item} className="rounded-full bg-white px-4 py-3 font-black text-[#11183f] shadow-[0_12px_26px_rgba(31,22,14,0.07)]">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {programHighlights.map((item) => (
              <div key={item} className="flex min-h-16 items-center gap-3 rounded-lg bg-white/75 p-4 font-black text-[#11183f]">
                <CheckCircle2 size={18} className="shrink-0 text-[#f58220]" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-7 flex items-start gap-4 rounded-lg bg-[#11183f] p-5 text-white">
            <CalendarDays size={23} className="mt-1 shrink-0 text-[#f7c76c]" />
            <p className="m-0 leading-8 text-[#f8ead3]">
              <strong>Holistic Development:</strong> Education at VCC goes beyond academics.
              We organize dance, singing, and sports events to provide students with a real
              platform for talent and confidence building. Recently, VCC collaborated with
              DND (Dance Nagpur Dance) for a major cultural event. At VCC, we shape
              personalities, not just percentages.
            </p>
          </div>

          <div className="mt-4 flex items-start gap-4 rounded-lg bg-white p-5 text-[#11183f] shadow-[0_14px_32px_rgba(31,22,14,0.08)]">
            <CalendarDays size={23} className="mt-1 shrink-0 text-[#f58220]" />
            <p className="m-0 leading-8 text-[#6d6254]">
              <strong>Demo Classes Schedule:</strong> Class 10th & 11th: From April.
              Class 8th & 9th: From May. Limited seats. Only serious students.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LearningSection
