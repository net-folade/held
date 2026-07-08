"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

type Status = "idle" | "sending" | "awaiting" | "error";

export default function Composer({ signedIn }: { signedIn: boolean }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const [signature, setSignature] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function submit() {
    if (!content.trim()) return;
    setStatus("sending");
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      setStatus("error");
      return;
    }
    const { error } = await supabase.from("posts").insert({
      content: content.trim(),
      signature: signature.trim() || null,
      user_id: user.id,
    });
    if (error) {
      setStatus("error");
    } else {
      setContent("");
      setSignature("");
      setStatus("awaiting");
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="cursor-pointer rounded-lg bg-ember px-6 py-3 text-[13px] font-semibold text-paper transition-colors hover:bg-ember-deep"
      >
        {open ? "Maybe later" : "Leave a note"}
      </button>

      {open && (
        <div className="order-last w-full animate-fadeup-fast border border-ember bg-paper p-[22px]">
          {status === "awaiting" ? (
            <p className="m-0 font-serif text-[15px] italic leading-[1.6] text-bark">
              Thank you. Your note is awaiting review — a person reads
              everything before it joins the wall, usually within a day.
            </p>
          ) : !signedIn ? (
            <p className="m-0 text-[13.5px] leading-[1.65] text-bark">
              Notes are anonymous on the wall, but leaving one takes a signed-in
              moment — it keeps the wall kind.{" "}
              <Link
                href="/begin?next=/wall"
                className="font-medium text-ember underline underline-offset-[3px]"
              >
                Get a magic link
              </Link>{" "}
              and come right back.
            </p>
          ) : (
            <>
              <div className="mb-3 font-serif text-base text-espresso">
                What would you tell a woman having your worst day?
              </div>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write it the way you'd want to read it…"
                className="box-border min-h-[80px] w-full resize-y rounded-md border border-sand-deep bg-clay p-3.5 font-serif text-[15px] leading-[1.6] text-espresso placeholder:text-fawn"
              />
              <input
                type="text"
                value={signature}
                onChange={(e) => setSignature(e.target.value)}
                maxLength={60}
                placeholder="Sign it however you like — or leave it blank"
                className="mt-2.5 box-border w-full rounded-md border border-sand-deep bg-clay px-3.5 py-2.5 font-sans text-xs text-bark placeholder:text-fawn focus:border-ember focus:outline-none"
              />
              {status === "error" && (
                <p className="m-0 mt-3 text-[12.5px] text-ember">
                  That didn&rsquo;t save. Give it a moment and try again — your
                  words are still in the box.
                </p>
              )}
              <div className="mt-3 flex items-center justify-between">
                <span className="text-[11.5px] text-fawn">
                  Posted anonymously. Always. Held for a human read first.
                </span>
                <button
                  type="button"
                  onClick={submit}
                  disabled={status === "sending"}
                  className="cursor-pointer rounded-lg bg-espresso px-5 py-2.5 text-[12.5px] font-semibold text-paper disabled:opacity-60"
                >
                  {status === "sending" ? "Leaving it…" : "Leave it on the wall"}
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
