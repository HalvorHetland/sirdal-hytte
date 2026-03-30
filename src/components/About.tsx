import { Sun, Flame, UtensilsCrossed, Sofa } from 'lucide-react'

const highlights = [
  {
    icon: Sun,
    title: 'Sol fra morgen til kveld',
    text: 'Store terrasser rundt hele hytten med gode solforhold hele dagen og panoramautsikt over fjell og dal.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Fullt utstyrt kjøkken',
    text: 'Grovkjøkken, oppvaskmaskin, kaffetrakter og alt du trenger for å lage mat til hele gjengen.',
  },
  {
    icon: Flame,
    title: 'Peis og koselig atmosfære',
    text: 'Slapp av foran peisen etter en lang dag i fjellet. Nedsenkbart lerret i enden av det lange spisebordet.',
  },
  {
    icon: Sofa,
    title: 'Fire romslige stuer',
    text: 'Spisestue, arbeidsrom, TV-rom og spillrom — god plass for alle, enten man vil roe ned eller ha det gøy.',
  },
]

export default function About() {
  return (
    <section id="om-hytten" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-amber-500 uppercase tracking-widest text-sm font-medium mb-3">Om hytten</p>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-100 leading-tight mb-6">
              Din drøm i<br />Sirdals fjell
            </h2>
            <p className="text-stone-300 text-lg leading-relaxed mb-6">
              Hyttedrøm for storfamilien, flere familier sammen eller team-building med jobb. Du kan beundre den
              fantastiske utsikten over fjellene og dalen fra den romslige stuen.
            </p>
            <p className="text-stone-400 leading-relaxed">
              Hytten ligger fint i naturskjønne omgivelser med gode solforhold fra morgen til kveld på store terrasser
              rundt hytten. Kjøkkenet er fullt utstyrt. Hytta har fire romslige stuer: spisestue, arbeidsrom, TV-rom
              og spillrom. Hytta har peis og et nedsenkbart lerret i enden av det lange spisebordet.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {['WiFi', 'Peis', 'Terrasse', 'Parkering 70m', 'Ski-løype 450m'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-green-900/50 border border-green-700/50 rounded-full text-sm text-green-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.finncdn.no/dynamic/1280w/2024/3/vertical-0/25/4/344/992/734_2434909f-e840-4bf7-a599-0da82af5b7cd.jpg"
              alt="Interiør av hytten"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-4 -left-4 bg-amber-500 text-green-950 rounded-xl px-5 py-3 font-bold shadow-xl">
              <span className="text-2xl">~609</span>
              <span className="text-sm ml-1">moh</span>
            </div>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {highlights.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="bg-green-950/40 border border-green-800/30 rounded-2xl p-6 hover:border-amber-700/40 transition-colors duration-200"
            >
              <div className="bg-amber-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Icon size={22} className="text-amber-400" />
              </div>
              <h3 className="font-semibold text-amber-100 mb-2">{title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
