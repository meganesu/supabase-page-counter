import { createClient } from '@supabase/supabase-js'

export default createClient(
  process.env.GATSBY_SUPABASE_URL,
  process.env.GATSBY_SUPABASE_ANON_KEY,
);
