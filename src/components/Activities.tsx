const activities = [
  { emoji: '⛷', title: 'Sirdal Resort (alpint)', desc: '7 min kjøring' },
  { emoji: '🎿', title: 'Preparert skiløype', desc: '450 meter fra hytten' },
  { emoji: '🏔', title: 'Foråsens løypenett', desc: 'Rett bak hytten' },
  { emoji: '🏞', title: 'Kjerag', desc: '45 km unna' },
  { emoji: '🎣', title: 'Fiske', desc: 'Rett utenfor hytten' },
  { emoji: '🌲', title: 'Jakt og turgåing', desc: 'Rett utenfor hytten' },
  { emoji: '⛳', title: 'Golf', desc: 'Kort avstand' },
  { emoji: '🛒', title: 'Joker dagligvare', desc: '5 min kjøring (Sinnes)' },
]

export default function Activities() {
  return (
    <section id="aktiviteter" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-amber-500 uppercase tracking-widest text-sm font-medium mb-3">Beliggenhet & aktiviteter</p>
            <h2 className="text-4xl font-bold text-amber-100 leading-tight mb-6">
              Fjellets beste<br />adresse
            </h2>
            <p className="text-stone-300 text-lg leading-relaxed mb-4">
              Hytten ligger i Tjørhom i Sirdal kommune, Agder — midt i noen av Norges vakreste fjellomgivelser.
              Rett utenfor døren finner du preparerte skiløyper, og alpine bakker er bare et steinskast unna.
            </p>
            <p className="text-stone-400 leading-relaxed">
              Om sommeren er det fiske i elvene og innsjøene, dramatiske fjellturer og spektakulær natur i alle retninger.
              Kjerag, en av Norges mest besøkte fjellturer, nås på 45 minutter.
            </p>

            <div className="mt-8 bg-green-950/60 border border-green-800/30 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-amber-400 font-semibold mb-3">
                <span>📍</span>
                <span>Tjørhom, Sirdal kommune, Agder</span>
              </div>
              <div className="text-stone-400 text-sm leading-relaxed">
                Ca. 609 moh — godt synlig i Solheimsdalen med storstilt fjell- og dalutsikt.
              </div>
            </div>
          </div>

          {/* Right: activities grid */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              {activities.map(({ emoji, title, desc }) => (
                <div
                  key={title}
                  className="bg-green-950/40 border border-green-800/30 rounded-xl p-4 hover:border-amber-700/40 transition-colors duration-200"
                >
                  <div className="text-3xl mb-2">{emoji}</div>
                  <div className="font-semibold text-stone-100 text-sm">{title}</div>
                  <div className="text-stone-500 text-xs mt-1">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full-width image */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.finncdn.no/dynamic/1280w/2024/3/vertical-0/25/4/344/992/734_bcfd93d1-2891-4fb0-b9cd-2292da6e97cf.jpg"
            alt="Utsikt fra hytten"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  )
}
