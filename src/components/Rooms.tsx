const floors = [
  {
    name: '1. etasje',
    emoji: '🏠',
    rooms: [
      'Entre og bi-inngang',
      'Gang',
      '2 bad',
      'Bad / vaskerom',
      '2 separate stuer',
      'Kjøkken / allrom / stue',
      'Grovkjøkken',
      '3 soverom',
      'Skibod',
      'Vedbod',
    ],
  },
  {
    name: '2. etasje',
    emoji: '🪟',
    rooms: [
      'Gang',
      '6 soverom',
      'Loftstue',
      'Bod',
    ],
  },
]

export default function Rooms() {
  return (
    <section id="rom" className="py-24 px-6 bg-[#0a1a0b]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: image */}
          <div className="relative">
            <img
              src="https://images.finncdn.no/dynamic/1280w/2024/5/vertical-0/02/4/344/992/734_15f89892-aa19-4d4d-9899-78a07e46ba7e.jpg"
              alt="Kjøkken og stue"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl bg-gradient-to-t from-black/60 to-transparent p-6">
              <p className="text-amber-300 font-semibold text-lg">Alle 9 soverom har dobbeltsenger</p>
            </div>
          </div>

          {/* Right: room list */}
          <div>
            <p className="text-amber-500 uppercase tracking-widest text-sm font-medium mb-3">Romfordeling</p>
            <h2 className="text-4xl font-bold text-amber-100 mb-8">
              Plass til alle — komfortabelt
            </h2>

            <div className="space-y-8">
              {floors.map((floor) => (
                <div key={floor.name}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{floor.emoji}</span>
                    <h3 className="text-xl font-bold text-amber-200">{floor.name}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pl-11">
                    {floor.rooms.map((room) => (
                      <div
                        key={room}
                        className="flex items-center gap-2 text-stone-300 text-sm"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                        {room}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Summary pills */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { v: '9', l: 'soverom' },
                { v: '15', l: 'senger' },
                { v: '3', l: 'bad' },
                { v: '4', l: 'stuer' },
              ].map(({ v, l }) => (
                <div
                  key={l}
                  className="bg-amber-500/10 border border-amber-600/30 rounded-xl px-5 py-3 text-center"
                >
                  <div className="text-2xl font-bold text-amber-400">{v}</div>
                  <div className="text-xs text-stone-400 uppercase tracking-wide">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
