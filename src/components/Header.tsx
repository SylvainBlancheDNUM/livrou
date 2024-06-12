import Image from "next/image";

export default function Header() {
    return <header className={"w-full flex justify-center h-17 m-6"}>
        <Image src={"/logo.png"} alt={"Livrou"} width={"90"} height={"90"} />
    </header>
}
