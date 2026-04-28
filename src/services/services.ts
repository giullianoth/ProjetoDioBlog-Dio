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
        return { posts: [], error };
    }
};

export const getPostById = async (id: string) => {
    try {
        const { data, error } = await supabase
            .from("posts")
            .select("*")
            .eq("id", id)
            .single();

        return { post: data as Post, error }
    } catch (error) {
        console.error("Error fetching post:", error);
        return { post: null, error };
    }
};