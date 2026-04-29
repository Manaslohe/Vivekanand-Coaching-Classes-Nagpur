import { motion } from 'framer-motion'
import { programCards } from '../data/siteData'
import { fadeUp, smoothReveal } from '../utils/animation'
import { handleSmoothAnchor } from '../utils/scroll'

function ProgramsPanel() {
  return (
    <section id="programs" className="bg-[#fff7ea] px-4 pb-20">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-t-[2rem] rounded-b-lg bg-[radial-gradient(circle_at_70%_8%,rgba(215,170,93,0.32),transparent_18%),linear-gradient(135deg,#0b1233,#11183f_62%,#222b63)] p-7 text-white shadow-[0_32px_70px_rgba(17,24,63,0.25)] sm:p-10 lg:grid-cols-[0.8fr_2.2fr] lg:p-12">
        <div>
          <span className="text-xs font-black uppercase tracking-wide text-[#f7b955]">
            Batches Offered
          </span>
          <h2 className="mt-3 font-serif text-[clamp(1.9rem,3vw,2.6rem)] leading-tight">
            Classes Available
          </h2>
          <p className="mt-4 leading-8 text-[#f8ead3]">
            Strong Foundation | Concept Clarity | Top Results
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {programCards.map(({ icon: Icon, title, text }, index) => (
            <motion.article
              key={title}
              className={`rounded-xl p-6 transition hover:-translate-y-1 hover:bg-white/10 ${
                index === 1 ? 'bg-gradient-to-br from-[#f58220] to-[#c95b16] shadow-[0_20px_36px_rgba(10,4,32,0.24)]' : ''
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={smoothReveal}
            >
              <Icon size={38} className="text-[#f7c76c]" />
              <h3 className="mt-5 text-xl font-black">{title}</h3>
              <p className="mt-3 min-h-20 leading-7 text-[#f8ead3]">{text}</p>
              <a
                href="#contact"
                onClick={(event) => handleSmoothAnchor(event, 'contact')}
                className="mt-4 inline-flex font-black text-white"
              >
                Enquire now +
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProgramsPanel
