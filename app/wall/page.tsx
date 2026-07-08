import AppHeader from "@/components/AppHeader";
import Composer from "./Composer";
import { createClient } from "@/lib/supabase/server";

export type WallPost = {
  id: string;
  content: string;
  signature: string | null;
};

export default async function WallPage() {
  const supabase = await createClient();

  const [{ data: userData }, { data: posts, error }] = await Promise.all([
    supabase.auth.getUser(),
    supabase
      .from("posts")
      .select("id, content, signature")
      .eq("status", "approved")
      .order("created_at", { ascending: false }),
  ]);

  const signedIn = Boolean(userData?.user);
  const notes: WallPost[] = posts ?? [];

  return (
    <div className="flex flex-1 flex-col">
      <AppHeader />
      <main className="flex-1 animate-fadeup px-6 pb-[60px] pt-[52px] sm:px-11">
        <div className="mx-auto max-w-[960px]">
          <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="m-0 mb-2.5 font-serif text-[32px] font-light leading-[1.1] text-espresso sm:text-[40px]">
                The wall
              </h2>
              <p className="m-0 max-w-[420px] text-[13.5px] leading-[1.6] text-bark">
                Anonymous notes from women who have stood where you&rsquo;re
                standing. Take what you need.
              </p>
            </div>
            <Composer signedIn={signedIn} />
          </div>

          {error ? (
            <p className="m-0 max-w-[440px] font-serif text-[15px] italic text-bark">
              The wall isn&rsquo;t reachable right now. It will be here when
              you come back.
            </p>
          ) : notes.length === 0 ? (
            <p className="m-0 max-w-[440px] font-serif text-[15px] italic text-bark">
              The wall is quiet today. Someone has to leave the first note —
              maybe it&rsquo;s you.
            </p>
          ) : (
            <div className="gap-4 sm:columns-2 lg:columns-3">
              {notes.map((note) => (
                <div
                  key={note.id}
                  className="mb-4 break-inside-avoid border border-sand bg-paper px-[22px] pb-[18px] pt-[22px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(50,33,26,.08)]"
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
          )}
        </div>
      </main>
    </div>
  );
}
