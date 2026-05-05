'use client'
import Link from 'next/link'

export default function Navbar() {
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                BUSINESS
                <span>UNCOVERED</span>
            </div>
            <ul className="navbar-links">
                <li><Link href="#about">About</Link></li>
                <li><Link href="#blog">Blog</Link></li>
                <li><Link href="#chronicles">Business Chronicles</Link></li>
                <li><Link href="#future">The Future</Link></li>
            </ul>
        </nav>
    )
}
