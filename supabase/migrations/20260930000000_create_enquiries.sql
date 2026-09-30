-- Enquiries submitted from the /contact form.
create table if not exists public.enquiries (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null check (char_length(name) between 1 and 200),
  company     text check (char_length(company) <= 200),
  email       text not null check (char_length(email) <= 320),
  budget      text check (char_length(budget) <= 120),
  message     text check (char_length(message) <= 5000),
  status      text not null default 'new' check (status in ('new', 'replied', 'archived'))
);

create index if not exists enquiries_created_at_idx on public.enquiries (created_at desc);

alter table public.enquiries enable row level security;

-- The site may insert (when using the anon key) but never read back.
-- Reading is done from the Supabase dashboard or with the service-role key.
drop policy if exists "Anyone can submit an enquiry" on public.enquiries;
create policy "Anyone can submit an enquiry"
  on public.enquiries
  for insert
  to anon
  with check (status = 'new');
