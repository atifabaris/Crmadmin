import PSMunit from "../../components/rems-status/PSMunit";
import { NewReportTab } from "../../components/Report/NewreportTab";

export default function CreateReport(){
    return(
        <div>
            <PSMunit title={"New Report"}/>
            <NewReportTab />
        </div>
    )
}