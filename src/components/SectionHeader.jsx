import { motion } from 'framer-motion'
import { fadeUp, smoothReveal } from '../utils/animation'

function SectionHeader({ kicker, title, text, centered = false, light = false }) {
  return (
    <motion.div
      className={`${centered ? 'mx-auto text-center' : ''} max-w-3xl`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={fadeUp}
      transition={smoothReveal}
    >
      <span className="text-xs font-black uppercase tracking-wide text-[#f58220]">
        {kicker}
      </span>
      <h2
        className={`mt-3 font-serif text-[clamp(2rem,4vw,4rem)] leading-[1.06] tracking-normal ${
          light ? 'text-white' : 'text-[#11183f]'
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={`mt-5 text-base leading-8 ${
            light ? 'text-[#f8ead3]' : 'text-[#6d6254]'
          }`}
        >
          {text}
        </p>
      ) : null}
    </motion.div>
  )
}

export default SectionHeader
