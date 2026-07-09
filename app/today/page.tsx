"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AppHeader from "@/components/AppHeader";
import Chip from "@/components/Chip";
import Ember from "@/components/Ember";

const moods = [
  "tender",
  "foggy",
  "angry at nothing",
  "heavy",
  "anxious",
  "alright, actually",
];

const moodReplies: Record<string, string> = {
  tender: "Then today asks for softness, not performance.",
  foggy: "Fog is weather, not a forecast. It moves through.",
  "angry at nothing": "It isn't nothing. Your body is doing extra work.",
  heavy: "You don't have to carry it gracefully. Just carry it.",
  anxious: "One breath at a time counts as progress today.",
  "alright, actually": "Good. Bank a little of it for the harder days.",
};

const dailyMessage =
  "You have survived every single one of these weeks so far. Tonight you only need to get through this one.";

const doors = [
  { href: "/journal", title: "Journal →", sub: "Today's prompt is waiting" },
  { href: "/wall", title: "The wall →", sub: "Read a few notes" },
  { href: "/resources", title: "Resources →", sub: "Ottawa & Ontario" },
];

export default function TodayPage() {
  const [picked, setPicked] = useState<string | null>(null);
  const [now, setNow] = useState<{ greeting: string; date: string } | null>(
    null,
  );

  useEffect(() => {
    const hour = new Date().getHours();
    setNow({
      greeting: hour < 12 ? "Morning" : hour < 18 ? "Afternoon" : "Evening",
      date: new Date().toLocaleDateString("en-CA", {
        month: "long",
        day: "numeric",
      }),
    });
  }, []);

  return (
    <div className="flex flex-1 flex-col">
      <AppHeader />
      <main className="relative flex-1 animate-fadeup overflow-hidden px-6 pb-[60px] pt-[52px] sm:px-11">
        <Ember
          className="-left-[140px] -top-[120px] h-[460px] w-[460px]"
          animation="animate-breathe-late"
        />
        <div className="relative mx-auto max-w-[840px]">
          <div className="mb-[34px] flex items-baseline justify-between">
            <div className="text-sm text-fawn">{now?.greeting ?? " "}</div>
            <div className="text-[11px] font-semibold uppercase tracking-[.12em] text-ember">
              {now?.date ?? " "}
            </div>
          </div>

          <blockquote className="m-0 max-w-[640px] border-l-2 border-ember pl-7">
            <p className="m-0 font-serif text-2xl font-light italic leading-[1.4] text-espresso sm:text-3xl">
              &ldquo;{dailyMessage}&rdquo;
            </p>
            <footer className="mt-4 text-[11px] font-medium uppercase tracking-[.12em] text-fawn">
              Today&rsquo;s letter
            </footer>
          </blockquote>

          <div className="mt-10 flex flex-wrap items-center gap-[9px]">
            <span className="mr-2 text-[13px] text-fawn">Right now I feel</span>
            {moods.map((mood) => (
              <Chip
                key={mood}
                label={mood}
                active={picked === mood}
                onClick={() =>
                  setPicked((prev) => (prev === mood ? null : mood))
                }
              />
            ))}
          </div>
          {picked && (
            <p
              key={picked}
              className="m-0 mt-4 animate-foglift font-serif text-[15px] italic text-bark motion-reduce:animate-none"
            >
              {moodReplies[picked]}
            </p>
          )}

          <div className="mt-10 grid gap-px border border-sand bg-sand sm:grid-cols-3">
            {doors.map((door) => (
              <Link
                key={door.href}
                href={door.href}
                className="bg-clay p-6 text-left no-underline transition-colors hover:bg-clay-deep"
              >
                <div className="font-serif text-base text-espresso">
                  {door.title}
                </div>
                <div className="mt-1.5 font-sans text-xs text-fawn">
                  {door.sub}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
