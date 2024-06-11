import {NextRequest, NextResponse} from "next/server";
import {Book} from "@/types";
import {createConnection, executeQuery} from "@/utils/mysql";

/*
export async function GET(
    req: NextRequest
){
    console.log(req.nextUrl.searchParams)
    //console.log(params.bookId)

    const book = books.find((book) => book.id === Number.parseInt(req.nextUrl.searchParams.get("bookId")!));
    if (!book) {
        return NextResponse.error();
    }
    return NextResponse.json(book, {status: 200});
}
*/

/*
export async function GET(){
    if (!books || books.length==0) {
        return NextResponse.error();
    }
    return NextResponse.json(books, {status: 200});
}*/

export async function GET(){
    const connection = await createConnection();
    connection.connect()
    const books = await executeQuery(connection, "SELECT * FROM books", undefined)
    connection.end()
    /*
    if (!books) {
        return NextResponse.error();
    }*/
    return NextResponse.json(books, {status: 200});
}
