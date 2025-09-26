"use client";
import { useUI } from "@/store/ui";
import { useEffect, useRef } from "react";

export default function ProjectMedia({
  webmSrc,
  gifSrc,
  posterSrc,
  videoAlt,
  posterAlt,
}: {
  webmSrc: string;
  gifSrc: string;
  posterSrc: string;
  videoAlt: string;
  posterAlt: string;
}) {
  const { lite } = useUI();
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
      {lite ? (
        <img src={posterSrc} alt={posterAlt} />
      ) : (
        <video
          ref={ref}
          playsInline
          autoPlay
          muted
          loop
          preload="metadata"
          poster={posterSrc}
          className="block h-auto w-full object-cover"
        >
          <source src={webmSrc} type="video/webm" />
          {/* Fallback */}
          <img src={gifSrc} alt={videoAlt} />
        </video>
      )}
    </div>
  );
}
