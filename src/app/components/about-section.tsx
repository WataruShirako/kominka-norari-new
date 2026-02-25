import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useInView } from "./use-in-view";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const interiorImage =
  "https://images.unsplash.com/photo-1759310706794-b8a350561d93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGphcGFuZXNlJTIwaG91c2UlMjBpbnRlcmlvciUyMHdvb2RlbnxlbnwxfHx8fDE3NzE5ODYyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const gardenImage =
  "https://images.unsplash.com/photo-1764112434647-bfd7d5ccb10d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGdhcmRlbiUyMHplbiUyMHN0b25lc3xlbnwxfHx8fDE3NzE5Mzg5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const calligraphyImage =
  "https://images.unsplash.com/photo-1486303954368-398fea0e72cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGNhbGxpZ3JhcGh5JTIwaW5rJTIwYnJ1c2h8ZW58MXx8fHwxNzcxOTg4MjY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function AboutSection() {
  const [ref, inView] = useInView(0.1);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 md:py-48 px-6 md:px-16 lg:px-24 bg-[#F5F0EB] overflow-hidden"
    >
      <div
        className="absolute -right-20 top-20 pointer-events-none select-none opacity-[0.025]"
        style={{
          fontFamily: '"Noto Serif JP", serif',
          fontSize: "20rem",
          fontWeight: 200,
          lineHeight: 1,
          transform: `translateY(${(scrollY - 600) * 0.1}px)`,
        }}
      >
        古
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-px h-20 bg-gradient-to-b from-transparent to-[#C4A87C]/30" />
        <div className="w-2 h-2 rounded-full border border-[#C4A87C]/30 mt-1" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 md:mb-36"
        >
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-5">
              <span
                className="text-[#C4A87C] tracking-[0.5em] block mb-5"
                style={{
                  fontFamily: '"Zen Old Mincho", serif',
                  fontSize: "0.6rem",
                }}
              >
                PHILOSOPHY
              </span>
              <h2
                className="text-[#2C2418]"
                style={{
                  fontFamily: '"Noto Serif JP", serif',
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontWeight: 200,
                  letterSpacing: "0.12em",
                  lineHeight: 1.6,
                }}
              >
                古きを訪ね、
                <br />
                新しきを<span className="text-[#C4A87C]">創</span>る
              </h2>
            </div>
            <div className="md:col-span-2 hidden md:flex justify-center">
              <div className="w-px h-20 bg-[#C4A87C]/20" />
            </div>
            <div className="md:col-span-5">
              <p
                className="text-[#8A7E6E]"
                style={{
                  fontFamily: '"Noto Serif JP", serif',
                  fontSize: "0.82rem",
                  fontWeight: 300,
                  lineHeight: 2.6,
                  letterSpacing: "0.04em",
                }}
              >
                伝統建築の美意識を現代に継承する。
                それは単なる修復ではなく、
                新たな命を吹き込む創造の行為。
                百年の時が培った素材の表情を活かしながら、
                次の百年を見据えた空間を紡ぎます。
              </p>
            </div>
          </div>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative md:w-[60%]"
          >
            <div className="relative overflow-hidden">
              <div
                style={{
                  transform: `translateY(${Math.max(0, (scrollY - 800) * 0.05)}px)`,
                }}
              >
                <ImageWithFallback
                  src={interiorImage}
                  alt="古民家内装"
                  className="w-full aspect-[4/5] md:aspect-[3/4] object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border border-[#C4A87C]/15 -z-10" />

            <div className="absolute bottom-8 left-8 bg-[#2C2418] px-6 py-4">
              <span
                className="text-[#C4A87C] tracking-[0.3em] block mb-1"
                style={{
                  fontFamily: '"Zen Old Mincho", serif',
                  fontSize: "0.5rem",
                }}
              >
                INTERIOR
              </span>
              <span
                className="text-[#FAF7F3]"
                style={{
                  fontFamily: '"Noto Serif JP", serif',
                  fontSize: "0.9rem",
                  fontWeight: 300,
                  letterSpacing: "0.2em",
                }}
              >
                主室の景
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1.2,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:w-[48%] bg-[#FAF7F3] p-10 md:p-14 mt-8 md:mt-0 shadow-[0_20px_60px_rgba(44,36,24,0.06)]"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-[#C4A87C]" />
              <span
                className="text-[#C4A87C] tracking-[0.3em]"
                style={{
                  fontFamily: '"Zen Old Mincho", serif',
                  fontSize: "0.55rem",
                }}
              >
                01
              </span>
            </div>

            <h3
              className="text-[#2C2418] mb-8"
              style={{
                fontFamily: '"Noto Serif JP", serif',
                fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
                fontWeight: 300,
                letterSpacing: "0.12em",
                lineHeight: 1.8,
              }}
            >
              百年の記憶と
              <br />
              共に暮らす贅沢
            </h3>
            <p
              className="text-[#8A7E6E] mb-6"
              style={{
                fontFamily: '"Noto Serif JP", serif',
                fontSize: "0.82rem",
                fontWeight: 300,
                lineHeight: 2.4,
                letterSpacing: "0.03em",
              }}
            >
              明治から大正にかけて建てられた古民家は、
              匠の技が随所に光る日本建築の粋。
              太い梁、磨き込まれた柱、土壁の温もり——
              時を重ねた素材だけが持つ深い表情を活かしながら、
              現代の暮らしに寄り添う空間へと再生しました。
            </p>
            <p
              className="text-[#8A7E6E]"
              style={{
                fontFamily: '"Noto Serif JP", serif',
                fontSize: "0.82rem",
                fontWeight: 300,
                lineHeight: 2.4,
                letterSpacing: "0.03em",
              }}
            >
              伝統とモダンが交差する場所で、
              日本の美意識を肌で感じる——
              それが、この古民家の物語です。
            </p>
          </motion.div>
        </div>

        <div className="mt-32 md:mt-48 relative">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="md:col-span-5 md:col-start-1"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-px bg-[#C4A87C]" />
                <span
                  className="text-[#C4A87C] tracking-[0.3em]"
                  style={{
                    fontFamily: '"Zen Old Mincho", serif',
                    fontSize: "0.55rem",
                  }}
                >
                  02
                </span>
              </div>

              <h3
                className="text-[#2C2418] mb-8"
                style={{
                  fontFamily: '"Noto Serif JP", serif',
                  fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
                  fontWeight: 300,
                  letterSpacing: "0.12em",
                  lineHeight: 1.8,
                }}
              >
                自然と調和する
                <br />
                暮らしの風景
              </h3>
              <p
                className="text-[#8A7E6E] mb-10"
                style={{
                  fontFamily: '"Noto Serif JP", serif',
                  fontSize: "0.82rem",
                  fontWeight: 300,
                  lineHeight: 2.4,
                  letterSpacing: "0.03em",
                }}
              >
                四季折々の表情を見せる庭園は、
                枯山水の静謐さと苔庭の生命力が共存する空間。
                縁側に座り、移ろう季節の気配を感じる——
                日本人が大切にしてきた「間」の美学が、
                ここには息づいています。
              </p>

              <div className="w-48 md:w-56 relative">
                <ImageWithFallback
                  src={calligraphyImage}
                  alt="書道"
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute -top-2 -left-2 w-full h-full border border-[#C4A87C]/15 -z-10" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1.2,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="md:col-span-6 md:col-start-7 relative"
            >
              <div className="overflow-hidden">
                <div
                  style={{
                    transform: `translateY(${Math.max(0, (scrollY - 1400) * 0.04)}px)`,
                  }}
                >
                  <ImageWithFallback
                    src={gardenImage}
                    alt="日本庭園"
                    className="w-full aspect-[3/4] object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-6 -left-6 w-1/2 h-1/2 border border-[#C4A87C]/15 -z-10" />

              <div className="absolute top-8 right-8 bg-[#2C2418] px-6 py-4">
                <span
                  className="text-[#C4A87C] tracking-[0.3em] block mb-1"
                  style={{
                    fontFamily: '"Zen Old Mincho", serif',
                    fontSize: "0.5rem",
                  }}
                >
                  GARDEN
                </span>
                <span
                  className="text-[#FAF7F3]"
                  style={{
                    fontFamily: '"Noto Serif JP", serif',
                    fontSize: "0.9rem",
                    fontWeight: 300,
                    letterSpacing: "0.2em",
                  }}
                >
                  庭園の趣
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
