import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, GraduationCap, Sparkles, Zap } from 'lucide-react'
import { stats } from '../data/siteData'
import { fadeUp, smoothReveal } from '../utils/animation'
import { handleSmoothAnchor } from '../utils/scroll'

function Doodle({ className, children }) {
  return (
    <motion.div
      className={`pointer-events-none absolute hidden text-[#1b2558]/80 lg:block ${className}`}
      aria-hidden="true"
      animate={{ y: [0, -8, 0], rotate: [0, 4, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}

function StudentImage({ src, alt, accent, className = '' }) {
  return (
    <motion.div
      className={`relative mx-auto aspect-square w-[min(280px,78vw)] sm:w-72 lg:w-[285px] xl:w-[320px] ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeUp}
      transition={smoothReveal}
    >
      <div className={`absolute inset-x-0 bottom-[-10px] top-8 rounded-full ${accent}`} />
      <img
        src={src}
        alt={alt}
        className="relative h-full w-full rounded-full object-cover shadow-[0_26px_56px_rgba(31,22,14,0.16)]"
      />
    </motion.div>
  )
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-[#fff7ea] px-4 pb-16 pt-32 sm:pt-36 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(245,130,32,0.14),transparent_24%),radial-gradient(circle_at_88%_16%,rgba(215,170,93,0.28),transparent_24%)]" />

      <div className="relative mx-auto max-w-7xl">
        <Doodle className="left-6 top-24 xl:left-12"><Sparkles size={38} /></Doodle>
        <Doodle className="right-8 top-32 xl:right-12"><GraduationCap size={38} /></Doodle>
        <Doodle className="bottom-36 left-[28%]"><BookOpen size={34} /></Doodle>
        <Doodle className="bottom-52 right-[30%]"><Zap size={32} /></Doodle>

        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...smoothReveal, duration: 0.85 }}
        >
          <h1 className="mx-auto max-w-5xl font-serif text-[clamp(3rem,8vw,6.4rem)] leading-[0.96] tracking-normal text-[#11183f]">
            Vivekanand Coaching Classes
          </h1>
          <p className="mx-auto mt-6 inline-block max-w-3xl rounded-lg bg-white px-5 py-3 text-base font-black leading-7 text-[#11183f] shadow-[0_12px_24px_rgba(31,22,14,0.08)]">
            35+ Years of Academic Leadership | 15,000+ Success Stories | One Legacy
          </p>
        </motion.div>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[300px_minmax(0,1fr)_300px] xl:gap-12">
          <StudentImage
            src="https://images.unsplash.com/photo-1629872430082-93d8912beccf?auto=format&fit=crop&w=720&q=85"
            alt="Happy student with school bag"
            accent="bg-[#f58220]"
            className="order-2 lg:order-1"
          />

          <div className="order-1 flex min-w-0 flex-col items-center text-center lg:order-2">
            <a
              href="#contact"
              onClick={(event) => handleSmoothAnchor(event, 'contact')}
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-gradient-to-br from-[#11183f] to-[#222b63] px-8 py-4 text-base font-black text-white shadow-[0_18px_34px_rgba(17,24,63,0.28)] transition hover:-translate-y-1 hover:shadow-[0_23px_40px_rgba(17,24,63,0.35)]"
            >
              Enquire Now
              <span className="grid h-6 w-6 place-items-center rounded-full bg-[#f58220]">
                <ArrowRight size={16} />
              </span>
            </a>

            <p className="mt-8 max-w-xl text-base font-black leading-8 text-[#11183f]">
              We do not just teach chapters. We build understanding. We build leaders.
            </p>

            <div className="mt-8 grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
              {stats.map(({ icon: Icon, value, label }) => (
                <motion.article
                  key={label}
                  className="grid grid-cols-[auto_1fr] items-center gap-x-4 rounded-2xl bg-white/75 p-4 text-left shadow-[0_14px_32px_rgba(31,22,14,0.08)] backdrop-blur"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeUp}
                  transition={smoothReveal}
                >
                  <span className="row-span-2 grid h-12 w-12 place-items-center rounded-full bg-white text-[#f58220] shadow-[0_14px_26px_rgba(31,22,14,0.10)]">
                    <Icon size={20} />
                  </span>
                  <strong className="font-serif text-4xl leading-none text-[#11183f]">
                    {value}
                  </strong>
                  <p className="mt-1 text-sm font-bold leading-5 text-[#5f564c]">{label}</p>
                </motion.article>
              ))}
            </div>
          </div>

          <StudentImage
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=720&q=85"
            alt="Student learning with books"
            accent="bg-[#d7aa5d]"
            className="order-3 hidden sm:block"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
