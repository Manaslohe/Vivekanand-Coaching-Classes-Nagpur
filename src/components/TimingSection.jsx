import SectionHeader from './SectionHeader'
import { classes } from '../data/siteData'

function TimingSection() {
  return (
    <section className="bg-[#fff7ea] px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="Batch Timings"
          title="Morning and evening batches for every class."
          text="Batch timings are available for Class 8th to Class 12th in both morning and evening batches."
          centered
        />

        <div className="mx-auto mt-10 max-w-4xl overflow-x-auto rounded-2xl shadow-[0_18px_42px_rgba(31,22,14,0.10)]">
          <table className="w-full min-w-[620px] border-collapse bg-white">
            <thead>
              <tr>
                <th className="bg-[#11183f] px-6 py-5 text-left text-xs font-black uppercase text-white">
                  Class
                </th>
                <th className="bg-[#11183f] px-6 py-5 text-left text-xs font-black uppercase text-white">
                  Morning Batch
                </th>
                <th className="bg-[#11183f] px-6 py-5 text-left text-xs font-black uppercase text-white">
                  Evening Batch
                </th>
              </tr>
            </thead>
            <tbody>
              {classes.map((className) => (
                <tr key={className}>
                  <td className="border-b border-[#f4e3c3] px-6 py-5 font-black text-[#dc6518]">
                    {className}
                  </td>
                  <td className="border-b border-[#f4e3c3] px-6 py-5 text-[#11183f]">
                    Morning
                  </td>
                  <td className="border-b border-[#f4e3c3] px-6 py-5 text-[#11183f]">
                    Evening
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default TimingSection
