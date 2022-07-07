import React from 'react'
import { Navbar } from './navbar/Navbar'
import { Sidebar } from './sidebar/Sidebar'
import './Layout.scss'

export const Layout = ({ children }) => {
    return (
        <div className='layout'>
                <Sidebar />
            <div className='layoutbody'>
            <Navbar />
                {children}
            </div>
        </div>
    )
}
