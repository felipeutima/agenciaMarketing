import logo192 from "assets/img/logo192.png"
import { connect } from "react-redux"
import Button from "react-bootstrap/esm/Button"
import {useState} from 'react'
import  PuffLoader  from "react-spinners/PuffLoader"

function Navbar() {
    const [loading,setLoading] = useState(true)
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" >
                    <img src={logo192.png} width={50} height={44} className="d-inline-block " />

                </a>
                <a className="navbar-brand text-white" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-white active" aria-current="page" href="#/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/About">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/Careers">Careers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/Cases">Cases</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/Contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/Services">Services</a>
                        </li>

                    </ul>
                    <Button className="btn btn-secondary mx-2">
                        <div className="row px-2 ">Hire us   <PuffLoader loading={loading} size={25}  /> </div>
                        
                    
                    </Button>

                </div>
            </div>
        </nav>

    )
}
const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(Navbar)