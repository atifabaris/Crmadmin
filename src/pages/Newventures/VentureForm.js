import React, { useEffect, useState } from "react";
import CustomInputField from "../../common/CustomInputField";
import { CiSearch } from "react-icons/ci";
import { cityListbyPagination, clodinaryImage, getVentureByUser, postNewVenture } from "../../api/login/Login";
import { baseUrlImage } from "../../baseUrl";
import { toast, ToastContainer } from 'react-toastify';

export default function VenturesForm() {
    const [city, setCity] = useState(null)
    const [user, setUser] = useState (null)
    const [store, setStore] = useState({
        name: '',
        code: '',
        city: '',
        area: '',
        document: '',
        layout_image: '',
    })
    const getData = async () => {
        try {
            const res = await cityListbyPagination(0, 100)
            const ven = await getVentureByUser(0 ,100)
            setUser(ven.data?.user)
            setCity(res.data?.city)
            console.log(ven + "user")
        } catch (error) {

        }
    }
    useEffect(() => {
        getData()
    }, [])
    const handleChange = async (e) => {
        const { name, value, type } = e.target
        if (type == 'file') {
            const file = new FormData()
            file.append('image', e.target.files[0])
            const res = await clodinaryImage(file)
            const clone = { ...store }
            clone[name] = res.data.data.url
            setTimeout(() => {
                setStore(clone)
            }, 1000);
        } else {
            const clone = { ...store }
            clone[name] = value
            setStore(clone)
        }

    }
    const submitData = async () => {
        try {
            const res = await postNewVenture(store)
            console.log(res)
            if (res?.statusCode == 200) {
                toastSuccessMessage("success")
            }
            else {
                toasterrorMessage("Fai0-l")
            }
        }
        catch (error) {
            console.log(error.massage)
        }
    }

    const toastSuccessMessage = (message) => {
        toast.success(message, {
            position: "top-right",
        });
    };
    const toasterrorMessage = (message) => {
        toast.error(message, {
            position: "top-right",
        });
    };
    return (
        <div className="mt-3">
            <ToastContainer />
            <form>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-10">
                        <div className="row">
                            <div className="col-6">
                                <div className="mt-2">
                                    <label className="d-block my-1">Name</label>
                                    <div className="w-100">
                                        <CustomInputField type={"text"} value={store?.name}
                                            onChange={handleChange}
                                            name="name"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mt-2">
                                    <label className="d-block my-1">Code</label>
                                    <div className="w-100">
                                        <CustomInputField
                                            type="text"
                                            value={store?.code}
                                            onChange={handleChange}
                                            name="code"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mt-2">
                                    <label className="d-block my-1">City</label>
                                    <div className="w-100">
                                        <select className="py-2 w-100 px-4 border border-light" onChange={handleChange} value={store.city} name="city">
                                            <option>Select City</option>
                                            {city && city?.map((item, i) => {
                                                return <option key={i} value={item._id}>{item.name}</option>
                                            })}

                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mt-2">
                                    <label className="d-block my-1">User</label>
                                    <div className="w-100">
                                        <select className="py-2 w-100 px-4 border border-light" onChange={handleChange} value={store.city} name="city">
                                            <option>Select User</option>
                                            {user && user?.map((item, i) => {
                                                return <option key={i} value={item._id}>{item.name}</option>
                                            })}

                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mt-2">
                                    <label className="d-block my-1">Area</label>
                                    <div className="w-100">
                                        <CustomInputField
                                            type={'text'}
                                            value={store?.area}
                                            onChange={handleChange}
                                            name="area"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mt-2">
                                    <label className="d-block my-1">Document</label>
                                    <div className="">
                                        <input className="form-control rounded-2" type="file" name="document" onChange={handleChange} />
                                        {store.document && <img src={`${baseUrlImage}${store.document}`} style={{ height: "50px", width: "50px" }} />}
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mt-2">
                                    <label className="d-block my-1">layout Image</label>
                                    <div className="">
                                        <input className="rounded-2 form-control" type="file" name="layout_image" onChange={handleChange} />
                                        {store.layout_image && <img src={`${baseUrlImage}${store.layout_image}`} style={{ height: "50px", width: "50px" }} />}
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-2">
                                <button className="btn btn-primary m-0" type="button" onClick={submitData}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}