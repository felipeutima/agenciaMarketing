import { connect } from "react-redux"

function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-white active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Link</a>
                        </li>
                        <li className="nav-item  dropdown">
                            <a className="nav-link text-white dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu ">
                                <li><a className="dropdown-item text-white" href="#">Action</a></li>
                                <li><a className="dropdown-item text-white" href="#">Another action</a></li>
                                <li><a className="dropdown-item text-white" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link disabled text-white">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    )
}
const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(Navbar)