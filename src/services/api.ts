import { createClient } from "@supabase/supabase-js";
import axios from "axios";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const api = axios.create({
    baseURL: supabaseUrl,
    headers: {
        "apikey": supabaseKey,
        "Authorization": `Bearer ${supabaseKey}`
    }
});

export const supabase = createClient(supabaseUrl!, supabaseKey!);