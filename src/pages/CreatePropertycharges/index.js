import PSMunit from "../../components/rems-status/psmunit";
import SaveCancle from "../../components/rems-status/SaveCancle";
import PropertychargesForm from "./PropertyChargesForm";

export default function  CreatePropertyCharges(){
    return(
        <div>
            <PSMunit title={"Create Property Charges"} />
            {/* <SaveCancle /> */}
            <PropertychargesForm/>
        </div>
    )
}