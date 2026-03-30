import { ExternalLink, MapPin } from 'lucide-react'

interface Props {
  finnUrl: string
}

const navLinks = [
  { href: '#om-hytten', label: 'Om hytten' },
  { href: '#bilder', label: 'Bilder' },
  { href: '#fasiliteter', label: 'Fasiliteter' },
  { href: '#aktiviteter', label: 'Aktiviteter' },
  { href: '#anmeldelser', label: 'Anmeldelser' },
  { href: '#veibeskrivelse', label: 'Veibeskrivelse' },
]

export default function Footer({ finnUrl }: Props) {
  return (
    <footer className="bg-[#081208] border-t border-green-900/40 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xl mb-4">
              <span className="text-3xl">🏔</span>
              <span>Sirdal Hytte</span>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed mb-4">
              Stor familiefjellhytte med ni soverom i naturskjønne omgivelser på Tjørhom i Sirdal.
            </p>
            <div className="flex items-center gap-2 text-stone-500 text-sm">
              <MapPin size={14} className="text-amber-600" />
              <span>Tjørhom, Sirdal, Agder · 609 moh</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-amber-200 font-semibold mb-4 uppercase tracking-wider text-xs">
              Navigasjon
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-stone-500 hover:text-amber-400 transition-colors text-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Book */}
          <div>
            <h4 className="text-amber-200 font-semibold mb-4 uppercase tracking-wider text-xs">
              Book nå
            </h4>
            <p className="text-stone-500 text-sm mb-5">
              Bestill direkte på FINN.no — trygt og enkelt.
            </p>
            <a
              href={finnUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-green-950 font-semibold px-6 py-3 rounded-lg transition-all duration-200 text-sm hover:scale-105 active:scale-95"
            >
              Se på FINN.no
              <ExternalLink size={14} />
            </a>

            <div className="mt-6 flex items-center gap-3 text-stone-500 text-xs">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 fill-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span>10/10 · 5 anmeldelser</span>
            </div>
          </div>
        </div>

        <div className="border-t border-green-900/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-stone-600 text-xs">
          <span>© {new Date().getFullYear()} Sirdal Hytte · Tjørhom, Sirdal</span>
          <a
            href={finnUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-500 transition-colors flex items-center gap-1"
          >
            FINN-annonse: 344992734
            <ExternalLink size={10} />
          </a>
        </div>
      </div>
    </footer>
  )
}
