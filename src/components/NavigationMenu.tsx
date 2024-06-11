'use client';

import Link from "next/link";
import {AlignJustify, PlusCircle} from "lucide-react";
import { useSession } from "next-auth/react";
import {signOutUser} from "@/actions/signOutUser";

function getSignButton(connected: boolean) {
    if (connected) {
        return <Link href={"/logout"} onClick={()=> { logout().then(()=> document.location.href="/") }}> Se déconnecter </Link>
    } else {
        return <Link href={"/login"}>Se connecter</Link>
    }
}

const logout = async() => {
    await signOutUser();
    //document.location.href = "/"
}

export default function NavigationMenu() {

    const session = useSession()

    return <nav className={"bg-white border-gray-200 dark:bg-gray-900 flex justify-between"}>
        <li>
            <AlignJustify width={"40px"} />
            <Link href={"/"}>Liste des livres</Link>
        </li>
        <li>
            <PlusCircle width={"40px"} />
            <Link href={"/addBook"}>Ajouter un livre</Link>
        </li>
        <Link href={"/addReview"}> Déposer une critique </Link>
        {getSignButton(session?.status==="authenticated")}
    </nav>
}
