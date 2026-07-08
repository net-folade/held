"use client";

import { useState } from "react";
import AppHeader from "@/components/AppHeader";

const earlierPages = [
  {
    date: "July 5",
    excerpt:
      "Slept nine hours and still woke up tired. But I made the call I'd been putting off, so that's the whole list done as far as I'm concerned.",
  },
  {
    date: "July 2",
    excerpt:
      "Snapped at M. over the dishwasher again. Apologized. He said he's learning the calendar too. That undid me a little, in a good way.",
  },
  {
    date: "June 28",
    excerpt:
      "First day I felt like myself in a while. Went to the market, bought too many peaches. No regrets about the peaches.",
  },
];

export default function JournalPage() {
  const [draft, setDraft] = useState("");
  const [savedFlash, setSavedFlash] = useState(false);

  return (
    <div className="flex flex-1 flex-col">
      <AppHeader />
      <main className="flex-1 animate-fadeup px-6 pb-[60px] pt-[52px] sm:px-11">
        <div className="mx-auto grid max-w-[960px] items-start gap-12 lg:grid-cols-[1fr_280px]">
          <div>
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-[.14em] text-ember">
              Tonight&rsquo;s prompt
            </div>
            <h2 className="m-0 mb-[26px] font-serif text-[28px] font-light leading-[1.25] text-espresso sm:text-[34px]">
              What&rsquo;s one thing your body did for you today, even while it
              was struggling?
            </h2>
            <textarea
              value={draft}
              onChange={(e) => {
                setDraft(e.target.value);
                setSavedFlash(false);
              }}
              placeholder="No one reads this but you."
              className="box-border min-h-[220px] w-full resize-y rounded-md border border-sand-deep bg-paper p-5 font-serif text-base leading-[1.7] text-espresso placeholder:text-fawn"
            />
            <div className="mt-4 flex items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  if (draft.trim()) setSavedFlash(true);
                }}
                className="cursor-pointer rounded-lg bg-ember px-6 py-3 text-[13px] font-semibold text-paper transition-colors hover:bg-ember-deep"
              >
                Put it down
              </button>
              {savedFlash && (
                <span className="animate-fadeup-fast font-serif text-[13.5px] italic text-bark">
                  Kept. You can close the page now.
                </span>
              )}
            </div>
          </div>

          <aside className="border-sand lg:border-l lg:pl-7">
            <div className="mb-[18px] text-[11px] font-semibold uppercase tracking-[.14em] text-fawn">
              Earlier pages
            </div>
            {earlierPages.map((entry) => (
              <div key={entry.date} className="mb-[22px]">
                <div className="mb-[5px] text-[11px] text-ember">
                  {entry.date}
                </div>
                <div className="line-clamp-3 font-serif text-[13.5px] leading-[1.5] text-bark">
                  {entry.excerpt}
                </div>
              </div>
            ))}
          </aside>
        </div>
      </main>
    </div>
  );
}
