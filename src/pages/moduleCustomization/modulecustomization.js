import React, { useState } from "react";
import Account from "../../components/module-customization/Account/account";
import Activities from "../../components/module-customization/Activities/activities";





export default function ModuleCustomization(){
    const [tab , setTab] = useState(0)
    

   const tabHandle =(num)=>{
        setTab(num)
    }
    return(
        <div className="ServiceMenu container">
    <div className="row">
        <div className="col-2">
            <ul className="list-group" >
                <li className="list-group-item" onClick={() => tabHandle(0)}>Account</li>
                <li className="list-group-item" onClick={() => tabHandle(1)}>Activities</li>
            </ul>
        </div>
        <div className="col-10">
            <div className={tab === 0 ? "d-block" : "d-none"}>
                <Account/>
            </div>

            <div className={tab === 1 ? "d-block" : "d-none"}>
                <Activities />
            </div>

        </div>

      
    </div>
</div>

    )
}