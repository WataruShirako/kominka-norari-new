import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import svgPaths from "../../imports/svg-w1xwou0m3q";

const navItems = [
  { label: "物語", labelEn: "Story", href: "#about" },
  { label: "空間", labelEn: "Space", href: "#gallery" },
  { label: "特徴", labelEn: "Features", href: "#features" },
  { label: "お問い合わせ", labelEn: "Contact", href: "#contact" },
];

/* The Figma SVG logo mark — two groups of vectors */
function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 17.6234 34.5213"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={svgPaths.p276fef00} fill="currentColor" />
      <path d={svgPaths.p114a9600} fill="currentColor" />
      <path d={svgPaths.p1788fb80} fill="currentColor" />
      <path d={svgPaths.p20fd4700} fill="currentColor" />
      <path d={svgPaths.p2d8cb490} fill="currentColor" />
      <path d={svgPaths.p3e560500} fill="currentColor" />
      <path d={svgPaths.p1d13e500} fill="currentColor" />
      <path d={svgPaths.p3e73bd00} fill="currentColor" />
      <path d={svgPaths.p1bf51100} fill="currentColor" />
      <path d={svgPaths.p3f6d7600} fill="currentColor" />
      <path d={svgPaths.p152e8a00} fill="currentColor" />
      <path d={svgPaths.p26a45300} fill="currentColor" />
      <path d={svgPaths.p1f97ab32} fill="currentColor" />
    </svg>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${
          scrolled
            ? "bg-[#F5F0EB]/90 backdrop-blur-lg shadow-[0_1px_0_rgba(44,36,24,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1470px] mx-auto px-6 md:px-16 flex items-center justify-between h-20 md:h-24">
          {/* Logo — SVG mark + vertical text like Figma */}
          <a
            href="#"
            className={`group flex items-start gap-3 transition-colors duration-500 ${
              scrolled ? "text-[#2C2418]" : "text-[#FAF7F3]"
            }`}
          >
            {/* SVG Logo mark */}
            <LogoMark className="w-[18px] h-auto mt-0.5" />

            {/* Vertical label beside logo */}
            <div
              className="flex gap-1.5"
              style={{ writingMode: "vertical-rl" }}
            >
              <span
                className="block"
                style={{
                  fontFamily: '"Noto Serif JP", serif',
                  fontSize: "0.85rem",
                  fontWeight: 400,
                  letterSpacing: "0.2em",
                }}
              >
                古民家
              </span>
              <span
                className={`block transition-colors duration-500 ${
                  scrolled ? "text-[#8A7E6E]/60" : "text-[#FAF7F3]/50"
                }`}
                style={{
                  fontFamily: '"Noto Serif JP", serif',
                  fontSize: "0.85rem",
                  fontWeight: 300,
                  letterSpacing: "0.2em",
                }}
              >
                のらり
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`group relative py-2 transition-colors duration-500 ${
                  scrolled ? "text-[#2C2418]/60" : "text-[#FAF7F3]/70"
                } hover:text-[#C4A87C]`}
                style={{
                  fontFamily: '"Noto Serif JP", serif',
                  fontSize: "0.75rem",
                  fontWeight: 400,
                  letterSpacing: "0.12em",
                }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C4A87C] group-hover:w-full transition-all duration-500" />
              </a>
            ))}
            {/* CTA */}
            <a
              href="#contact"
              className={`border px-5 py-2 transition-all duration-500 hover:bg-[#C4A87C] hover:border-[#C4A87C] hover:text-[#FAF7F3] ${
                scrolled
                  ? "border-[#2C2418]/20 text-[#2C2418]"
                  : "border-[#FAF7F3]/20 text-[#FAF7F3]"
              }`}
              style={{
                fontFamily: '"Noto Serif JP", serif',
                fontSize: "0.7rem",
                fontWeight: 400,
                letterSpacing: "0.15em",
              }}
            >
              ご予約
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className={`md:hidden transition-colors duration-500 ${
              scrolled ? "text-[#2C2418]" : "text-[#FAF7F3]"
            }`}
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 bg-[#2C2418] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 h-20">
              <div className="flex items-start gap-2 text-[#FAF7F3]">
                <LogoMark className="w-[16px] h-auto mt-0.5" />
                <span
                  style={{
                    fontFamily: '"Noto Serif JP", serif',
                    fontSize: "0.85rem",
                    fontWeight: 400,
                    letterSpacing: "0.2em",
                    writingMode: "vertical-rl",
                  }}
                >
                  古民家のらり
                </span>
              </div>
              <button
                className="text-[#FAF7F3]/60 hover:text-[#FAF7F3] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav items */}
            <nav className="flex-1 flex flex-col justify-center px-12">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="group py-6 border-b border-[#FAF7F3]/5 flex items-center justify-between"
                  onClick={() => setMenuOpen(false)}
                >
                  <div>
                    <span
                      className="text-[#FAF7F3] block group-hover:text-[#C4A87C] transition-colors"
                      style={{
                        fontFamily: '"Noto Serif JP", serif',
                        fontSize: "1.4rem",
                        fontWeight: 200,
                        letterSpacing: "0.2em",
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="text-[#C4A87C]/30 tracking-[0.2em] mt-1 block"
                      style={{
                        fontFamily: '"Zen Old Mincho", serif',
                        fontSize: "0.5rem",
                      }}
                    >
                      {item.labelEn}
                    </span>
                  </div>
                  <span
                    className="text-[#FAF7F3]/10 group-hover:text-[#C4A87C]/30 transition-colors"
                    style={{
                      fontFamily: '"Zen Old Mincho", serif',
                      fontSize: "1.5rem",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </motion.a>
              ))}
            </nav>

            {/* Footer */}
            <div className="px-12 pb-10">
              <div className="flex items-center gap-3">
                <span className="w-6 h-px bg-[#C4A87C]/30" />
                <span
                  className="text-[#C4A87C]/40 tracking-[0.3em]"
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
        )}
      </AnimatePresence>
    </>
  );
}
