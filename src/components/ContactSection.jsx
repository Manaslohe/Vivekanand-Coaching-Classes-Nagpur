import { Clock3, Mail, Phone } from 'lucide-react'
import { handleSmoothAnchor } from '../utils/scroll'

function ContactSection() {
  return (
    <section id="contact" className="bg-[#11183f] px-4 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <span className="text-xs font-black uppercase tracking-wide text-[#f7b955]">
            Contact Us
          </span>
          <h2 className="mt-3 font-serif text-[clamp(2rem,4vw,4rem)] leading-tight text-white">
            Start your next academic step with VCC.
          </h2>
          <p className="mt-5 leading-8 text-[#f8ead3]">
            Est. 1990 | 15,000+ Success Stories
          </p>
        </div>

        <div className="grid gap-3">
          <a href="tel:7020253112" className="flex min-h-14 items-center gap-3 rounded-lg bg-[#f58220] p-4 font-black text-white">
            <Phone size={21} />7020253112
          </a>
          <a href="tel:9272521081" className="flex min-h-14 items-center gap-3 rounded-lg bg-white/10 p-4 font-black text-white">
            <Phone size={21} />9272521081
          </a>
          <a href="mailto:vivekanandcoachingclasses1990@gmail.com" className="flex min-h-14 min-w-0 items-center gap-3 rounded-lg bg-white/10 p-4 font-black text-white [overflow-wrap:anywhere]">
            <Mail size={21} className="shrink-0" />vivekanandcoachingclasses1990@gmail.com
          </a>
          <a
            href="#programs"
            onClick={(event) => handleSmoothAnchor(event, 'programs')}
            className="flex min-h-14 items-center gap-3 rounded-lg bg-white/10 p-4 font-black text-white"
          >
            <Clock3 size={21} />Limited seats. Serious aspirants only.
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
