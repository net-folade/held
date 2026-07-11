"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Chip from "@/components/Chip";
import Ember from "@/components/Ember";
import { createClient } from "@/lib/supabase/client";

const moods = [
  "tender",
  "foggy",
  "angry at nothing",
  "heavy",
  "anxious",
  "alright, actually",
];

const phases = [
  "Just started my period",
  "Somewhere in the middle",
  "The week or two before",
  "Honestly, no idea",
];

function BeginFlow() {
  const searchParams = useSearchParams();
  const next = searchParams.get("next") ?? "/today";
  const linkError = searchParams.get("error") === "link";

  const [step, setStep] = useState(1);
  const [pickedMoods, setPickedMoods] = useState<string[]>([]);
  const [pickedPhase, setPickedPhase] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleMood = (mood: string) =>
    setPickedMoods((prev) =>
      prev.includes(mood) ? prev.filter((m) => m !== mood) : [...prev, mood],
    );

  async function sendLink(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSending(true);
    setError(null);
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}`,
      },
    });
    setSending(false);
    if (error) {
      setError("That didn't go through. Check the address and try once more.");
    } else {
      setSent(true);
    }
  }

  return (
    <div className="flex flex-1 animate-fadeup flex-col">
      <header className="flex items-center justify-between px-6 py-5 sm:px-11">
        <Link
          href="/"
          className="font-serif text-base font-medium text-espresso no-underline"
        >
          Held
        </Link>
        <Link
          href="/today"
          className="text-[12.5px] text-bark no-underline hover:text-ember"
        >
          Skip for now
        </Link>
      </header>

      <div className="relative flex flex-1 items-center justify-center overflow-hidden px-6 py-10 sm:px-11">
        <Ember className="-left-[120px] -top-[140px] h-[440px] w-[440px]" />

        {step === 1 && (
          <div className="relative w-full max-w-[560px]">
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-[.14em] text-ember">
              First — no wrong answers
            </div>
            <h2 className="m-0 mb-7 font-serif text-3xl font-light leading-[1.15] text-espresso sm:text-[38px]">
              How are you arriving today?
            </h2>
            <div className="mb-9 flex flex-wrap gap-2.5">
              {moods.map((mood) => (
                <Chip
                  key={mood}
                  label={mood}
                  active={pickedMoods.includes(mood)}
                  onClick={() => toggleMood(mood)}
                />
              ))}
            </div>
            <div className="flex items-center gap-4">
              <button
                type="button"
                disabled={pickedMoods.length === 0}
                onClick={() => setStep(2)}
                className="cursor-pointer rounded-lg bg-ember px-[26px] py-[13px] text-[13.5px] font-semibold text-paper transition-colors hover:bg-ember-deep disabled:opacity-60"
              >
                Continue
              </button>
              <span className="text-xs text-fawn">
                Pick at least one — more than one is fine.
              </span>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="relative w-full max-w-[560px]">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="mb-5 block cursor-pointer text-[12.5px] text-fawn transition-colors hover:text-ember"
            >
              ← Back
            </button>
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-[.14em] text-ember">
              Entirely optional
            </div>
            <h2 className="m-0 mb-3.5 font-serif text-3xl font-light leading-[1.15] text-espresso sm:text-[38px]">
              Where are you in your month right now?
            </h2>
            <p className="m-0 mb-7 max-w-[440px] text-[13.5px] leading-[1.65] text-bark">
              Naming where you are can help, it&rsquo;s never
              tracked or shared.
            </p>
            <div className="mb-9 flex flex-wrap gap-2.5">
              {phases.map((phase) => (
                <Chip
                  key={phase}
                  label={phase}
                  active={pickedPhase === phase}
                  onClick={() => setPickedPhase(phase)}
                />
              ))}
            </div>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setStep(3)}
                className="cursor-pointer rounded-lg bg-ember px-[26px] py-[13px] text-[13.5px] font-semibold text-paper transition-colors hover:bg-ember-deep"
              >
                That&rsquo;s enough for today
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="cursor-pointer text-[12.5px] text-fawn underline underline-offset-[3px] hover:text-ember"
              >
                Rather not say
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="relative w-full max-w-[560px]">
            {!sent && (
              <button
                type="button"
                onClick={() => setStep(2)}
                className="mb-5 block cursor-pointer text-[12.5px] text-fawn transition-colors hover:text-ember"
              >
                ← Back
              </button>
            )}
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-[.14em] text-ember">
              Last thing — no password, ever
            </div>
            <h2 className="m-0 mb-3.5 font-serif text-3xl font-light leading-[1.15] text-espresso sm:text-[38px]">
              Where should we send your way in?
            </h2>
            <p className="m-0 mb-7 max-w-[440px] text-[13.5px] leading-[1.65] text-bark">
              We&rsquo;ll email you a link. Clicking it signs you in — that&rsquo;s
              the whole thing. Your email is never shown anywhere.
            </p>

            {sent ? (
              <p className="m-0 max-w-[440px] animate-fadeup-fast font-serif text-[15px] italic leading-[1.65] text-bark">
                The link is on its way to {email.trim()}. You can close this
                page — it will be waiting in your inbox.
              </p>
            ) : (
              <form onSubmit={sendLink} className="max-w-[440px]">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="mb-4 w-full rounded-md border border-sand-deep bg-paper px-4 py-3.5 font-sans text-sm text-espresso placeholder:text-fawn focus:border-ember focus:outline-none"
                />
                {(error || linkError) && (
                  <p className="m-0 mb-4 text-[12.5px] text-ember">
                    {error ??
                      "That link had expired or already been used. Enter your email and we’ll send a fresh one."}
                  </p>
                )}
                <div className="flex items-center gap-4">
                  <button
                    type="submit"
                    disabled={sending}
                    className="cursor-pointer rounded-lg bg-ember px-[26px] py-[13px] text-[13.5px] font-semibold text-paper transition-colors hover:bg-ember-deep disabled:opacity-60"
                  >
                    {sending ? "Sending…" : "Send my link"}
                  </button>
                  <Link
                    href="/today"
                    className="text-[12.5px] text-fawn underline underline-offset-[3px] hover:text-ember"
                  >
                    Just let me look around
                  </Link>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function BeginPage() {
  return (
    <Suspense>
      <BeginFlow />
    </Suspense>
  );
}
