import Link from "next/link";
import Ember from "@/components/Ember";

const pillars = [
  {
    n: "01",
    title: "One message a day",
    body: "Written like a letter, not a notification.",
  },
  {
    n: "02",
    title: "Words from other women",
    body: "An anonymous wall of encouragement.",
  },
  {
    n: "03",
    title: "Somewhere to put it down",
    body: "A journal with one honest prompt.",
  },
];

export default function Landing() {
  return (
    <div className="flex flex-1 animate-fadeup flex-col">
      <header className="flex items-center justify-between border-b border-sand px-6 py-5 sm:px-11">
        <div className="font-serif text-lg font-medium tracking-[.02em] text-espresso">
          Held
        </div>
        <div className="flex items-center gap-6 text-[12.5px] text-bark">
          <Link
            href="/resources"
            className="text-bark no-underline hover:text-ember"
          >
            Resources
          </Link>
          <span className="flex overflow-hidden rounded-full border border-sand-deep text-[11px]">
            <span className="bg-espresso px-[11px] py-1 font-semibold text-paper">
              EN
            </span>
            <span className="px-[11px] py-1 text-fawn" title="Français — coming later">
              FR
            </span>
          </span>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 pb-[68px] pt-[84px] sm:px-11">
        <Ember
          className="-bottom-[200px] -right-[100px] h-[560px] w-[560px]"
          animation="animate-breathe-slow"
        />
        <h1 className="relative m-0 mb-6 max-w-[680px] font-serif text-4xl font-light leading-[1.06] tracking-[-.01em] text-espresso sm:text-[60px]">
          Ten days a month, the world gets heavier.
          <br />
          <span className="text-ember">We built this for those days.</span>
        </h1>
        <p className="relative m-0 mb-[34px] max-w-[440px] text-[15px] leading-[1.65] text-bark">
          For women in Ottawa living with PMS and PMDD. Not a tracker. Not a
          diagnosis. A steady voice that shows up.
        </p>
        <div className="relative flex items-center gap-4">
          <Link
            href="/begin"
            className="rounded-lg bg-ember px-[30px] py-[15px] text-sm font-semibold text-paper no-underline transition-colors hover:bg-ember-deep"
          >
            Begin — it takes one minute
          </Link>
          <span className="text-[12.5px] text-fawn">Free · Anonymous</span>
        </div>
      </section>

      <section className="grid border-t border-sand sm:grid-cols-3">
        {pillars.map((p, i) => (
          <div
            key={p.n}
            className={`px-[34px] pb-9 pt-[30px] ${
              i < pillars.length - 1
                ? "border-b border-sand sm:border-b-0 sm:border-r"
                : ""
            }`}
          >
            <div className="mb-3 font-serif text-[34px] font-light text-ember">
              {p.n}
            </div>
            <div className="mb-[7px] font-serif text-[17px] text-espresso">
              {p.title}
            </div>
            <div className="text-[12.5px] leading-relaxed text-bark-soft">
              {p.body}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
