import React, { useState } from "react";
import DesignationHierarchy from "../../components/userManagement/DesignationHierarchy/DesignationHierarchy";
import Profiles from "../../components/userManagement/Profiles/profiles";
import Roles from "../../components/userManagement/Roles/Roles";
import Teams from "../../components/userManagement/Teams/Teams";
import Users from "../../components/userManagement/Users/user";
import WhatsAppSupportAccount from "../../components/userManagement/WhatsAppSupportAccount/WhatsAppSupportAccount";
import LoginHistory from "../../components/userManagement/LoginHistory/LoginHistory";





export default function UserManagement(){
    const [tab , setTab] = useState(0)
    

   const tabHandle =(num)=>{
        setTab(num)
    }
    return(
        <div className="ServiceMenu container">
    <div className="row">
        <div className="col-2">
            <ul className="list-group" >
                <li className="list-group-item" onClick={() => tabHandle(0)}>Designation Hierarchy</li>
                <li className="list-group-item" onClick={() => tabHandle(1)}>Profiles</li>
                <li className="list-group-item" onClick={() => tabHandle(2)}>Roles</li>
                <li className="list-group-item" onClick={() => tabHandle(3)}>Teams</li>
                <li className="list-group-item" onClick={() => tabHandle(4)}>Users</li>
                <li className="list-group-item" onClick={() => tabHandle(5)}>Login History</li>
                <li className="list-group-item" onClick={() => tabHandle(6)}>WhatsApp Support Account</li>
            </ul>
        </div>
        <div className="col-10">
            <div className={tab === 0 ? "d-block" : "d-none"}>
                <DesignationHierarchy/>
            </div>

            <div className={tab === 1 ? "d-block" : "d-none"}>
                <Profiles />
            </div>

            <div className={tab === 2 ? "d-block" : "d-none"}>
                <Roles />
            </div>

            <div className={tab === 3 ? "d-block" : "d-none"}>
                <Teams />
            </div>

            <div className={tab === 4 ? "d-block" : "d-none"}>
                <Users />
            </div>

            <div className={tab === 5 ? "d-block" : "d-none"}>
                <LoginHistory />
            </div>

            <div className={tab === 6 ? "d-block" : "d-none"}>
              <WhatsAppSupportAccount/>
            </div>
        </div>

      
    </div>
</div>

    )
}