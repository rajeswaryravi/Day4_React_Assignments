function WebHeader() {
    return (
        <div style={{border:"2px solid grey", height:"50px"}}>
            <nav style={{ display: "flex", justifyContent:"space-between", marginTop:"10px"}}>
                <a>Home</a>
                <a>Portfolio</a>
                <a>Blog</a>
                <a>Contract</a>
                <input type="search" placeholder="Search"></input>
            </nav>

        </div>
    )
}

export default WebHeader;