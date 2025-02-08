import logo from '../../assets/images/logo1.png' // Adjust path based on `Header.tsx` location
import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Sheet, SheetTrigger, SheetContent } from '../../components/ui/sheet'

export const navLinks: {
    id: string
    label: string
    path: string
    image?: string
}[] = [
    {
        id: 'Prayers',
        label: 'Prayers',
        path: '/prayers',
    },
    {
        id: 'Journal',
        label: 'Journal',
        path: '/journal',
    },
    {
        id: 'Home',
        label: 'Home',
        path: '/',
        image: logo,
    },
    {
        id: 'Devotionals',
        label: 'Devotionals',
        path: '/devotionals',
    },
    {
        id: 'Profile',
        label: 'Profile',
        path: '/profile',
    },
]

const Header = () => {
    const [isOpen, setIsOpen] = useState(false) //toggle visibility for the hamburguer menu
    const leftLinks = navLinks.slice(0, 2) // First two links
    const rightLinks = navLinks.slice(3) // Last two links
    const logoLink = navLinks.find((link) => link.image) // Find logo
    const filteredLinks = navLinks.filter((link) => link.id !== 'Home') // Filter out the Home link from mobile menu

    return (
        <nav className="fixed -top-12 w-full flex bg-background1">
            {/* map a list of links + include logo(div < a< img) in the middle */}
            <ul className="hidden lg:flex justify-center items-center gap-24 w-full">
                {/* Left Links */}
                <div className="flex gap-6">
                    {leftLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={link.path}
                                className="font-title color-text1 tracking-widest text-xl hover:text-lilac">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </div>

                {/* Centered Logo */}
                <li>
                    <a href={logoLink?.path}>
                        <img
                            src={logoLink?.image}
                            alt="Home"
                            className="h-48 mix-blend-multiply object-contain"
                        />
                    </a>
                </li>

                {/* Right Links */}
                <div className="flex gap-6">
                    {rightLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={link.path}
                                className="font-title color-text1 tracking-widest text-xl hover:text-lilac">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </div>
            </ul>

            {/* Mobile Navigation (Sheet) */}
            <Sheet>
                <SheetTrigger asChild>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden absolute top-10 right-0 p-5 text-finn">
                        <Menu className="w-12 h-12" />
                    </button>
                </SheetTrigger>
                <SheetContent className="right-0 bg-background2 p-6">
                        <img
                            src={logo}
                            alt="Praying Moms Logo"
                            className="w-58 h-auto mx-auto mix-blend-multiply object-contain"
                        />
                    <ul className="flex flex-col gap-6 mt-10">
                        {filteredLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={link.path}
                                    className="font-title text-text1 tracking-widest text-xl hover:text-lilac font-medium">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </SheetContent>
            </Sheet>
        </nav>
    )
}

export default Header
