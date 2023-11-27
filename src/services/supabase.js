import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://yewjzbjhssbstpkdyral.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlld2p6Ympoc3Nic3Rwa2R5cmFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgyOTIwMTMsImV4cCI6MjAxMzg2ODAxM30.nb7B9cHCmuU2KXZ0pkctMsif5BwAfXs8pyhYU-z1CHE";

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
