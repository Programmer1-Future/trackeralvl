import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://ibxjlfydrzaxdmyehdxb.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlieGpsZnlkcnpheGRteWVoZHhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY4NjMzNDYsImV4cCI6MjA5MjQzOTM0Nn0.FNruD2iokLs3Wm-Y1etn-8GV1W5npW9jplso8QP9xKw";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
