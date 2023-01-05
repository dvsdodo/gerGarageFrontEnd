import React from "react";
import"./Footer.css";

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>THIS MEMES INC</h4>
                        <ul className="list-unstyled">
                            <li>333-555-5415</li>
                            <li>Dublin, Ireland</li>
                            <li>Henry Street, Dunblin 01</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>THIS MEMES INC</h4>
                        <ul className="list-unstyled">
                            <li>333-555-5415</li>
                            <li>Dublin, Ireland</li>
                            <li>Henry Street, Dunblin 01</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>THIS MEMES INC</h4>
                        <ul className="list-unstyled">
                            <li>333-555-5415</li>
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