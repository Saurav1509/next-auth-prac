
"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export default function Appbar() {
    const session = useSession()
    return <div>
        <button onClick={() => {
            signIn()
        }
        }>Sign In</button>
        <button onClick={() => {
            signOut()
        }
        }>Log Out</button>

        {JSON.stringify(session)}
    </div>
}