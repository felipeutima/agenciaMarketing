import { connect } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter, faGoogle, faInstagram,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'



function Footer() {
    return (

        <div>

            <footer className="bg-dark text-center text-white">

                <div className="container p-4">
                    <section className="mb-4">
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FontAwesomeIcon icon={faFacebook} /> {" "}</a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FontAwesomeIcon icon={faTwitter} /> {" "}</a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FontAwesomeIcon icon={faGoogle} /> {" "}</a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FontAwesomeIcon icon={faInstagram} /> {" "}</a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FontAwesomeIcon icon={faLinkedin} /> {" "}</a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FontAwesomeIcon icon={faGithub} /> {" "}</a>
                    </section>

                    <section className="">

                        <form action="">
                            <div className="row d-flex justify-content-center">
                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up htmlFor our newsletter</strong>
                                    </p>
                                </div>

                                <div className="col-md-5 col-12">
                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="form5Example21" className="form-control" />
                                        <label className="form-label" htmlFor="form5Example21">Email address</label>
                                    </div>
                                </div>

                                <div className="col-auto">
                                    <button type="submit" className="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>

                    <section className="mb-4">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                            repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                            eum harum corrupti dicta, aliquam sequi voluptate quas.
                        </p>
                    </section>

                    <section className="">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Links</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 4</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Links</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 4</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Links</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 4</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Links</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 4</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="text-center p-3" >
                    © 2020 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
            </footer>
        </div>
    )
}
const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {


})(Footer)