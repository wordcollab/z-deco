import { useLayoutEffect, useRef, useState } from "react";
import { useI18n } from "../i18n";
import { IMG } from "../config";
import { CompareIcon } from "./icons";
import { Reveal } from "./Reveal";

export function BeforeAfter() {
  const { t } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const [pos, setPos] = useState(50);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (containerRef.current) setWidth(containerRef.current.clientWidth);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const setFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  };

  const onDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    setFromClientX(e.clientX);
  };
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    setFromClientX(e.clientX);
  };
  const stop = () => {
    dragging.current = false;
  };

  return (
    <section className="scroll-mt-24 bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-widest text-accent">
            {t.beforeAfter.kicker}
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            {t.beforeAfter.title}
          </h2>
          <p className="mt-4 text-lg text-ink/60">{t.beforeAfter.subtitle}</p>
        </Reveal>

        <Reveal delay={80}>
          <div
            ref={containerRef}
            className="relative mt-10 aspect-[16/10] w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-2xl shadow-xl shadow-ink/10 ring-1 ring-line"
            onPointerDown={onDown}
            onPointerMove={onMove}
            onPointerUp={stop}
            onPointerCancel={stop}
            onPointerLeave={stop}
          >
            {/* After (base layer) */}
            <img
              src={IMG.after}
              alt="Après"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Before (clipped layer) */}
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
              <img
                src={IMG.before}
                alt="Avant"
                className="absolute left-0 top-0 h-full max-w-none object-cover"
                style={{ width: width ? `${width}px` : "100%" }}
              />
            </div>

            {/* Divider */}
            <div className="absolute inset-y-0 z-10" style={{ left: `${pos}%` }}>
              <div className="absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white/90" />
              <div className="absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-lg">
                <CompareIcon className="h-6 w-6" />
              </div>
            </div>

            {/* Labels */}
            <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-xs font-bold text-white backdrop-blur">
              {t.beforeAfter.before}
            </span>
            <span className="absolute right-4 top-4 rounded-full bg-accent/90 px-3 py-1 text-xs font-bold text-white backdrop-blur">
              {t.beforeAfter.after}
            </span>
          </div>
        </Reveal>

        <p className="mt-4 text-center text-sm text-ink/50">{t.beforeAfter.hint}</p>
      </div>
    </section>
  );
}
