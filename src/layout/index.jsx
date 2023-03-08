import React from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'

// import { Outlet } from "react-router-dom";

export default function MyApp({ children }) {
    return (
        <React.Fragment>
            <Navbar />

            <main className='flex min-h-full' >
                <Sidebar />
                <div className='w-full m-8'>

                {children}

                </div>
            </main>

        </React.Fragment>
    )
}
