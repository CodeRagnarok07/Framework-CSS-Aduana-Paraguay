import React from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'

import { Outlet } from "react-router-dom";

export default function MyApp({ children }) {
    return (
        <React.Fragment>
            <Navbar />

            <main className='flex h-100' >
                <Sidebar />
                <div className='w-100'>

                {/* {children} */}

                <Outlet/>
                </div>
            </main>

        </React.Fragment>
    )
}
