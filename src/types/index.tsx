import {number} from "prop-types";

export type User = {
    id: number,
    login: string,
    name: string,
    password: string,
    bio?: string
}

export type Book = {
    id: number,
    title: string,
    summary: string
}

export type Review = {
    id: number,
    text: string
}


