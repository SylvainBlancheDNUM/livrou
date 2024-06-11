import Image from "next/image";

export default function Header() {
    return <header className={"w-full flex justify-center h-12"}>
        <Image src={"/logo.png"} alt={"Livrou"} width={"50"} height={"40"} />
        Livrou
    </header>
}
