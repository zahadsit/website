"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroVideo() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Wait until after first paint
    const timeout = setTimeout(() => setShowVideo(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full">
      {!showVideo ? (
        <Image
          src="/videos/hero1.webp"
          width={1920}
          height={1080}
          alt="Hero background"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      ) : (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          preload="none"
          autoPlay
          loop
          muted
          poster="/videos/hero1.webp"
          playsInline
        >
          <source src="/videos/home.mp4" type="video/mp4" />
          <source src="/videos/home.webm" type="video/webm" />
        </video>
      )}
    </div>
  );
}
