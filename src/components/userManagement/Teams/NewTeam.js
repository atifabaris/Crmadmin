import React from "react";
import { Button } from "react-bootstrap";

function NewTeam () {

    return (
        <div className='card'>
        <div className='  table-responsive active-projects style-1'>
            <h2 className='bg-dark text-light tbl-caption tbl-caption-2'>New Team </h2>
        </div>
        <form className='row w-70'>
            <div className='from-group col-4 '>
                <label htmlFor='caption'>Name</label>
                <input type="text" class="form-control" id="caption" aria-describedby="caption" />
            </div>
            <div className='from-group col-4 '>
                <label htmlFor='modulename'>Code</label>
                <input type="text" class="form-control" id="modulename" aria-describedby="modulename" />
            </div>
            <div className='from-group col-4 '>
                <label htmlFor='application'>Headed By</label>
                <select type="text" class="form-control" id="application" aria-describedby="application">

                    <option value=""></option>
                    <option value="marketing">Marketing</option>
                    <option value="sales">sales</option>
                    <option value="master">master</option>
                </select>
            </div>
            <div className='from-group col-4 '>
                <label htmlFor='application'>Access Type </label>
                <select type="text" class="form-control" id="application" aria-describedby="application">

                    
                    <option value="marketing">Public</option>
                    <option value="sales">sales</option>
                    <option value="master">master</option>
                </select>
            </div>

            <div className='from-group col-4 '>
                <span class="">Description</span>
                <textarea class="form-control" aria-label="With textarea"></textarea>
            </div>
        
           </form>
           <div style={{margin: "10px 0px"}}> 
            
 <button type="button" class="btn btn-lg btn-primary" disabled>Save</button>
 <button type="button" class="btn btn-secondary btn-lg" disabled>Cancel</button>
 <div class="d-flex justify-content-end">
  <a class="btn btn-primary shadow btn-xs sharp me-1">
    <i class="fa fa-pencil"></i>
  </a>
  <a class="btn btn-danger shadow btn-xs sharp">
    <i class="fa fa-trash"></i>
  </a>
</div>

 </div>
 
 
    </div>
    );
}

export default NewTeam;