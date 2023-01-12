import React from "react";
import Footer from './Footer';
import Datatable10 from '../datatables/Datatable10';



const MailReminderSetting = () =>{
    return(
        <div className="utf-dashboard-content-container-aera" data-simplebar>
                <div id="dashboard-titlebar" className="utf-dashboard-headline-item">
                    <div className="row">
                        <div className="col-xl-12 z-index-1">
                            <h3>MailReminderSetting</h3>
                            <nav id="breadcrumbs">
                                <ul>
                                    <li><a href="/index">Home</a></li>
                                    <li><a href="/Dashboard">Dashboard</a></li>
                                    <li>MailReminderSetting</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="utf-dashboard-content-inner-aera margin-bottom-115">
                    <div className="row">
                        <div className="col-xl-12">
                            <Datatable10/>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div class="utf-dashboard-footer-spacer-aera"></div>
                    <Footer />
                </div>
            </div>
    )
}


export default MailReminderSetting;