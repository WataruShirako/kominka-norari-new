import { useEffect, useState } from "react";
import { motion } from "motion/react";
import imgImage from "figma:asset/73373f0e1b98b2752ecda35c4529a71c8fbaa175.png";
import imgImage1 from "figma:asset/2e9ca963356453d2716a8abd672155989ed3307b.png";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <img
          src={imgImage}
          alt="古民家外観"
          className="w-full h-[120%] object-cover"
        />
      </div>

      {/* Gradient overlays — matching Figma */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(44,36,24,0.5)] via-[rgba(44,36,24,0.2)] to-[rgba(44,36,24,0.8)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(44,36,24,0.4)] via-transparent to-transparent" />

      {/* Decorative vertical grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[15%] w-px h-full bg-[#FAF7F3]/[0.04]" />
        <div className="absolute top-0 left-[50%] w-px h-full bg-[#FAF7F3]/[0.04]" />
        <div className="absolute top-0 left-[85%] w-px h-full bg-[#FAF7F3]/[0.04]" />
      </div>

      {/* Right side bamboo image panel */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-6 md:right-16 lg:right-20 bottom-[20%] md:bottom-[28%] w-32 md:w-48 hidden md:block"
      >
        <div className="relative">
          {/* Offset border frame */}
          <div className="absolute -top-3 -left-3 w-full h-full border border-[#C4A87C]/20" />
          <img
            src={imgImage1}
            alt="竹林"
            className="w-full aspect-[3/4] object-cover opacity-70"
          />
          {/* Label below image */}
          <div className="mt-4 flex items-center gap-3">
            <span className="w-6 h-px bg-[#C4A87C]/40" />
            <span
              className="text-[#FAF7F3]/40 tracking-[0.3em]"
              style={{
                fontFamily: '"Zen Old Mincho", serif',
                fontSize: "0.5rem",
              }}
            >
              KYOTO, JAPAN
            </span>
          </div>
        </div>
      </motion.div>

      {/* ====== CENTER CONTENT ====== */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        {/* Main title — centered */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[#FAF7F3] text-center"
            style={{
              fontFamily: '"Noto Serif JP", serif',
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 200,
              letterSpacing: "0.33em",
              lineHeight: 1.4,
            }}
          >
            能登の暮らしを味わう
          </motion.h1>
        </div>

        {/* Description text — centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 1 }}
          className="text-center mb-14"
        >
          {[
            "百年の歴史が息づく古民家を",
            "現代の感性で甦らせる。",
            "時を纏い、美を継ぐ住まい。",
          ].map((line, i) => (
            <p
              key={i}
              className="text-[#FAF7F3]/60"
              style={{
                fontFamily: '"Noto Serif JP", serif',
                fontSize: "clamp(0.72rem, 1vw, 0.85rem)",
                fontWeight: 300,
                lineHeight: 2.2,
                letterSpacing: "0.08em",
              }}
            >
              {line}
            </p>
          ))}
        </motion.div>

        {/* CTA link — centered */}
        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="group inline-flex items-center gap-6 text-[#FAF7F3]"
        >
          <span
            className="tracking-[0.3em] group-hover:text-[#C4A87C] transition-colors duration-500"
            style={{
              fontFamily: '"Noto Serif JP", serif',
              fontSize: "0.75rem",
              fontWeight: 400,
            }}
          >
            物語を農る
          </span>
          <span className="relative w-16 h-px bg-[#FAF7F3]/30 group-hover:bg-[#C4A87C] transition-colors duration-500 overflow-hidden">
            <motion.span
              className="absolute inset-0 bg-[#C4A87C]"
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </span>
        </motion.a>
      </div>

      {/* ====== BOTTOM BAR ====== */}
      <div className="absolute bottom-0 left-0 right-0 h-24 flex items-end">
        <div className="w-full flex items-center justify-between px-6 md:px-16 pb-8">
          {/* Scroll indicator */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.div
              className="w-px h-12 bg-[#C4A87C]/40 origin-top"
              animate={{ scaleY: [0, 1, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span
              className="text-[#FAF7F3]/40 tracking-[0.3em]"
              style={{
                fontFamily: '"Zen Old Mincho", serif',
                fontSize: "0.55rem",
                writingMode: "vertical-rl",
              }}
            >
              SCROLL
            </span>
          </motion.div>

          {/* Year badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="flex items-center gap-3"
          >
            <span
              className="text-[#FAF7F3]/30"
              style={{
                fontFamily: '"Zen Old Mincho", serif',
                fontSize: "0.55rem",
                letterSpacing: "0.2em",
              }}
            >
              EST.
            </span>
            <span
              className="text-[#C4A87C]/60"
              style={{
                fontFamily: '"Zen Old Mincho", serif',
                fontSize: "1.5rem",
                fontWeight: 400,
              }}
            >
              1912
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
