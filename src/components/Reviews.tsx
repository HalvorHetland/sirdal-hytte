const reviews = [
  {
    text: 'Fantastisk hytte, god kommunikasjon med utleier. Vi kommer gjerne igjen 🤗',
    author: 'Mathilde Berge',
    detail: 'Familieweekend',
  },
  {
    text: 'Vi hadde en flott påske. Tre familier med barn og barnebarn. Hytten var praktisk og manglet ingenting.',
    author: 'Ellen Elise',
    detail: 'Påskeferie',
  },
  {
    text: 'Helt super opplevelse. Med så grei hytte var det mange ting vi kunne gjøre inne og rundt hytten.',
    author: 'Sebastian Gjerstad',
    detail: 'Vintertur',
  },
  {
    text: 'En vakker hytte med mange gode soverom. Veldig godt utstyrt. Anbefales!',
    author: 'Einar',
    detail: 'Familietur',
  },
  {
    text: 'Vi hadde en flott pinse her, 10 stk, i tre generasjoner, pluss hund. Rent, romslig og veldig godt utstyrt.',
    author: 'Anne Terese',
    detail: 'Pinsehelg',
  },
]

function StarRating() {
  return (
    <div className="flex gap-1 text-amber-400">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="anmeldelser" className="py-24 px-6 bg-[#0a1a0b]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-amber-500 uppercase tracking-widest text-sm font-medium mb-3">Gjesteanmeldelser</p>
          <h2 className="text-4xl font-bold text-amber-100 mb-4">Hva gjestene sier</h2>
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-amber-300 font-bold text-xl">10/10</span>
            <span className="text-stone-500">· 5 anmeldelser</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`bg-green-950/40 border border-green-800/30 rounded-2xl p-7 hover:border-amber-700/30 transition-colors duration-200 flex flex-col ${i === 0 ? 'lg:col-span-1' : ''}`}
            >
              <div className="text-4xl text-amber-600/60 font-serif leading-none mb-4">"</div>
              <StarRating />
              <p className="text-stone-200 leading-relaxed mt-4 flex-1 italic">"{r.text}"</p>
              <div className="mt-6 pt-5 border-t border-green-800/30 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-sm">
                  {r.author[0]}
                </div>
                <div>
                  <div className="text-stone-100 font-semibold text-sm">{r.author}</div>
                  <div className="text-stone-500 text-xs">{r.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
