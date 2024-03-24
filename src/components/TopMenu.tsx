import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import AuthButton from "./AuthButton";

export default async function TopMenu() {

    return (
        <div className="h-12 bg-gray-50 absolute inset-x-0 top-0 z-30 border-t border-b border-gray-300 flex flex-row items-center">
            <Image src={'/Images/Logo.png'} className="h-auto w-auto" alt='logo' width={0} height={0} sizes="100vh" />
            <TopMenuItem title="Reservation" pageRef="/reservations" />
            <AuthButton />
        </div>
    )
}