export default function Directions() {
  return (
    <section id="veibeskrivelse" className="py-24 px-6 bg-[#0a1a0b]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 md:order-1">
            <img
              src="https://images.finncdn.no/dynamic/1280w/2025/1/vertical-0/27/4/344/992/734_48d36940-0ebd-4c40-8a55-91390413404d.jpg"
              alt="Hytten om vinteren"
              className="w-full h-[480px] object-cover rounded-2xl shadow-2xl"
            />
          </div>

          {/* Directions */}
          <div className="order-1 md:order-2">
            <p className="text-amber-500 uppercase tracking-widest text-sm font-medium mb-3">Veibeskrivelse</p>
            <h2 className="text-3xl font-bold text-amber-100 mb-8">Slik finner du hit</h2>

            <div className="space-y-4">
              {[
                {
                  step: '1',
                  text: 'Ta Fv468 fra Sinnes mot Tonstad',
                },
                {
                  step: '2',
                  text: 'Ta av mot Solheimsdalen på Fv983 — 1,7 km sør for Joker på Sinnes',
                },
                {
                  step: '3',
                  text: 'Kjør ca. 1 km til elven/innsjøen er på høyre side',
                },
                {
                  step: '4',
                  text: 'Ta til venstre ved skilt «Stakshomheia Hyttefelt 1»',
                },
                {
                  step: '5',
                  text: 'Ta 3. vei til venstre og følg veien til enden',
                },
                {
                  step: '6',
                  text: 'Parker på plass merket "99". Hytten er tredje hytte opp bakken, litt til venstre.',
                },
              ].map(({ step, text }) => (
                <div key={step} className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-amber-500 text-green-950 font-bold text-sm flex items-center justify-center">
                    {step}
                  </div>
                  <p className="text-stone-300 leading-relaxed pt-1 text-sm">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-amber-500/10 border border-amber-700/30 rounded-xl p-5 flex items-start gap-3">
              <span className="text-xl shrink-0">🅿️</span>
              <div>
                <div className="text-amber-300 font-semibold text-sm">Parkering</div>
                <div className="text-stone-400 text-sm mt-0.5">
                  Ca. 70 meter fra hytten. Parker på plass merket «99».
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
