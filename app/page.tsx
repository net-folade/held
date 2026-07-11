import Link from "next/link";
import Ember from "@/components/Ember";
import { createClient } from "@/lib/supabase/server";

const sampleLetter =
  "You have survived every single one of these weeks so far. Tonight you only need to get through this one.";

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

export default async function Landing() {
  const supabase = await createClient();
  const { data: notes } = await supabase
    .from("posts")
    .select("id, content, signature")
    .eq("status", "approved")
    .order("created_at", { ascending: false })
    .limit(3);

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

      <section className="border-t border-sand px-6 pb-[68px] pt-16 sm:px-11">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="mb-3.5 text-[11px] font-semibold uppercase tracking-[.14em] text-fawn">
              From the wall
            </div>
            <h2 className="m-0 mb-2.5 font-serif text-[28px] font-light leading-[1.12] text-espresso sm:text-4xl">
              Notes women have already left
            </h2>
            <p className="m-0 max-w-[420px] text-[13.5px] leading-[1.6] text-bark">
              Real words, posted anonymously, read by someone who needed them.
              Take what you need.
            </p>
          </div>
          <Link
            href="/wall"
            className="whitespace-nowrap text-[13px] font-medium text-ember no-underline underline-offset-[3px] hover:text-ember-deep hover:underline"
          >
            Read the wall →
          </Link>
        </div>
        {notes && notes.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-3 md:items-start">
            {notes.map((note) => (
              <div
                key={note.id}
                className="border border-sand bg-paper px-[22px] pb-[18px] pt-[22px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(50,33,26,.08)]"
              >
                <p className="m-0 font-serif text-[15.5px] leading-[1.55] text-espresso">
                  {note.content}
                </p>
                {note.signature && (
                  <div className="mt-3.5 text-[11px] text-ember">
                    — {note.signature}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="m-0 max-w-[440px] font-serif text-[15px] italic text-bark">
            The wall is quiet today. Someone has to leave the first note —
            maybe it&rsquo;s you.
          </p>
        )}
      </section>

      <section className="border-t border-sand px-6 pb-[68px] pt-16 sm:px-11">
        <div className="mb-3.5 text-[11px] font-semibold uppercase tracking-[.14em] text-fawn">
          One letter a day
        </div>
        <h2 className="m-0 mb-2.5 font-serif text-[28px] font-light leading-[1.12] text-espresso sm:text-4xl">
          Written like a letter, not a notification
        </h2>
        <blockquote className="m-0 mt-[30px] max-w-[640px] border-l-2 border-ember pl-7">
          <p className="m-0 font-serif text-2xl font-light italic leading-[1.4] text-espresso sm:text-3xl">
            &ldquo;{sampleLetter}&rdquo;
          </p>
          <footer className="mt-4 text-[11px] font-medium uppercase tracking-[.12em] text-fawn">
            A sample of today&rsquo;s letter
          </footer>
        </blockquote>
      </section>

      <section className="border-t border-sand px-6 pb-[68px] pt-16 sm:px-11">
        <div className="mb-3.5 text-[11px] font-semibold uppercase tracking-[.14em] text-fawn">
          When you&rsquo;re ready
        </div>
        <h2 className="m-0 mb-[26px] max-w-[560px] font-serif text-[28px] font-light leading-[1.12] text-espresso sm:text-4xl">
          The hard week will come back. This will be here when it does.
        </h2>
        <div className="flex items-center gap-4">
          <Link
            href="/begin"
            className="rounded-lg bg-ember px-[30px] py-[15px] text-sm font-semibold text-paper no-underline transition-colors hover:bg-ember-deep"
          >
            Begin — it takes one minute
          </Link>
          <span className="text-[12.5px] text-fawn">
            Free · Anonymous · No tracking
          </span>
        </div>
      </section>
    </div>
  );
}
