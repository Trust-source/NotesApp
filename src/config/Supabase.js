import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://dvykuefarihhzlaogpbs.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2eWt1ZWZhcmloaHpsYW9ncGJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxMTUyODQsImV4cCI6MjA1OTY5MTI4NH0._h6N3WvQPNEocdixyuoZNhNVDJHvCuhVvGH_IxrcIgc';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;