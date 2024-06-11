
import {NextRequest, NextResponse} from "next/server";
import {createConnection, executeQuery} from "@/utils/mysql";

export async function POST(nextRequest: NextRequest){
    console.log("BODY "+nextRequest.body)
    const body = await nextRequest.json()
    const connection = await createConnection()
    console.log("Reçu : "+body.textReview)
    connection.connect()
    const inserted = await executeQuery(connection,
        //"INSERT INTO reviews(text) VALUES (?)",
        "INSERT INTO Reviews SET ?",
        {text: body.textReview})
    connection.end()
    /*
    if (!books) {
        return NextResponse.error();
    }*/
    console.log(inserted)
    return NextResponse.json(inserted, {status: 200});
}
