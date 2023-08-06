import { useState, useEffect } from "react";
import mockAPIUrl from "../../Config";
const ViewTeacher = () => {
    const [formVisible, setFormVisible] = useState(false)
    const [formData, setFormData] = useState({
        lname: '',
        fname: '',
        dob: '',
        address: '',
        city: '',
        pincode: '',
        state: '',
        gender: '',
        id: '',
        standard: '',
        email: '',
        mobile: '',
        admission: ''
    });
    const [data, setViewData] = useState({});
    const fetchTeacherData = async () => {

        const response = await fetch(`${mockAPIUrl}/teacher`);
        const data = await response.json();
        setFormData(data);
        console.log(data, data.length);
    };


    const handleView = (id) => {
        console.log(id)
        const selectedTeacher = formData.find((teacher) => teacher.id === id);
        setViewData(selectedTeacher || {});
        setFormVisible(true);
    }
    useEffect(() => {
        fetchTeacherData();
    }, []);
    return (
        <div className="flex flex-col w-full ml-2 mt-2">
            <p className="px-4 text-lg font-bold tracking-wider">View Teacher</p>

            <table className="w-3/4 lg:w-1/2 mt-2">
                <thead>
                    <tr>
                        <th className="w-1/4 text-left border-2 px-4 ">ID</th>
                        <th className="w-1/4 text-left border-2 px-4 ">First Name</th>
                        <th className="w-1/4 text-left border-2 px-4 ">Last Name</th>
                        <th className="w-1/4 text-center border-2 px-4 ">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {formData.length > 0 ? formData.map((item) => (
                        <tr key={item.id} className="hover:bg-blue-500 hover:text-white">
                            <td className="w-1/4 text-left border-2 px-4 ">{item.id}</td>
                            <td className="w-1/4 text-left border-2 px-4 ">{item.fname}</td>
                            <td className="w-1/4 text-left border-2 px-4 ">{item.lname}</td>
                            <td className="w-1/4 text-center border-2 px-4 "><i className="fa-solid fa-eye" onClick={() => handleView(item.id)}></i></td>
                        </tr>
                    )) : (
                        <tr key="nodata" className="hover:bg-blue-500 hover:text-white">
                            <td className="w-1/4 text-left border-2 px-4 font-bold tracking-widest " colSpan="4">No Data Found</td>

                        </tr>
                    )}
                </tbody>
            </table>
            {formVisible && (
                <form>
                <div className="flex flex-col sm:flex-row px-4 py-2 w-full sm:w-4/5 lg:w-3/4">
                    <label
                        className="w-full sm:w-1/3 lg:w-1/4 text-sm lg:text-base tracking-wider"
                        htmlFor='fname'>First Name</label>
                    <input
                        readOnly
                        className="bg-gray-300 px-2 py-1 focus:bg-cyan-300 w-full sm:w-1/2 text-sm lg:text-base uppercase"
                        type='text'
                        name='fname'
                        value={data.fname} />
                </div>
                <div className="flex flex-col sm:flex-row px-4 py-2 w-full sm:w-4/5 lg:w-3/4">
                    <label
                        className="w-full sm:w-1/3 lg:w-1/4 text-sm lg:text-base tracking-wider"
                        htmlFor='lname'>Last Name</label>
                    <input
                        readOnly
                        className="bg-gray-300 px-2 py-1 focus:bg-cyan-300 w-full sm:w-1/2 text-sm lg:text-base uppercase"
                        type='text'
                        name='lname'
                        value={data.lname} />
                </div>

                <div className="flex flex-col sm:flex-row px-4 py-2 w-full sm:w-4/5 lg:w-3/4">
                    <label
                        className="w-full sm:w-1/3 lg:w-1/4 text-sm lg:text-base tracking-wider"
                        htmlFor='dob'>Date of Birth</label>
                    <input
                        readOnly
                        className="bg-gray-300 px-2 py-1 focus:bg-cyan-300 w-full sm:w-1/2 text-sm lg:text-base uppercase"
                        type='date'
                        name='dob'
                        value={data.dob} />
                </div>
                <div className="flex flex-col sm:flex-row px-4 py-2 w-full sm:w-4/5 lg:w-3/4">
                    <label
                        className="w-full sm:w-1/3 lg:w-1/4 text-sm lg:text-base tracking-wider"
                        htmlFor='gender'>Gender</label>
                    <select
                        className="bg-gray-300 px-2 py-1 focus:bg-cyan-300 w-full sm:w-1/2 text-sm lg:text-base uppercase"
                        type='text'
                        name='gender'
                    >

                        <option value={data.gender} >{data.gender} </option>
                    </select>
                </div>
                <div className="flex flex-col sm:flex-row px-4 py-2 w-full sm:w-4/5 lg:w-3/4">
                    <label
                        className="w-full sm:w-1/3 lg:w-1/4 text-sm lg:text-base tracking-wider"
                        htmlFor='address'>Address</label>
                    <textarea
                        className="bg-gray-300 px-2 py-1 focus:bg-cyan-300 w-full sm:w-1/2 text-sm lg:text-base uppercase resize-none h-24"
                        type='text'
                        name='address'
                        value={data.address} >
                    </textarea>
                </div>
                <div className="flex flex-col sm:flex-row px-4 py-2 w-full sm:w-4/5 lg:w-3/4">

                    <label
                        className="w-full sm:w-1/3 lg:w-1/4 text-sm lg:text-base tracking-wider"
                        htmlFor='city'>City</label>
                    <input
                        readOnly
                        className="bg-gray-300 px-2 py-1 focus:bg-cyan-300 w-full sm:w-1/2 text-sm lg:text-base uppercase"
                        type='text'
                        name='city'
                        value={data.city} />
                </div>
                <div className="flex flex-col sm:flex-row px-4 py-2 w-full sm:w-4/5 lg:w-3/4">
                    <label
                        className="w-full sm:w-1/3 lg:w-1/4 text-sm lg:text-base tracking-wider"
                        htmlFor='pincode'>Pincode</label>
                    <input
                        readOnly
                        className="bg-gray-300 px-2 py-1 focus:bg-cyan-300 w-full sm:w-1/2 text-sm lg:text-base uppercase"
                        type='text'
                        name='pincode'
                        value={data.pincode} />
                </div>
                <div className="flex flex-col sm:flex-row px-4 py-2 w-full sm:w-4/5 lg:w-3/4">
                    <label
                        className="w-full sm:w-1/3 lg:w-1/4 text-sm lg:text-base tracking-wider"
                        htmlFor='state'>State</label>
                    <select
                        className="bg-gray-300 px-2 py-1 focus:bg-cyan-300 w-full sm:w-1/2 text-sm lg:text-base uppercase"
                        type='text'
                        name='state'
                        value={data.state} >
                        <option value={data.state}>{data.state}</option>
                    </select>
                </div>
                <div className="flex flex-col sm:flex-row px-4 py-2 w-full sm:w-4/5 lg:w-3/4">
                    <label
                        className="w-full sm:w-1/3 lg:w-1/4 text-sm lg:text-base tracking-wider"
                        htmlFor='email'>Email</label>
                    <input
                        readOnly
                        className="bg-gray-300 px-2 py-1 focus:bg-cyan-300 w-full sm:w-1/2 text-sm lg:text-base uppercase"
                        type='text'
                        name='email'
                        value={data.email} />
                </div>
                <div className="flex flex-col sm:flex-row px-4 py-2 w-full sm:w-4/5 lg:w-3/4">
                    <label
                        className="w-full sm:w-1/3 lg:w-1/4 text-sm lg:text-base tracking-wider"
                        htmlFor='mobile'>Mobile</label>
                    <input
                        readOnly
                        className="bg-gray-300 px-2 py-1 focus:bg-cyan-300 w-full sm:w-1/2 text-sm lg:text-base uppercase"
                        type='text'
                        name='mobile'
                        value={data.mobile} />
                </div>
                <div className="flex flex-col sm:flex-row px-4 py-2 w-full sm:w-4/5 lg:w-3/4">
                    <label
                        className="w-full sm:w-1/3 lg:w-1/4 text-sm lg:text-base tracking-wider"
                        htmlFor='standard'>Subjects</label>
                    <input
                        readOnly
                        className="bg-gray-300 px-2 py-1 focus:bg-cyan-300 w-full sm:w-1/2 text-sm lg:text-base uppercase"
                        type='text'
                        name='subjects'
                        value={data.subjects} />

                </div>
                <div className="flex flex-col sm:flex-row px-4 py-2 w-full sm:w-4/5 lg:w-3/4">
                    <label
                        className="w-full sm:w-1/3 lg:w-1/4 text-sm lg:text-base tracking-wider"
                        htmlFor='joining'>Date of Joining</label>
                    <input
                        readOnly
                        className="bg-gray-300 px-2 py-1 focus:bg-cyan-300 w-full sm:w-1/2 text-sm lg:text-base uppercase"
                        type='date'
                        name='joining'
                        value={data.joining} />
                </div>
               
            </form>
            )}

          

        </div>
    )
}
export default ViewTeacher;