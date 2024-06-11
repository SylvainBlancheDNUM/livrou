'use client';

import {z} from "zod";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {bgGreen} from "next/dist/lib/picocolors";

const ReviewFormSchema = z.object({
    //userId: z.number().min(-1,("L'utilisateur n'est pas défini")), //.max(Number.MAX_VALUE, ("L'utilisateur n'est pas défini")),
    //bookId: z.number().min(-1,("Le livre n'est pas défini")), //.max(Number.MAX_VALUE, ("L'utilisateur n'est pas défini")),
    textReview: z.string().min(1, {message: "Ne peut être vide"})
})

const FormReview = () => {

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<z.infer<typeof ReviewFormSchema>>({
        resolver: zodResolver(ReviewFormSchema),
    });

    const onSubmit: SubmitHandler<z.infer<typeof ReviewFormSchema>> = async (
        values
    ) => {
        console.log("on submit")
        const req = await fetch("/api/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        });

        const data = await req.json();
        console.log(data)
    };

    return (
        <div className="mx-auto w-[400px]">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex w-full flex-col">
                    <label>Review</label>
                    <textarea className={"bg-amber-700"} {...register("textReview")}></textarea>
                    {errors.textReview && (
                        <span className="text-red-500">{errors.textReview.message}</span>
                    )}
                    <button type="submit">Publier</button>
                </div>
            </form>
        </div>
    );
};
    /*
    const onSubmit: SubmitHandler<z.infer<typeof ReviewFormSchema>> = async (data) => {
        console.log("A")
        console.log(JSON.stringify(data))
    }

    return (
        <div className="mx-auto w-[400px]">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-full flex-col">
            <label>Review</label>
            <textarea className="bg-amber-700" {...register("textReview")}></textarea>
            {errors.textReview && (
                <span className="text-red-500">{errors.textReview.message}</span>
            )}
            <button type="submit">Publier</button>
        </div>
        </form>
        </div>
    );
*/


export default FormReview;
