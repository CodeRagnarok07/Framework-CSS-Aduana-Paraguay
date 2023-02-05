import React from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'

import { Outlet } from "react-router-dom";

export default function MyApp({ children }) {
    return (
        <React.Fragment>
            <Navbar />

            <main className='flex h-full' >
                <Sidebar />
                <div className='w-full'>

                {/* {children} */}

                <Outlet/>
                </div>
            </main>

        </React.Fragment>
    )
}
