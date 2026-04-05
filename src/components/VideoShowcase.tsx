"use client";

import { useRef, useState, useEffect } from "react";

const videos = [
  { src: "/videos/reel-1.mp4", label: "Treatment Spotlight" },
  { src: "/videos/reel-2.mp4", label: "Client Experience" },
  { src: "/videos/reel-3.mp4", label: "Behind the Scenes" },
  { src: "/videos/reel-4.mp4", label: "Results" },
  { src: "/videos/reel-6.mp4", label: "Skincare Tips" },
  { src: "/videos/reel-7.mp4", label: "Product Highlights" },
  { src: "/videos/reel-8.mp4", label: "Team" },
];

function VideoCard({ src }: { src: string; label: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  if (hasError) return null;

  return (
    <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-charcoal group">
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <video
        ref={videoRef}
        src={src}
        muted={isMuted}
        loop
        playsInline
        autoPlay
        preload="metadata"
        className="w-full h-full object-cover"
        onError={() => setHasError(true)}
        {...{ "webkit-playsinline": "true" } as React.VideoHTMLAttributes<HTMLVideoElement>}
      />
      {/* Mute/Unmute Button */}
      <button
        onClick={() => {
          if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
          }
        }}
        className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-white hover:scale-105 z-10"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <svg className="w-5 h-5 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
          </svg>
        )}
      </button>
    </div>
  );
}

export default function VideoShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hasVideos, setHasVideos] = useState(true);

  useEffect(() => {
    // Check if any video exists
    const testVideo = document.createElement("video");
    testVideo.src = videos[0].src;
    testVideo.onerror = () => setHasVideos(false);
  }, []);

  if (!hasVideos) return null;

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-14 md:py-20 bg-charcoal">
      <div className="container-premium">
        <div className="text-center mb-10">
          <p className="overline !text-champagne-light mb-3">See It in Action</p>
          <h2 className="font-[family-name:var(--font-heading)] !text-white text-3xl md:text-4xl">
            Inside the Treatment Room
          </h2>
          <p className="text-white/50 mt-3 max-w-md mx-auto text-sm">
            Real treatments. Real results. Swipe to explore.
          </p>
        </div>

        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors hidden md:flex"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors hidden md:flex"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Video Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {videos.map((video) => (
              <div
                key={video.src}
                className="shrink-0 w-[220px] sm:w-[260px] snap-start"
              >
                <VideoCard src={video.src} label={video.label} />
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-white/30 mt-6">
          Follow us on{" "}
          <a
            href="https://www.instagram.com/skinrebootspaclinic/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-champagne-light hover:text-champagne transition-colors"
          >
            Instagram
          </a>{" "}
          for more
        </p>
      </div>
    </section>
  );
}
