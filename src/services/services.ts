import { Post } from "@/types/post";
import { supabase } from "./api";

export const getPosts = async () => {
    try {
        const { data, error } = await supabase
            .from("posts")
            .select("*");

        return { posts: data as Post[], error };
    } catch (error) {
        console.error("Error fetching posts:", error);
        return { posts: null, error };
    }
};