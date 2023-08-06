import { useState, useEffect } from "react";
import mockAPIUrl from "../../Config";
import States from "../States";

const ModifyStudent = () => {
    const initialValues ={
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
    }

    const [formVisible,setFormVisible] = useState(false)
    const [formData, setFormData] = useState(initialValues);
    const [data,setModifyData] = useState(initialValues);
    const [dialogHidden, setDialogHidden] = useState(false)
    const fetchStudentData = async () => {
    
        const response = await fetch(`${mockAPIUrl}/student`);
        const respData = await response.json();
        setFormData(respData);

    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = data.id;
        const response = await fetch(`${mockAPIUrl}/student/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
      
        if(response.ok){
            setDialogHidden(true);
            setTimeout(()=>{
                setDialogHidden(false);
                setModifyData(initialValues);
            },2000)
        fetchStudentData()
        }
        
    }
    const handleInput = (e)=>{

        const {name,value} = e.target;
        setModifyData({
          ...data,
            [name]: value
        })
       }
    const handleEdit =  (id)=>{

      const selectedStudent = formData.find((student) => student.id === id);

      setModifyData(selectedStudent); 
      setFormVisible(true);
    }
    useEffect(() => {
        fetchStudentData();
    }, []);

    return (
        <div className="flex flex-col w-full ml-2 mt-2">
            <p className="px-4 text-lg font-bold tracking-wider">Modify Student</p>
            
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
                        {formData.length>0 ? formData.map((item) => (
                            <tr key={item.id} className="hover:bg-blue-500 hover:text-white">
                                <td className="w-1/4 text-left border-2 px-4 ">{item.id}</td>
                                <td className="w-1/4 text-left border-2 px-4 ">{item.fname}</td>
                                <td className="w-1/4 text-left border-2 px-4 ">{item.lname}</td>
                                <td className="w-1/4 text-center border-2 px-4 "><i className="fa-solid fa-pen-to-square" onClick={()=>handleEdit(item.id)}></i></td>
                            </tr>
                        )):(
                            <tr key="nodata" className="hover:bg-blue-500 hover:text-white">
                            <td className="w-1/4 text-left border-2 px-4 font-bold tracking-widest " colSpan="4">No Data Found</td>
                          
                        </tr>
                        )}
                    </tbody>
                </table>

                {formVisible && (
                    <form onSubmit={handleSubmit}>
                    <div className="flex flex-col sm:flex-row px-4 py-2 w-full sm:w-4/5 lg:w-3/4">
                        <label
                            className="w-full sm:w-1/3 lg:w-1/4 text-sm lg:text-base tracking-wider"
                            htmlFor='fname'>First Name</label>
                        <input
                            onChange={handleInput}
                            required
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
                            onChange={handleInput}
                            required
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
                            onChange={handleInput}
                            required
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
                            value={data.gender}
                            >
                            <option value=''>---Select---</option>
                            <option value='MALE'>MALE</option>
                            <option value='FEMALE'>FEMALE</option>
                        </select>
                    </div>
                    <div className="flex flex-col sm:flex-row px-4 py-2 w-full sm:w-4/5 lg:w-3/4">
                        <label
                            className="w-full sm:w-1/3 lg:w-1/4 text-sm lg:text-base tracking-wider"
                            htmlFor='address'>Address</label>
                        <textarea
                        onChange={handleInput}
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
                            onChange={handleInput}
                            required
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
                            onChange={handleInput}
                            required
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
                        onChange={handleInput}
                            className="bg-gray-300 px-2 py-1 focus:bg-cyan-300 w-full sm:w-1/2 text-sm lg:text-base uppercase"
                            type='text'
                            name='state'
                            value={data.state} >
                            <option value=''>---Select---</option>
                            {States.map((value) => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col sm:flex-row px-4 py-2 w-full sm:w-4/5 lg:w-3/4">
                        <label
                            className="w-full sm:w-1/3 lg:w-1/4 text-sm lg:text-base tracking-wider"
                            htmlFor='email'>Email</label>
                        <input
                            onChange={handleInput}
                            required
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
                            onChange={handleInput}
                            required
                            className="bg-gray-300 px-2 py-1 focus:bg-cyan-300 w-full sm:w-1/2 text-sm lg:text-base uppercase"
                            type='text'
                            name='mobile'
                            value={data.mobile} />
                    </div>
                    <div className="flex flex-col sm:flex-row px-4 py-2 w-full sm:w-4/5 lg:w-3/4">
                        <label
                            className="w-full sm:w-1/3 lg:w-1/4 text-sm lg:text-base tracking-wider"
                            htmlFor='standard'>Standard</label>
                        <select
                            onChange={handleInput}
                            required
                            className="bg-gray-300 px-2 py-1 focus:bg-cyan-300 w-full sm:w-1/2 text-sm lg:text-base uppercase"
                            type='text'
                            name='standard'
                            value={data.standard} >
                            <option value=''>--Select--</option>
                            <option value='1st'>1st</option>
                            <option value='2nd'>2nd</option>
                            <option value='3rd'>3rd</option>
                            <option value='4th'>4th</option>
                            <option value='5th'>5th</option>
                            <option value='6th'>6th</option>
                            <option value='7th'>7th</option>
                            <option value='8th'>8th</option>
                            <option value='9th'>9th</option>
                            <option value='10th'>10th</option>
                            <option value='11th'>11th</option>
                            <option value='12th'>12th</option>
                            </select>
                    </div>
                    <div className="flex flex-col sm:flex-row px-4 py-2 w-full sm:w-4/5 lg:w-3/4">
                        <label
                            className="w-full sm:w-1/3 lg:w-1/4 text-sm lg:text-base tracking-wider"
                            htmlFor='admission'>Date of Admission</label>
                        <input
                            onChange={handleInput}
                            required
                            className="bg-gray-300 px-2 py-1 focus:bg-cyan-300 w-full sm:w-1/2 text-sm lg:text-base uppercase"
                            type='date'
                            name='admission'
                            value={data.admission} />
                    </div>
                    <div className="flex flex-col sm:flex-row px-4 py-2 w-full sm:w-4/5 lg:w-3/4">
                    <button type="submit" className="bg-blue-500 text-white text-base px-4 py-1 rounded-md hover:bg-green-500">Submit</button>
                </div>
                  
                </form>
                )}
             
                {dialogHidden && (
                    <dialog className="fixed top-0 flex flex-col items-center border rounded-md bg-gray-500 text-white">
                        <p className="text-xl  px-4 py-2 tracking-wider">Alert !</p>
                        <p className="text-xl  px-4 py-2 tracking-wider">Student modified successfully</p>
                    </dialog>
                )}
        </div>
    )
}
export default ModifyStudent;