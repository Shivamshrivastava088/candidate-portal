import React from "react";
import SideBar from "./SideBar";
import Footer from "./Footer";
import Datatable7 from "../datatables/Datatable7";

const RecruiterRequirementEnquiry = () => {
    return (
        
            <div className="utf-dashboard-content-container-aera" data-simplebar>
                <div id="dashboard-titlebar" className="utf-dashboard-headline-item">
                    <div className="row">
                        <div className="col-xl-12  z-index-1">
                            <h3>Recruiter Requirement Enquiry</h3>
                            <nav id="breadcrumbs">
                                <ul>
                                    <li><a href="index.php">Home</a></li>
                                    <li><a href="dashboard.php">Dashboard</a></li>
                                    <li>Recruiter Requirement Enquiry</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="utf-dashboard-content-inner-aera">
                    <div className="row">
                        <div className="col-xl-12 margin-bottom-115">
                            <Datatable7/>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="utf-dashboard-footer-spacer-aera"></div>
                    <Footer />
                </div>
            </div>
    )
}

export default RecruiterRequirementEnquiry;