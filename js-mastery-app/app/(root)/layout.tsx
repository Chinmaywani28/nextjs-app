const Layout = ({children} : {children : React.ReactNode}) => {
    return (
        <div>
            <h1>Welcome to next js</h1>
            <h1 className="text-3xl">Navbar</h1>
            {children}
        </div>
    )
}

export default Layout