import React from "react";
import DesignationHierarchy from "../../components/userManagement/DesignationHierarchy/DesignationHierarchy";
import ProfilesList from "../../components/userManagement/Profiles/profiles";
import RolesList from "../../components/userManagement/Roles/Roles";
import NewTeam from "../../components/userManagement/Teams/NewTeam";
import Teams from "../../components/userManagement/Teams/Teams";


function UserManagement() {
    return(
        <div>
             {/* <DesignationHierarchy/> */}
             {/* <ProfilesList/> */}
             {/* <RolesList/> */}
             {/* <Teams/> */}
             <NewTeam/>
        </div>
    )
}
export default UserManagement