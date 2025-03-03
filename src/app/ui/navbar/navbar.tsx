export default function Navbar() {
    return (
        <nav className="flex items-center justify-between h-16 bg-white text-black shadow-sm">
            <div className="flex items-center">
                <a href="/" className="text-lg font-semibold">Home</a>
            </div>
            <div className="flex items-center">
                <a href="/about" className="text-lg font-semibold">About</a>
            </div>
            <div className="flex items-center">
                <a href="/contact" className="text-lg font-semibold">Contact</a>
            </div>
        </nav>
    )
}