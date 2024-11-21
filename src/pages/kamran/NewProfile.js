import React from 'react'
import { Link } from 'react-router-dom'

function NewProfile() {
    return (
        <div className='card'>
            <div className='table-responsive active-projects style-1'>
                <h2 className='tbl-caption text-light'> New Profile</h2></div>
            <h6 className='border-bottom'>Profile Details</h6>
            <from className="row text-center">
                <div className='from-group col-4 '>
                    <label htmlFor='caption'>Name</label>
                    <input type="text" class="form-control" id="caption" aria-describedby="caption" />
                </div>
                <div className='from-group col-4 '>
                    <span class="">Description</span>
                    <textarea class="form-control" aria-label="With textarea"></textarea>
                </div>
            </from>
            <h6 className='border-bottom'>Module Access Rights</h6>
            <div className=''>
                <div>
                    <ul className='border-bottom'>
                    <Link className="btn btn-outline-primary btn-sm-" to="/market" role="button" 
                    aria-controls="offcanvasExample">Marketing</Link>
                     <Link className="btn btn-outline-primary btn-sm" to="/sales" role="button" 
                    aria-controls="offcanvasExample">Sales</Link>
                     <Link className="btn btn-outline-primary btn-sm" to="/master" role="button" 
                    aria-controls="offcanvasExample">Master</Link>
                     <Link className="btn btn-outline-primary btn-sm" to="/ecommerce" role="button" 
                    aria-controls="offcanvasExample">E-Commerce</Link>
                     <Link className="btn btn-outline-primary btn-sm" to="/leasing" role="button" 
                    aria-controls="offcanvasExample">Leasing</Link>
                    
                    </ul>
                </div>
            </div>
           
        </div>
    )
}

export default NewProfile
