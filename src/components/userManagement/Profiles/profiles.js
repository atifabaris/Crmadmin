import React from "react";
import { Link } from "react-router-dom";

function Profiles () {

    return(
        <div className='card'>
        <div className='table-responsive active-projects style-1'>
            <h2 className='tbl-caption text-light'> Profiles List
            <Link className="btn btn-primary btn-sm"  to="/usermanagment/mainprofile" role="button" aria-controls="offcanvasExample">
            + New Profile</Link></h2>
     {/* <button type="button" className="btn btn-secondary btn-sm" > + Invite Employee
                                    </button> */}
</div>
<div className="mt-3">
            <table className="w-100">
                <tr className="p-1 bg-light">
                    <th className="p-1">
                    
                   
                    </th>
                    <th className="p-1">Profile Name</th>
                    <th className="p-1">Remarks</th>
                    <th className="p-1">Created By</th>
                    <th className="p-1">Modified By</th>
                    <th className="p-1">Status</th>
                   
                </tr>
                <tr className="border p-1">
      
        <td className="p-1">
           
        </td>
    <td className='p-1'>Administrator</td>
    <td className='p-1'>Admin Profile</td>
    <td className='p-1'>Dharani</td>
    <td className='p-1'></td>
    <div>
      <a className="btn btn-primary shadow btn-xs sharp me-1">
      <i class="fa fa-pencil"> </i>
        </a>
        <a class="btn btn-danger shadow btn-xs sharp" >
        <i class="fa fa-trash">

        </i>
          </a>
    </div>
        </tr>

        <tr className="border p-1">
      
      <td className="p-1">
         
      </td>
  <td className='p-1'>Executive</td>
  <td className='p-1'>Executive</td>
  <td className='p-1'>Dharani</td>
  <td className='p-1'>Dharani</td>
  <div>
    <a className="btn btn-primary shadow btn-xs sharp me-1">
    <i class="fa fa-pencil"> </i>
      </a>
      <a class="btn btn-danger shadow btn-xs sharp" >
      <i class="fa fa-trash">

      </i>
        </a>
  </div>
      </tr>

      <tr className="border p-1">
      
      <td className="p-1">
         
      </td>
  <td className='p-1'>Mkt Manager	</td>
  <td className='p-1'>Mkt Manager	</td>
  <td className='p-1'>Dharani</td>
  <td className='p-1'>Dharani</td>
  <div>
    <a className="btn btn-primary shadow btn-xs sharp me-1">
    <i class="fa fa-pencil"> </i>
      </a>
      <a class="btn btn-danger shadow btn-xs sharp" >
      <i class="fa fa-trash">

      </i>
        </a>
  </div>
      </tr>


      <tr className="border p-1">
      
      <td className="p-1">
         
      </td>
  <td className='p-1'>Service Manager	</td>
  <td className='p-1'>Service Manager	</td>
  <td className='p-1'>Dharani</td>
  <td className='p-1'>Dharani</td>
  <div>
    <a className="btn btn-primary shadow btn-xs sharp me-1">
    <i class="fa fa-pencil"> </i>
      </a>
      <a class="btn btn-danger shadow btn-xs sharp" >
      <i class="fa fa-trash">

      </i>
        </a>
  </div>
      </tr>

      <tr className="border p-1">
      
      <td className="p-1">
         
      </td>
  <td className='p-1'>Service Representative	</td>
  <td className='p-1'>Service Representative	</td>
  <td className='p-1'></td>
  <td className='p-1'>Dharani</td>
  <div>
    <a className="btn btn-primary shadow btn-xs sharp me-1">
    <i class="fa fa-pencil"> </i>
      </a>
      <a class="btn btn-danger shadow btn-xs sharp" >
      <i class="fa fa-trash">

      </i>
        </a>
  </div>
      </tr>
            </table>

            


        </div>
</div>

    );
}

export default Profiles;