import React from "react";
import SideBar from "./SideBar";
import Footer from "./Footer";
import Datatable5 from "../datatables/Datatable5";


const Reports = () =>{
    return(
        <div className="utf-dashboard-content-container-aera" data-simplebar>
          <div id="dashboard-titlebar" className="utf-dashboard-headline-item">
            <div className="row">
              <div className="col-xl-12 z-index-1">
                <h3>Reports</h3>
                <nav id="breadcrumbs">
                  <ul>
                    <li><a href="index.php">Home</a></li>
                    <li><a href="dashboard.php">Dashboard</a></li>
                    <li>Reports</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="utf-dashboard-content-inner-aera margin-bottom-115">
            <div className="row">
              <div className="col-xl-12">
                
                  
                    <Datatable5/>
                <div className="clearfix"></div>
              </div>
            </div>
            <div className="utf-dashboard-footer-spacer-aera"></div>
            <Footer/>
            </div>
            </div>
            
    )
}


export default Reports;