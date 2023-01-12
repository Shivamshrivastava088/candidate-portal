import React from "react";
import SideBar from "./SideBar";
import Footer from "./Footer";
import Datatable8 from "../datatables/Datatable8";
import Datatable9 from "../datatables/Datatable9";


const EmployeeVerificationRequest = () => {
    return (
        
            <div   className="utf-dashboard-content-container-aera" data-simplebar>
                <div id="dashboard-titlebar" className="utf-dashboard-headline-item">
                    <div className="row">
                        <div className="col-xl-12 z-index-1">
                            <h3>Employee Verification Request</h3>
                            <nav id="breadcrumbs">
                                <ul>
                                    <li><a href="index.php">Home</a></li>
                                    <li><a href="dashboard.php">Dashboard</a></li>
                                    <li>Employee Verification Request</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="utf-dashboard-content-inner-aera">
                    <div className="row">
                        <div className="col-xl-12">
                            <Datatable8/>
                            <div className="clearfix"></div>
                        </div>
                    </div>


                    <div   className="utf-dashboard-content-inner-aera">
                        <div     className="row">
                            <div  className="col-xl-12">
                                <Datatable9/>
                                <div  className="clearfix"></div>
                            </div>
                        </div>
                        <div className="utf-dashboard-footer-spacer-aera"></div>
                        <Footer />
                    </div>
                </div>
            </div>
    )
}

export default EmployeeVerificationRequest;