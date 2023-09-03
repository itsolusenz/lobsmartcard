// import SidenavExample from "./sidebar";



export default function Header() {
    return (
        <div className="header-container container-lg">
            <div className="header-sub-container py-5">
                <div className="nav-bar1 d-flex justify-content-between px-1">
                    <a href="/" style={{ textDecoration: 'none', color: '#e5316d' }} className="logo-img">
                        <h3 >LobSmartCard</h3>
                        {/*} <img src="https://bostami-nextjs.netlify.app/_ipx/w_256,q_75/%2Fimages%2Flogo%2Flogo.png?url=%2Fimages%2Flogo%2Flogo.png&w=256&q=75"/>*/}
                    </a>
                    <i className="bi bi-list menu"></i>
                    {/* <SidenavExample/> */}
                    <div className="lang-bright-container">

                    </div>
                </div>
                <div className="nav-bar2 d-none">
                    <nav aria-label="breadcrumb" className="main-breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item"><a href="#user">User</a></li>
                            <li className="breadcrumb-item active" aria-current="page">User Profile</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    )
}