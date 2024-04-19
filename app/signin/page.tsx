"use client"

import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation';

export default function Signin() {
    const router = useRouter();
    return <div>
        <button onClick={() => {
            signIn("google")
        }} >Login with Google</button>
        <button onClick={async () => {
            await signIn("github")
        }} >Login with Github</button>
        <input type="text" placeholder="Email"></input>
        <input type="password" placeholder="Password"></input>
        <button onClick={async () => {
            const res = await signIn("credentials", {
                username: "saurav.sayana@email.com",
                password: "damnson!",
                redirect: false,
            })
            console.log(res)
            router.push("/")

        }}>Login with Email</button>
    </div>
}