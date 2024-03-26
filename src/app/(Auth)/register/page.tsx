import { redirect } from "next/navigation";

export default async function RegisterPage() {
    const RegisterUser = async (addRegisterForm: FormData) => {
        'use server'
        const name = addRegisterForm.get('name');
        const email = addRegisterForm.get('email');
        const tel = addRegisterForm.get('tel');
        const password = addRegisterForm.get('password');

        try {
            const response = await fetch('http://localhost:5000/api/v1/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    tel: tel,
                    password: password
                })
            });

            if (!response.ok) throw new Error("Registration failed");
            console.log("Register Success");
        } catch (err) {
            console.log(err);
        }
        redirect('./')
    }

    return (
        <form action={RegisterUser}>
            <div className="text-xl text-blue-700">Register</div>
            <div className="flex items-center w-1/2 my-2">
                <label className="w-auto block text-gray-700 pr-4" htmlFor="name">Name</label>
                <input type="text" required id='name' name="name" placeholder="Enter your name"
                className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400" />
            </div>
            <div className="flex items-center w-1/2 my-2">
                <label className="w-auto block text-gray-700 pr-4" htmlFor="tel">Telephone</label>
                <input type="text" required id='tel' name="tel" placeholder="Enter your telephone number" min={8} max={10}
                className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400" />
            </div>
            <div className="flex items-center w-1/2 my-2">
                <label className="w-auto block text-gray-700 pr-4" htmlFor="email">Email</label>
                <input type="text" required id='email' name="email" placeholder="Enter your email"
                className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400" />
            </div>
            <div className="flex items-center w-1/2 my-2">
                <label className="w-auto block text-gray-700 pr-4" htmlFor="password">Password</label>
                <input type="password" required id='password' name="password" placeholder="Enter your password" min={6}
                className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400" />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">Register</button>
        </form>
    )
}