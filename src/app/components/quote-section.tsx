import { useEffect, useState, useRef } from "react";
import { motion, useInView as useMotionInView } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const toriiImage =
  "https://images.unsplash.com/photo-1769868944122-1bffed5547c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHRlbXBsZSUyMGdhdGUlMjB0b3JpaSUyMGF1dHVtbnxlbnwxfHx8fDE3NzE5ODgyNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function QuoteSection() {
  const ref = useRef(null);
  const inView = useMotionInView(ref, { once: true, amount: 0.3 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={ref} className="relative h-[80vh] md:h-screen overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <ImageWithFallback
          src={toriiImage}
          alt="鳥居"
          className="w-full h-[130%] object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[#2C2418]/60" />

      <div className="absolute inset-8 md:inset-16 border border-[#FAF7F3]/[0.06] pointer-events-none" />

      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl"
        >
          <div className="flex items-center justify-center mb-12">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 border border-[#C4A87C]/25 rounded-full" />
              <div className="absolute inset-2 border border-[#C4A87C]/15 rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-[#C4A87C]/60"
                  style={{
                    fontFamily: '"Noto Serif JP", serif',
                    fontSize: "0.9rem",
                    fontWeight: 200,
                  }}
                >
                  禅
                </span>
              </div>
            </div>
          </div>

          <blockquote>
            {[
              "古い木は、新しい木にはない",
              "深い色と艶を持っている。",
              "それは時間という名の職人が",
              "磨き上げた芸術作品である。",
            ].map((line, i) => (
              <motion.span
                key={i}
                className="text-[#FAF7F3] block"
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  fontFamily: '"Noto Serif JP", serif',
                  fontSize: "clamp(1rem, 2vw, 1.4rem)",
                  fontWeight: 200,
                  lineHeight: 2.6,
                  letterSpacing: "0.15em",
                }}
              >
                {line}
              </motion.span>
            ))}
          </blockquote>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-10 flex items-center justify-center gap-5"
          >
            <span className="w-12 h-px bg-[#C4A87C]/30" />
            <span
              className="text-[#C4A87C]/60"
              style={{
                fontFamily: '"Noto Serif JP", serif',
                fontSize: "0.7rem",
                fontWeight: 300,
                letterSpacing: "0.25em",
              }}
            >
              棟梁の言葉より
            </span>
            <span className="w-12 h-px bg-[#C4A87C]/30" />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute top-12 left-12 w-8 h-8 border-t border-l border-[#C4A87C]/20 hidden md:block" />
      <div className="absolute top-12 right-12 w-8 h-8 border-t border-r border-[#C4A87C]/20 hidden md:block" />
      <div className="absolute bottom-12 left-12 w-8 h-8 border-b border-l border-[#C4A87C]/20 hidden md:block" />
      <div className="absolute bottom-12 right-12 w-8 h-8 border-b border-r border-[#C4A87C]/20 hidden md:block" />
    </section>
  );
}
