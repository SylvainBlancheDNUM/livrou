
import {Book} from '../types/index';

import BookList from "@/components/BookList";

const fetchBooks = async (): Promise<Book[]> => {

    console.log(`${process.env.NEXT_PUBLIC_API_BASE}api/books`);

    const books = await fetch(`${process.env.API_BASE}api/books`, {
        headers: {
            "Content-Type": "application/json"
        },
    });

    return await books.json();
};

const Home = async () => {
    try {
        const data = await fetchBooks();
        console.log(data)
        return <BookList books={data}/>;
    } catch (e) {
        console.log(e)
    }
};

export default Home;

