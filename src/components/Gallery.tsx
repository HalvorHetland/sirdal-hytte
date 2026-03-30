import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

// All 8 URLs verified 200 OK — 7 others from the original set returned 404 and are excluded
const images = [
  {
    url: 'https://images.finncdn.no/dynamic/1280w/2024/3/vertical-0/25/4/344/992/734_77a2a58b-6a67-4d36-9c4b-a76b5336d807.png',
    alt: 'Eksteriør – hytten sett utenfra',
  },
  {
    url: 'https://images.finncdn.no/dynamic/1280w/2024/3/vertical-0/25/4/344/992/734_2434909f-e840-4bf7-a599-0da82af5b7cd.jpg',
    alt: 'Stue og innvendig',
  },
  {
    url: 'https://images.finncdn.no/dynamic/1280w/2024/5/vertical-0/02/4/344/992/734_15f89892-aa19-4d4d-9899-78a07e46ba7e.jpg',
    alt: 'Kjøkken og allrom',
  },
  {
    url: 'https://images.finncdn.no/dynamic/1280w/2025/1/vertical-0/27/4/344/992/734_48d36940-0ebd-4c40-8a55-91390413404d.jpg',
    alt: 'Soverom',
  },
  {
    url: 'https://images.finncdn.no/dynamic/1280w/2024/5/vertical-0/15/4/344/992/734_32f3c522-36ed-45a0-ae4c-bf568649ab17.jpg',
    alt: 'Terrasse og utsikt',
  },
  {
    url: 'https://images.finncdn.no/dynamic/1280w/2024/3/vertical-0/25/4/344/992/734_bcfd93d1-2891-4fb0-b9cd-2292da6e97cf.jpg',
    alt: 'Uteområde',
  },
  {
    url: 'https://images.finncdn.no/dynamic/1280w/2024/5/vertical-0/15/4/344/992/734_9eb57e1e-0669-40b0-a6c9-b8440099c1d9.jpg',
    alt: 'Stue',
  },
  {
    url: 'https://images.finncdn.no/dynamic/1280w/2024/3/vertical-0/25/4/344/992/734_7c9424e9-ee6a-4b49-8ef0-ca1b14451047.jpg',
    alt: 'Spisestue',
  },
]

const hideOnError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  const img = e.currentTarget
  // Hide the image and collapse its container so no empty slot remains
  img.style.display = 'none'
  const parent = img.parentElement
  if (parent) parent.style.display = 'none'
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const closeLightbox = () => setLightboxIndex(null)
  const prev = () => setLightboxIndex((i) => (i === null ? 0 : (i - 1 + images.length) % images.length))
  const next = () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % images.length))

  return (
    <section id="bilder" className="py-24 px-6 bg-[#0a1a0b]">
      <div className="max-w-6xl mx-auto">
        <p className="text-amber-500 uppercase tracking-widest text-sm font-medium mb-3">Bildegalleri</p>
        <h2 className="text-4xl font-bold text-amber-100 mb-10">Se deg rundt</h2>

        {/* Mosaic grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {/* Large featured image */}
          <div
            className="col-span-2 row-span-2 cursor-pointer overflow-hidden rounded-2xl group"
            onClick={() => setLightboxIndex(0)}
          >
            <img
              src={images[0].url}
              alt={images[0].alt}
              onError={hideOnError}
              className="w-full h-full object-cover min-h-[300px] md:min-h-[420px] group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {images.slice(1).map((img, i) => (
            <div
              key={i}
              className="cursor-pointer overflow-hidden rounded-2xl group aspect-[4/3]"
              onClick={() => setLightboxIndex(i + 1)}
            >
              <img
                src={img.url}
                alt={img.alt}
                onError={hideOnError}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <p className="text-stone-500 text-sm mt-4 text-center">Klikk på et bilde for å forstørre</p>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors p-2"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-400 transition-colors bg-black/50 rounded-full p-3"
            onClick={(e) => { e.stopPropagation(); prev() }}
          >
            <ChevronLeft size={28} />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-400 transition-colors bg-black/50 rounded-full p-3"
            onClick={(e) => { e.stopPropagation(); next() }}
          >
            <ChevronRight size={28} />
          </button>

          <img
            src={images[lightboxIndex].url}
            alt={images[lightboxIndex].alt}
            onError={hideOnError}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(i) }}
                className={`w-2 h-2 rounded-full transition-all ${i === lightboxIndex ? 'bg-amber-400 w-6' : 'bg-stone-600'}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
