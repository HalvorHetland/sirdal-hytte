import { ExternalLink } from 'lucide-react'

interface Props {
  finnUrl: string
}

const cancellationPolicies = [
  {
    icon: '✅',
    title: 'Full refusjon',
    desc: 'Avbestilling mer enn 30 dager før innsjekk',
    color: 'border-green-600/40 bg-green-950/40',
    textColor: 'text-green-300',
  },
  {
    icon: '⚠️',
    title: '50% refusjon',
    desc: 'Avbestilling 14–30 dager før innsjekk',
    color: 'border-amber-600/40 bg-amber-950/20',
    textColor: 'text-amber-300',
  },
  {
    icon: '❌',
    title: 'Ingen refusjon',
    desc: 'Avbestilling under 14 dager før innsjekk',
    color: 'border-red-800/40 bg-red-950/20',
    textColor: 'text-red-300',
  },
]

const rules = [
  { icon: '🚭', text: 'Røyking ikke tillatt innendørs' },
  { icon: '🐾', text: 'Kjæledyr er velkomne' },
  { icon: '♿', text: 'Ikke rullestolvennlig' },
  { icon: '🛏', text: 'Sengetøy kan leies: kr 100 per person' },
  { icon: '🔑', text: 'Innsjekk fra kl. 16:00' },
  { icon: '🧳', text: 'Utsjekk innen kl. 12:00' },
]

export default function Rules({ finnUrl }: Props) {
  return (
    <section id="regler" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Cancellation */}
          <div>
            <p className="text-amber-500 uppercase tracking-widest text-sm font-medium mb-3">Avbestilling</p>
            <h2 className="text-3xl font-bold text-amber-100 mb-8">Avbestillingsvilkår</h2>
            <div className="space-y-4">
              {cancellationPolicies.map((p) => (
                <div
                  key={p.title}
                  className={`border rounded-xl p-5 flex items-start gap-4 ${p.color}`}
                >
                  <span className="text-2xl shrink-0">{p.icon}</span>
                  <div>
                    <div className={`font-semibold ${p.textColor}`}>{p.title}</div>
                    <div className="text-stone-400 text-sm mt-0.5">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* House rules */}
          <div>
            <p className="text-amber-500 uppercase tracking-widest text-sm font-medium mb-3">Husregler</p>
            <h2 className="text-3xl font-bold text-amber-100 mb-8">Praktisk informasjon</h2>
            <div className="space-y-3">
              {rules.map((r) => (
                <div
                  key={r.text}
                  className="bg-green-950/40 border border-green-800/30 rounded-xl p-4 flex items-center gap-4 hover:border-green-700/40 transition-colors"
                >
                  <span className="text-xl shrink-0">{r.icon}</span>
                  <span className="text-stone-300 text-sm">{r.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-amber-900/40 to-green-900/40 border border-amber-700/30 rounded-3xl p-10 text-center">
          <h3 className="text-3xl font-bold text-amber-100 mb-3">Klar til å booke?</h3>
          <p className="text-stone-400 mb-8 max-w-md mx-auto">
            Sjekk ledige datoer og send forespørsel direkte på FINN.no
          </p>
          <a
            href={finnUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-green-950 font-bold px-10 py-5 rounded-xl transition-all duration-200 shadow-2xl shadow-amber-900/40 hover:scale-105 active:scale-95 text-lg"
          >
            Se ledige datoer på FINN
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
