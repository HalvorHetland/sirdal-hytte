import {
  Wifi,
  UtensilsCrossed,
  Waves,
  Car,
  Coffee,
  WashingMachine,
  Wind,
  Flame,
  Tv,
  TreePine,
  Flame as GrillIcon,
  ShoppingCart,
} from 'lucide-react'

const amenities = [
  { icon: Wifi, label: 'WiFi', desc: 'Høyhastighet internett' },
  { icon: UtensilsCrossed, label: 'Fullt kjøkken', desc: 'Alt utstyr inkludert' },
  { icon: Waves, label: 'Balkong/terrasse', desc: 'Med panoramautsikt' },
  { icon: Car, label: 'Parkering', desc: '70 meter fra hytten' },
  { icon: ShoppingCart, label: 'Oppvaskmaskin', desc: 'I fullt utstyrt kjøkken' },
  { icon: Coffee, label: 'Kaffetrakter', desc: 'Kaffe klar på morgenen' },
  { icon: WashingMachine, label: 'Vaskemaskin', desc: 'Og tørketrommel' },
  { icon: Wind, label: 'Tørketrommel', desc: 'For ski- og turklær' },
  { icon: Flame, label: 'Peis', desc: 'Koselig kveldsstemning' },
  { icon: Tv, label: 'TV', desc: 'Med nedsenkbart lerret' },
  { icon: TreePine, label: 'Hagemøbler', desc: 'På store terrasser' },
  { icon: GrillIcon, label: 'Grill', desc: 'For utegrill' },
]

export default function Amenities() {
  return (
    <section id="fasiliteter" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-amber-500 uppercase tracking-widest text-sm font-medium mb-3">Fasiliteter</p>
          <h2 className="text-4xl font-bold text-amber-100 mb-4">Alt du trenger er her</h2>
          <p className="text-stone-400 max-w-xl mx-auto">
            Hytten er fullt utstyrt slik at du kan fokusere på å nyte fjellopplevelsen.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {amenities.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="bg-green-950/40 border border-green-800/30 rounded-xl p-5 flex items-start gap-4 hover:border-amber-700/40 hover:bg-green-900/40 transition-all duration-200"
            >
              <div className="shrink-0 bg-amber-500/10 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5">
                <Icon size={18} className="text-amber-400" />
              </div>
              <div>
                <div className="font-medium text-stone-100 text-sm">{label}</div>
                <div className="text-stone-500 text-xs mt-0.5">{desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Check-in/out info */}
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          <div className="bg-amber-500/10 border border-amber-700/30 rounded-2xl p-6 flex items-center gap-5">
            <div className="text-4xl">🔑</div>
            <div>
              <div className="font-semibold text-amber-200 mb-1">Innsjekk</div>
              <div className="text-3xl font-bold text-amber-100">fra kl. 16:00</div>
            </div>
          </div>
          <div className="bg-green-950/60 border border-green-800/30 rounded-2xl p-6 flex items-center gap-5">
            <div className="text-4xl">🧳</div>
            <div>
              <div className="font-semibold text-stone-300 mb-1">Utsjekk</div>
              <div className="text-3xl font-bold text-stone-100">innen kl. 12:00</div>
            </div>
          </div>
        </div>

        {/* Bedding note */}
        <div className="mt-4 bg-green-950/30 border border-green-800/20 rounded-xl p-4 flex items-center gap-3 text-stone-400 text-sm">
          <span className="text-xl">🛏</span>
          <span>
            <strong className="text-stone-300">Sengetøy ikke inkludert</strong> — kan leies for kr 100 per person.
          </span>
        </div>
      </div>
    </section>
  )
}
