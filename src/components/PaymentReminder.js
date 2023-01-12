import React from "react";
import Footer from "./Footer";
import Datatable12 from "../datatables/Datatable12";


const PaymentReminder = () => {
    return (
        
            <div className="utf-dashboard-content-container-aera" data-simplebar>
                <div id="dashboard-titlebar" className="utf-dashboard-headline-item">
                    <div className="row">
                        <div className="col-xl-12 z-index-1">
                            <h3>PaymentReminder</h3>
                            <nav id="breadcrumbs">
                                <ul>
                                    <li><a href="index.php">Home</a></li>
                                    <li><a href="dashboard.php">Dashboard</a></li>
                                    <li>PaymentReminder</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="utf-dashboard-content-inner-aera margin-bottom-115">
                    <div className="row">
                        <div className="col-xl-12">
                            <Datatable12/>
                            <div className="clearfix"></div>
                        </div>
                    </div>

                        <div className="utf-dashboard-footer-spacer-aera"></div>
                        <Footer />
                    </div>
                </div>
    )
}

export default PaymentReminder;