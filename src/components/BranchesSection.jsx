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

        <div className="mx-auto mt-11 grid max-w-4xl justify-center gap-6 sm:grid-cols-2">
          {branches.map((branch) => (
            <motion.article
              key={branch.name}
              className="group flex min-h-72 w-full max-w-[390px] flex-col rounded-lg border border-[#11183f]/10 bg-white/90 p-6 shadow-[0_18px_45px_rgba(31,22,14,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#f58220]/25 hover:shadow-[0_24px_55px_rgba(31,22,14,0.11)] sm:p-7"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={smoothReveal}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="flex size-11 items-center justify-center rounded-full bg-[#fff4de] text-[#f58220] ring-1 ring-[#f58220]/15">
                  <MapPin size={21} strokeWidth={2.4} />
                </span>
                <span className="rounded-full bg-[#fff0cf] px-3 py-2 text-xs font-black uppercase tracking-wide text-[#dc6518]">
                  {branch.tag}
                </span>
              </div>
              <h3 className="mt-4 font-serif text-2xl font-bold text-[#11183f]">
                {branch.name}
              </h3>
              <p className="mt-3 flex-1 leading-7 text-[#6d6254]">{branch.address}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${branch.name} Vivekanand Coaching Classes Nagpur`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#fff7e8] px-4 py-2 text-sm font-black text-[#dc6518] transition group-hover:bg-[#f58220] group-hover:text-white"
              >
                Location <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BranchesSection
