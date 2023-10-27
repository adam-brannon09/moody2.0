function Footer() {
    return (
        <footer className="footer items-center p-4 bg-stone-500 text-neutral-content">
            <aside className="items-center grid-flow-col">
                <a className="btn btn-ghost normal-case text-base-200 text-4xl logo">moody</a>
                {/* moody logo */}
                <p>Copyright © 2023 - All right reserved</p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                {/* Github Icon */}
            </nav>
        </footer>
    )
}
export default Footer