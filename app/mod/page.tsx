import Link from "next/link";
import AppHeader from "@/components/AppHeader";
import { createClient } from "@/lib/supabase/server";
import { isAdminEmail } from "@/lib/admin";
import { approvePost, rejectPost } from "./actions";

type PendingPost = {
  id: string;
  content: string;
  signature: string | null;
  created_at: string;
};

export default async function ModPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!isAdminEmail(user?.email)) {
    return (
      <div className="flex flex-1 flex-col">
        <AppHeader />
        <main className="flex flex-1 animate-fadeup items-center justify-center px-6">
          <div className="max-w-[440px] text-center">
            <h2 className="m-0 mb-3 font-serif text-2xl font-light text-espresso">
              This page is for moderators
            </h2>
            <p className="m-0 text-[13.5px] leading-[1.65] text-bark">
              {user
                ? "This account isn't on the moderator list."
                : "Sign in with a moderator email to review notes."}{" "}
              <Link
                href={user ? "/wall" : "/begin?next=/mod"}
                className="text-ember underline underline-offset-[3px]"
              >
                {user ? "Back to the wall" : "Sign in"}
              </Link>
            </p>
          </div>
        </main>
      </div>
    );
  }

  const { data, error } = await supabase
    .from("posts")
    .select("id, content, signature, created_at")
    .eq("status", "pending")
    .order("created_at", { ascending: true });

  const pending: PendingPost[] = data ?? [];

  return (
    <div className="flex flex-1 flex-col">
      <AppHeader />
      <main className="flex-1 animate-fadeup px-6 pb-[60px] pt-[52px] sm:px-11">
        <div className="mx-auto max-w-[720px]">
          <h2 className="m-0 mb-2.5 font-serif text-[32px] font-light leading-[1.1] text-espresso">
            Moderation
          </h2>
          <p className="m-0 mb-9 text-[13.5px] text-bark">
            {pending.length === 0
              ? "Nothing waiting. The wall is up to date."
              : `${pending.length} note${pending.length === 1 ? "" : "s"} waiting for a read.`}
          </p>

          {error && (
            <p className="m-0 text-[13.5px] text-ember">
              Couldn&rsquo;t load pending notes: {error.message}
            </p>
          )}

          {pending.map((post) => (
            <div
              key={post.id}
              className="mb-4 border border-sand bg-paper p-[22px]"
            >
              <p className="m-0 font-serif text-[15.5px] leading-[1.55] text-espresso">
                {post.content}
              </p>
              <div className="mt-2 text-[11px] text-fawn">
                {post.signature ? `— ${post.signature} · ` : ""}
                {new Date(post.created_at).toLocaleString("en-CA", {
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </div>
              <div className="mt-4 flex gap-2.5">
                <form action={approvePost.bind(null, post.id)}>
                  <button
                    type="submit"
                    className="cursor-pointer rounded-lg bg-sage px-5 py-2 text-[12.5px] font-semibold text-paper transition-opacity hover:opacity-85"
                  >
                    Approve
                  </button>
                </form>
                <form action={rejectPost.bind(null, post.id)}>
                  <button
                    type="submit"
                    className="cursor-pointer rounded-lg border border-sand-deep bg-transparent px-5 py-2 text-[12.5px] font-medium text-bark transition-colors hover:border-ember hover:text-ember"
                  >
                    Reject
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
