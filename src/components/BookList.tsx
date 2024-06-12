'use client';

import {Book} from "@/types";
import {FC} from "react";
import BookCard from "@/components/BookCard";

type BookListProps = {
    books : Book[]
}

const BookList: FC<BookListProps> = ({ books }) => {
    return (
        <div className="flex flex-col justify-center">
            {books.map((b) => {
                return <BookCard key={b.id} book={b} />;
            })}
        </div>
    );
};

export default BookList;
