'use client';

import {Book} from "@/types";
import {FC} from "react";

interface BookCardProps {
    book: Book
}

const BookCard: FC<BookCardProps> = ({ book }) => {

    return (
        <div>
            <h4>{book.title}</h4>
            <p>{book.summary}</p>
        </div>
    );
}

export default BookCard



