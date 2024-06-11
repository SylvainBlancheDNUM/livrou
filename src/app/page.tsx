
import {Book} from '../types/index';

import BookList from "@/components/BookList";

/*
const getBooks = async(): Promise<BookResponse> => {
    const response = await fetch('http://localhost:3000/api/books', {headers: {"Content-Type": "application/json"}});
    return await response.json();
}*/


const fetchBooks = async (): Promise<Book[]> => {
    const t = new Date().getTime();
    const books = await fetch(`${process.env.API_BASE}api/books?t=`+t, {
        headers: {
            "Content-Type": "application/json",
            "Cache": "no-cache"
        },
    });

    return await books.json();
};

const Home = async () => {
    const data = await fetchBooks();
    console.log(data)
    return <BookList books={data} />;
};

export default Home;

/*
export default async function Home() {

    const response = await fetchBooks();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            Liste des livres
            <BookList books={response.books}/>
        </main>
    );
}*/
