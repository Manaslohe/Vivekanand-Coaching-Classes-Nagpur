import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { branches } from '../data/siteData'
import { fadeUp, smoothReveal } from '../utils/animation'

function BranchesSection() {
  return (
    <section id="branches" className="bg-[#fffbf4] px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="Our Branches"
          title="Accessible learning across Nagpur's key student hubs."
          text="Branches: Hingna (Main Branch), Wanadongri, Butibori, and Mahajanwadi."
          centered
        />

        <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {branches.map((branch) => (
            <motion.article
              key={branch.name}
              className="min-h-72 rounded-lg border border-[#11183f]/10 bg-white p-6 shadow-[0_18px_42px_rgba(31,22,14,0.08)]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={smoothReveal}
            >
              <MapPin size={22} className="text-[#f58220]" />
              <span className="mt-5 inline-block rounded-full bg-[#fff0cf] px-3 py-2 text-xs font-black uppercase text-[#dc6518]">
                {branch.tag}
              </span>
              <h3 className="mt-4 font-serif text-2xl font-bold text-[#11183f]">
                {branch.name}
              </h3>
              <p className="mt-3 leading-7 text-[#6d6254]">{branch.address}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${branch.name} Vivekanand Coaching Classes Nagpur`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 font-black text-[#dc6518]"
              >
                Location <ArrowRight size={16} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BranchesSection
