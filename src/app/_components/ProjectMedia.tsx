"use client";
import { useEffect, useRef } from "react";

export default function ProjectMedia({
  webmSrc,
  gifSrc,
  poster,
  alt,
}: {
  webmSrc: string;
  gifSrc: string;
  poster: string;
  alt: string;
}) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const vid = ref.current;
    if (!vid) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            vid.play().catch(() => {});
          } else {
            vid.pause();
            vid.currentTime = Math.min(vid.currentTime, 0.1);
          }
        });
      },
      { threshold: 0.25 },
    );
    io.observe(vid);

    return () => io.disconnect();
  }, []);

  return (
    <div className="border-accent-50 overflow-hidden rounded-sm border-2 shadow-lg">
      <video
        ref={ref}
        playsInline
        autoPlay
        muted
        loop
        preload="metadata"
        poster={poster}
        className="block h-auto w-full"
      >
        <source src={webmSrc} type="video/webm" />
        {/* Fallback */}
        <img src={gifSrc} alt={alt} />
      </video>
    </div>
  );
}
