const Header = () => {
// Use state to track whether the Welcome page is still visible. render Header only after transition to home screen.
    return (
        <nav className="fixed hidden lg:flex justify-between items-center p-4">
            <h1>Praying Moms</h1>
            <div>
                {/* map a list of links + include logo(div < a< img) in the middle */}
            </div>
            {/* render hanburguer menu */}
        </nav>
    )
}

export default Header
