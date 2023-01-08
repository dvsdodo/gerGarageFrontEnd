import React from "react";
import"./Footer.css";

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>GER'S GARAGE</h4>
                        <ul className="list-unstyled">
                            <li>Since</li>
                            <li>1988</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>About US</h4>
                        <ul className="list-unstyled">
                            <li>333-555-5415</li>
                            <li>gersgarage@gmail.com</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>ADRESS</h4>
                        <ul className="list-unstyled">
                            <li>Dublin, Ireland</li>
                            <li>Henry Street, Dunblin 01</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} GER'GARAGE INC | All right reserved | Privacy
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Footer;