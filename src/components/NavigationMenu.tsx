'use client';

import Link from "next/link";
import {AlignJustify, PlusCircle} from "lucide-react";
import { useSession } from "next-auth/react";
import {signOutUser} from "@/actions/signOutUser";

function getSignButton(connected: boolean) {
    if (connected) {
        return <Link className="hover:text-gray-200" href={"/logout"} onClick={()=> { logout().then(()=> document.location.href="/") }}> Se déconnecter </Link>
    } else {
        return <Link className="hover:text-gray-200" href={"/login"}>Se connecter</Link>
    }
}

const logout = async() => {
    await signOutUser();
    //document.location.href = "/"
}

/*
export default function NavigationMenu1() {

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

 */

export default function NavigationMenu() {

    const session = useSession()

    return <div>
    <div className="flex flex-wrap place-items-center">
        <section className="relative mx-auto">
            <nav className="flex justify-between bg-gray-900 text-white w-screen">
                <div className="px-5 xl:px-12 py-6 flex w-full items-center">
                    <a className="text-3xl font-bold font-heading" href="#">
                        Logo Here.
                    </a>
                    <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                        <li>
                            <Link href={"/"}>
                                <AlignJustify width={"40px"} />
                                Liste des livres
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-gray-200" href={"/addBook"}>
                                <PlusCircle width={"40px"} />
                                Ajouter un livre
                            </Link>
                        </li>
                        <li><Link className="hover:text-gray-200" href={"/addReview"}> Déposer une critique </Link></li>
                        <li>{getSignButton(session?.status==="authenticated")}</li>
                    </ul>
                </div>
            </nav>

        </section>
    </div>
    </div>
}
