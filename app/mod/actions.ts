"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { isAdminEmail } from "@/lib/admin";

async function setStatus(postId: string, status: "approved" | "rejected") {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!isAdminEmail(user?.email)) {
    throw new Error("Not authorized");
  }

  const { error } = await supabase
    .from("posts")
    .update({ status })
    .eq("id", postId);

  if (error) throw new Error(error.message);

  revalidatePath("/mod");
  revalidatePath("/wall");
}

export async function approvePost(postId: string) {
  await setStatus(postId, "approved");
}

export async function rejectPost(postId: string) {
  await setStatus(postId, "rejected");
}
