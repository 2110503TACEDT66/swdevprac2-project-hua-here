import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";

export default async function Profile() {
    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)

    return (
        <main className="fixed left-0 top-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-lg p-8 w-[25em] text-black">
                <div className="text-2xl">{profile.data.name}</div>
                <table className="table-auto border-seperate border-spacing-2">
                    <tbody>
                        <tr><td>Email</td><td>{profile.data.email}</td></tr>
                        <tr><td>Tel.</td><td>{profile.data.tel}</td></tr>
                        <tr><td>Role</td><td>{profile.data.role}</td></tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}
