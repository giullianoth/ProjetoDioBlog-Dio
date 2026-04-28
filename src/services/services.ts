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

export const getAdjacentPosts = async (currentCreatedAt: string) => {
    try {
        const prevPromise = supabase
            .from("posts")
            .select("id, title")
            .lt("created_at", currentCreatedAt)
            .order("created_at", { ascending: false })
            .limit(1)
            .maybeSingle();

        const nextPromise = supabase
            .from("posts")
            .select("id, title")
            .gt("created_at", currentCreatedAt)
            .order("created_at", { ascending: true })
            .limit(1)
            .maybeSingle();

        const [prevResult, nextResult] = await Promise.all([prevPromise, nextPromise]);

        return {
            prevPost: prevResult.data as Partial<Post> || null,
            nextPost: nextResult.data as Partial<Post> || null,
        }
    } catch (error) {
        console.error("Error fetching posts id:", error);
        return {
            prevPost: null,
            nextPost: null,
        };
    }
}