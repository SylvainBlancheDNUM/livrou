'use client';

import {Book} from "@/types";
import {FC} from "react";

interface BookCardProps {
    book: Book
}

const BookCard: FC<BookCardProps> = ({ book }) => {

    return (

    <div className="max-w-3xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-8">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.summary}</p>
    </div>

);
}

export default BookCard



