"use server";

import { z } from "zod";
import { revalidatePath } from 'next/cache';
import {createConnection, executeQuery} from "@/utils/mysql";

const NewBookSchema = z.object({
    title: z.string().min(1, {message: "Ne peut être vide !"}),
    summary: z.string().min(1, {message: "Ne peut être vide !"}),
})

const insertBook = async (_prevState: unknown, formData: FormData) => {
    const data = {
        summary: formData.get("summary"),
        title: formData.get("title")
    }

    const validation = NewBookSchema.safeParse(data);

    if (!validation.success) {
        return {
            errors: validation.error.issues.reduce((errorMap, nextError) => {
                return { ...errorMap, [nextError.path[0]]: nextError.message }
            }, {})
        }
    }

    try {

        const connection = await createConnection()

        console.log(`Connection: ${connection}`);
        console.log(`Title: ${data.title}`);
        console.log(`Summary: ${data.summary}`);

        await executeQuery<Promise<void>, {title: string, summary: string}>(
            connection,
            "INSERT INTO books SET ?",
            { title: data.title!.toString(), summary: data.summary!.toString() }
        )

        connection.end()

        revalidatePath("/")

    } catch (e) {
        return {
            message: e instanceof Error ? e.message : "une erreur est survenue"
        }
    }
}

export default insertBook
