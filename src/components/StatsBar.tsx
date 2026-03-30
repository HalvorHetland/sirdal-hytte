import { BedDouble, Users, Bath, Home } from 'lucide-react'

const stats = [
  { icon: BedDouble, value: '9', label: 'Soverom', sub: 'dobbeltsenger' },
  { icon: Users, value: '15', label: 'Senger', sub: 'totalt' },
  { icon: Bath, value: '3', label: 'Bad', sub: 'inkl. vaskerom' },
  { icon: Home, value: '206', label: 'm²', sub: 'boligareal' },
]

export default function StatsBar() {
  return (
    <section className="bg-[#0f2210] border-y border-green-800/30">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, label, sub }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center gap-2 py-4 px-2"
            >
              <div className="bg-amber-500/10 p-3 rounded-full">
                <Icon size={24} className="text-amber-400" />
              </div>
              <div>
                <div className="text-4xl font-bold text-amber-100">
                  {value}
                  <span className="text-2xl ml-0.5">{label === 'm²' ? 'm²' : ''}</span>
                </div>
                <div className="text-lg font-semibold text-stone-200">
                  {label !== 'm²' ? label : 'Kvadratmeter'}
                </div>
                <div className="text-sm text-stone-400">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
