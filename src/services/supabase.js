import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://njwekpgsgsvuppiqgwbt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qd2VrcGdzZ3N2dXBwaXFnd2J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY4MjQ1NDksImV4cCI6MjA0MjQwMDU0OX0.aCCCqprl4l3n9YhnJ3NLahCOsbynr_-GeM3fKxOYTts";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
