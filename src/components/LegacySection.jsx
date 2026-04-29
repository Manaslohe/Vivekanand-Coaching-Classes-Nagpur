import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { fadeUp, smoothReveal } from '../utils/animation'

const storyCards = [
  {
    title: '15,000+ Success Stories',
    text: 'Over 15,000+ students have successfully passed out from VCC. Our alumni include Doctors, Engineers, Civil Servants, Police Officers, and professionals working in prestigious positions across India and abroad.',
  },
  {
    title: 'Academic Excellence',
    text: 'In the 2024-2025 academic session: Total Admissions: 655 Students, Hingna 10th Board Topper from VCC (99.7%), and Hingna 12th Board Topper from VCC (98%).',
    highlighted: true,
  },
  {
    title: 'Institutional Growth',
    text: 'From 2 teachers to a strong team of 15+ well-qualified faculty members, VCC continues to grow while maintaining personal attention and academic discipline.',
  },
]

function LegacySection() {
  return (
    <section id="legacy" className="bg-[#fffbf4] px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="Our Foundation of Excellence"
          title="Established in 1990 by the visionary educator Umesh Ambatkar Sir."
          text="Vivekanand Coaching Classes (VCC) began its journey with just 2 students and 2 teachers. From a humble beginning to a powerful academic institution, VCC has transformed thousands of lives through discipline, consistency, and result-oriented education."
        />

        <div className="mt-11 grid gap-5 md:grid-cols-3">
          {storyCards.map((card) => (
            <motion.article
              key={card.title}
              className={`min-h-64 rounded-lg border border-[#11183f]/10 p-7 shadow-[0_18px_42px_rgba(31,22,14,0.08)] ${
                card.highlighted ? 'bg-[#fff0cf]' : 'bg-white'
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              transition={smoothReveal}
            >
              <h3 className="font-serif text-2xl font-bold leading-tight text-[#11183f]">
                {card.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-[#6d6254]">{card.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LegacySection
