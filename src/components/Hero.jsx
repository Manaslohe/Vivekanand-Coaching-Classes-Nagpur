import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { stats } from '../data/siteData'
import { fadeUp, smoothReveal } from '../utils/animation'
import { handleSmoothAnchor } from '../utils/scroll'

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-[#fff7ea] px-4 pb-16 pt-28 sm:pt-32 lg:min-h-[760px] lg:pb-20 lg:pt-40">
      <img
        src="/hero.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-[-2vw] -z-20 hidden h-full w-[78vw] max-w-none object-cover object-left lg:block xl:w-[76vw] 2xl:right-0 2xl:w-[74vw]"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(245,130,32,0.14),transparent_24%),linear-gradient(90deg,rgba(255,247,234,0.82)_0%,rgba(255,247,234,0.48)_43%,rgba(255,247,234,0.08)_78%)] lg:bg-[radial-gradient(circle_at_20%_22%,rgba(245,130,32,0.12),transparent_24%),linear-gradient(90deg,rgba(255,247,234,0.98)_0%,rgba(255,247,234,0.9)_32%,rgba(255,247,234,0.44)_51%,rgba(255,247,234,0.04)_70%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="mx-auto max-w-5xl text-center lg:mx-0 lg:max-w-none lg:pt-4 lg:text-left"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...smoothReveal, duration: 0.85 }}
        >
          <h1 className="mx-auto hidden max-w-5xl font-serif text-[clamp(3rem,8vw,6.4rem)] leading-[0.96] tracking-normal text-[#11183f] lg:mx-0 lg:block lg:max-w-none lg:whitespace-nowrap lg:text-[clamp(3.4rem,5.15vw,6rem)] lg:leading-none">
            Vivekanand Coaching Classes
          </h1>
          <img
            src="/mobile hero.png"
            alt="Vivekanand Coaching Classes"
            className="mx-auto block w-full max-w-3xl rounded-lg shadow-[0_18px_42px_rgba(31,22,14,0.12)] lg:hidden"
          />
          <p className="mx-auto mt-6 inline-block max-w-3xl rounded-lg bg-white px-5 py-3 text-base font-black leading-7 text-[#11183f] shadow-[0_12px_24px_rgba(31,22,14,0.08)] lg:hidden">
            35+ Years of Academic Leadership | 15,000+ Success Stories | One Legacy
          </p>
          <div className="mt-6 hidden w-fit max-w-[min(76vw,920px)] items-center gap-4 rounded-full border border-white/80 bg-white/78 px-5 py-3 text-sm font-black text-[#11183f] shadow-[0_18px_42px_rgba(31,22,14,0.10)] backdrop-blur lg:inline-flex">
            <span className="whitespace-nowrap">35+ Years of Academic Leadership</span>
            <span className="h-2 w-2 rounded-full bg-[#f58220]" aria-hidden="true" />
            <span className="whitespace-nowrap">15,000+ Success Stories</span>
            <span className="h-2 w-2 rounded-full bg-[#f58220]" aria-hidden="true" />
            <span className="whitespace-nowrap">One Legacy</span>
          </div>
        </motion.div>

        <div className="mx-auto mt-12 max-w-4xl lg:mx-0 lg:mt-9 lg:max-w-[760px]">
          <div className="flex min-w-0 flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-6">
              <a
                href="#contact"
                onClick={(event) => handleSmoothAnchor(event, 'contact')}
                className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-full bg-gradient-to-br from-[#11183f] to-[#222b63] px-8 py-4 text-base font-black text-white shadow-[0_18px_34px_rgba(17,24,63,0.28)] transition hover:-translate-y-1 hover:shadow-[0_23px_40px_rgba(17,24,63,0.35)]"
              >
                Enquire Now
                <span className="grid h-6 w-6 place-items-center rounded-full bg-[#f58220]">
                  <ArrowRight size={16} />
                </span>
              </a>

              <p className="max-w-xl text-base font-black leading-8 text-[#11183f] lg:max-w-[455px] lg:border-l-2 lg:border-[#f58220]/50 lg:pl-6 lg:leading-7">
                We do not just teach chapters. We build understanding. We build leaders.
              </p>
            </div>

            <div className="mt-8 grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2 lg:max-w-[600px] lg:gap-3 xl:max-w-[760px] xl:grid-cols-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <motion.article
                  key={label}
                  className="grid grid-cols-[auto_1fr] items-center gap-x-4 rounded-2xl bg-white/80 p-4 text-left shadow-[0_14px_32px_rgba(31,22,14,0.08)] backdrop-blur lg:rounded-xl lg:border lg:border-white/70 lg:bg-white/84 lg:p-3.5 lg:shadow-[0_12px_28px_rgba(31,22,14,0.08)] xl:grid-cols-1 xl:gap-y-3 xl:p-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeUp}
                  transition={smoothReveal}
                >
                  <span className="row-span-2 grid h-12 w-12 place-items-center rounded-full bg-white text-[#f58220] shadow-[0_14px_26px_rgba(31,22,14,0.10)] xl:row-span-1">
                    <Icon size={20} />
                  </span>
                  <strong className="font-serif text-4xl leading-none text-[#11183f] lg:text-3xl xl:text-[2.1rem]">
                    {value}
                  </strong>
                  <p className="mt-1 text-sm font-bold leading-5 text-[#5f564c]">{label}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
