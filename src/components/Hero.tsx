import { MapPin, ExternalLink, ChevronDown } from 'lucide-react'

interface Props {
  finnUrl: string
}

export default function Hero({ finnUrl }: Props) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.finncdn.no/dynamic/1280w/2024/3/vertical-0/25/4/344/992/734_77a2a58b-6a67-4d36-9c4b-a76b5336d807.png"
          alt="Sirdal fjellhytte"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0d1e0e]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      </div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-10 px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-amber-400 font-semibold text-lg">
          <span className="text-2xl">🏔</span>
          <span>Sirdal Hytte</span>
        </div>
        <a
          href={finnUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-green-950 font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 text-sm"
        >
          Book på FINN
          <ExternalLink size={14} />
        </a>
      </nav>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-amber-400 mb-4 text-sm font-medium uppercase tracking-widest">
            <MapPin size={16} />
            <span>Tjørhom, Sirdal, Agder · 609 moh</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Stor familie&shy;fjellhytte
            <span className="block text-amber-400">med ni soverom</span>
          </h1>

          <p className="text-stone-300 text-xl md:text-2xl leading-relaxed mb-10 max-w-2xl">
            Hyttedrøm for storfamilien, flere familier eller teambuilding. 206 m² med panoramautsikt over fjell og dal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={finnUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-green-950 font-bold px-10 py-5 rounded-xl transition-all duration-200 shadow-2xl shadow-amber-900/40 hover:scale-105 active:scale-95 text-lg"
            >
              Se ledige datoer
              <ExternalLink size={18} />
            </a>
            <a
              href="#om-hytten"
              className="inline-flex items-center justify-center gap-2 border-2 border-amber-500/60 text-amber-300 hover:bg-amber-500/10 font-semibold px-10 py-5 rounded-xl transition-all duration-200 text-lg"
            >
              Les mer
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-stone-400 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={20} />
      </div>
    </section>
  )
}
