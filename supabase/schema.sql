-- Held — wall posts schema.
-- Run this in the Supabase SQL editor (or `supabase db push` if you use the CLI).

create table public.posts (
  id uuid primary key default gen_random_uuid(),
  content text not null check (char_length(content) between 1 and 1000),
  signature text check (char_length(signature) <= 60),
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  user_id uuid references auth.users (id) on delete set null,
  created_at timestamptz not null default now()
);

alter table public.posts enable row level security;

-- Anyone, signed in or not, can read approved notes.
create policy "public reads approved"
on public.posts for select
using (status = 'approved');

-- Signed-in users can leave a note. It is always theirs and always starts pending.
create policy "authenticated inserts own pending"
on public.posts for insert
to authenticated
with check (user_id = auth.uid() and status = 'pending');

-- Moderators can see everything, including pending notes.
create policy "admins read all"
on public.posts for select
to authenticated
using (auth.jwt() ->> 'email' in (''));

-- Moderators can approve or reject.
create policy "admins update status"
on public.posts for update
to authenticated
using (auth.jwt() ->> 'email' in (''))
with check (status in ('approved', 'rejected'));


-- Optional seed: the notes from the design prototype, pre-approved,
-- so the wall isn't empty on first run.

insert into public.posts (content, signature, status) values
  ('The version of you that shows up on day 26 with unwashed hair and no patience is still worthy of every good thing.', 'someone on day 3, feeling human again', 'approved'),
  ('I used to apologize for a week every month. I stopped. The people who love you can hold a hard week.', 'eleven years in', 'approved'),
  ('It came back, and I survived it again. That''s 140-something times now. You have a perfect record too.', 'counting since 2014', 'approved'),
  ('Cancel the thing. The thing will still exist next week. You are allowed to be a person with limits.', 'serial canceller, still loved', 'approved'),
  ('Rage-cleaning the kitchen at 1am is a valid coping mechanism and my counters have never looked better.', 'day 24, probably', 'approved'),
  ('You are not a before-and-after. The luteal you and the follicular you are the same good woman.', 'learning this slowly', 'approved'),
  ('My doctor believed me on the third try. Keep saying it. You''re not dramatic, you''re accurate.', 'finally diagnosed at 34', 'approved'),
  ('Some months the win is just: I didn''t believe everything my brain said about me.', 'a quiet win this week', 'approved'),
  ('Heat pack, dark room, one episode of something you''ve seen ten times. Ambition can wait until Thursday.', 'from my couch to yours', 'approved');
