import React from "react";
import AlphabeticFilter from "../../components/rems-status/AlphabeticFilter";
import PropertyEdit from "../../components/rems-status/NewForms/PropetyEdit";
import VarturesTenant from "../../components/rems-status/NewForms/VarturesTenant";
import TenantLayout from "../../components/rems-status/NewForms/TenantLayout";
import LookIn from "../../components/rems-status/LookIn";
import PSMunit from "../../components/rems-status/PSMunit";


export function Tenant () {
    return (
        <div>
            <PSMunit title={"Tenant List"}/>
            <LookIn/> 
            <TenantLayout  link={"/newTenant"} title={"New Tenant"} />
            <AlphabeticFilter/>
            <PropertyEdit/>
            <VarturesTenant/>
        </div>
    )
}
