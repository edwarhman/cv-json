import { supabase, supabaseBucketURL } from "@/core/lib/supabase";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    console.log({ file });
    const imageId = crypto.randomUUID();

    const { data, error } = await supabase.storage
        .from("cv-editor")
        .upload(`images/${imageId}.png`, file, {
            cacheControl: "3600",
        });


    console.log({ data, error });
    if (error) {
        return new Response("error", { status: 500 });
    }
    return new Response(JSON.stringify({
        publicURL: supabaseBucketURL + data.fullPath
    }));

}