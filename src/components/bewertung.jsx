"use client";

import { useState, useEffect } from "react";

const reviews = [
  {
    name: "Maja Bremer",
    rating: 5,
    text: "Ich bin mehr als zufrieden mit der Arbeit von 22Orbit! Ich habe meine Website hier erstellen lassen, und das Ergebnis hat meine Erwartungen bei weitem übertroffen. Nicht nur, dass die Website super professionell gestaltet wurde – es wurde auch richtig auf mein Unternehmen und meine Vorstellungen eingegangen. Besonders die Zusammenarbeit mit Georg war einfach großartig. Der Kontakt war jederzeit unkompliziert, freundlich und genau so, wie man es sich wünscht. Man merkt richtig, dass hier Menschen mit Herz und Expertise am Werk sind. Absolute Empfehlung!",
    link: "https://maps.app.goo.gl/LTPgfTmPYP9oMcSh9",
    source: "Google",
    date: "Juni 2025",
  },
  {
    name: "Dennis Stawertij",
    rating: 5,
    text: "Super Team, super Kommunikation - und sehr zufrieden mit der Arbeit. Weiter so!",
    link: "https://maps.app.goo.gl/VSW93LtsvDhRXpRT6",
    source: "Google",
    date: "Mai 2025",
  },
  {
    name: "Julius Lenz",
    rating: 5,
    text: "Sehr professionelle und versierte Arbeit. Super zuverlässig. Wir standen immer in Absprache. Alle Fragen wurden Fachgemäß und schnell beantwortet. Ich war sehr zufrieden! ",
    link: "https://de.trustpilot.com/reviews/68aae0193ac01a689d02264d",
    source: "Trustpilot",
    date: "Juni 2025",
  },
  {
    name: "Fabian Khan",
    rating: 5,
    text: "Wir sind sehr zufrieden mit der Zusammenarbeit! Der Kontakt mit Georg war von Anfang an freundlich, zuverlässig und professionell. Unsere Wünsche wurden immer berücksichtigt, und die Kommunikation war schnell und unkompliziert. Das Ergebnis – unsere neue Website – hat unsere Erwartungen voll erfüllt. Besonders schätzen wir auch die laufende Betreuung, bei der wir uns jederzeit gut aufgehoben fühlen. Absolut empfehlenswert!",
    link: "https://de.trustpilot.com/reviews/68b48a583915209874ce5944",
    source: "Trustpilot",
    date: "Juni 2025",
  },
  {
    name: "Yvonne",
    rating: 5,
    text: "Ich habe mir von Georg eine Website für mein Kurhotel erstellen lassen und bin absolut zufrieden! Professionelle Umsetzung, ansprechendes Design und schnelle Kommunikation. Die Seite spiegelt genau das wider, was ich mir vorgestellt habe – modern, einladend und benutzerfreundlich. Klare Weiterempfehlung!",
    link: "https://maps.app.goo.gl/ChF4o6w1WCT12MZ79",
    source: "Google",
    date: "Juni 2025",
  },
];

function StarRating({ source }) {
  if (source === "Google") {
    return (
      <img
        src="/Google5.png"
        alt="Google Bewertung 5 Sterne"
        className="w-24 h-auto mt-2"
      />
    );
  }
  if (source === "Trustpilot") {
    return (
      <img
        src="/Trustpilo1.png"
        alt="Trustpilot Bewertung 5 Sterne"
        className="w-24 h-auto mt-2"
      />
    );
  }
  return null;
}

function ReviewCard({ review }) {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 200;
  const shouldTruncate = review.text.length > maxLength;

  return (
    <div className="bg-[#3e5c76]/30 rounded-xl p-6 shadow-lg flex flex-col items-center gap-4 min-h-[420px] h-full">
      <div className="flex flex-col items-center">
        <span className="font-bebas text-xl text-[#f0ebd8]">{review.name}</span>
        <span className="text-[#748cab] text-sm">{review.date}</span>
        <StarRating source={review.source} />
      </div>
      
      <div className="flex-1 flex flex-col justify-between">
        <p 
          className="text-[#f0ebd8] text-sm sm:text-base font-light text-center leading-relaxed"
          style={{ 
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            hyphens: 'auto'
          }}
        >
          {expanded || !shouldTruncate
            ? review.text
            : `${review.text.slice(0, maxLength)}...`}
        </p>
        
        {shouldTruncate && (
          <div className="flex flex-col gap-2 mt-4">
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-[#748cab] text-sm hover:text-[#f0ebd8] transition underline"
            >
              {expanded ? "Weniger anzeigen" : "Mehr lesen"}
            </button>
            <a
              href={review.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#748cab] text-sm hover:text-[#f0ebd8] transition underline"
            >
              Original auf {review.source} ansehen.
            </a>
          </div>
        )}
        
        {!shouldTruncate && (
          <a
            href={review.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#748cab] text-sm hover:text-[#f0ebd8] transition underline mt-4 text-center"
          >
            Original auf {review.source} ansehen.
          </a>
        )}
      </div>
    </div>
  );
}

export default function Bewertungen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
      setCurrentIndex(0);
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, reviews.length - itemsPerView);

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="w-full max-w-7xl mx-auto my-24 px-4 sm:px-8">
      <h2 className="font-bebas text-5xl sm:text-6xl text-[#f0ebd8] mb-12 tracking-wide text-center">
        Das sagen unsere Partner
      </h2>

      <div className="relative">
        <div className="overflow-hidden -mx-3">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
            }}
          >
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="px-3"
                style={{ 
                  flex: `0 0 ${100 / itemsPerView}%`,
                  maxWidth: `${100 / itemsPerView}%`
                }}
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-8 mt-8">
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className={`bg-[#748cab] hover:bg-[#3e5c76] text-[#f0ebd8] rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition border-2 border-[#f0ebd8] ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            aria-label="Vorherige Bewertung"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === idx
                    ? "bg-[#f0ebd8] w-8"
                    : "bg-[#748cab] hover:bg-[#f0ebd8]"
                }`}
                aria-label={`Zu Bewertung ${idx + 1} springen`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            disabled={currentIndex === maxIndex}
            className={`bg-[#748cab] hover:bg-[#3e5c76] text-[#f0ebd8] rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition border-2 border-[#f0ebd8] ${
              currentIndex === maxIndex ? "opacity-50 cursor-not-allowed" : ""
            }`}
            aria-label="Nächste Bewertung"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        
      </div>
    </section>
  );
}