import { useState, useEffect } from "react";
import mockAPIUrl from "../../Config";
const DeleteTeacher = () => {

    const [formData, setFormData] = useState([]);
    const [showDialog, setDialogHidden] = useState('')
    const [teacherId,setTeacherId] = useState('')
    const fetchTeacherData = async () => {
        const response = await fetch(`${mockAPIUrl}/teacher`);
        const data = await response.json();
        setFormData((data)=>data);
        console.log(data,data.length);
    };
    const handleCancel = ()=>{
        setTeacherId('')
        
            setDialogHidden('');
        
    }
    const handleProceed = async()=>{
        const response = await fetch(`${mockAPIUrl}/teacher/${teacherId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        console.log(data);
        setDialogHidden('dialog1')
        setTimeout(()=>{
            setFormData((prevData)=>prevData.filter(teacher=>teacher.id!==teacherId));
            setDialogHidden('');
        },2000)
    }
    const handleDelete = async (id)=>{
        setTeacherId(id); 
        setDialogHidden('dialog2')
    }
    useEffect(() => {
        fetchTeacherData();
    }, []);
    return (
        <div className="flex flex-col w-full ml-2 mt-2">
            <p className="px-4 text-lg font-bold tracking-wider">Delete Teacher</p>
            
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
                                <td className="w-1/4 text-center border-2 px-4 "><i className="fa-solid fa-trash" onClick={()=>handleDelete(item.id)}></i></td>
                            </tr>
                        )):(
                            <tr key="nodata" className="hover:bg-blue-500 hover:text-white">
                            <td className="w-1/4 text-left border-2 px-4 font-bold tracking-widest " colSpan="4">No Data Found</td>
                          
                        </tr>
                        )}
                    </tbody>
                </table>
            
            {showDialog==='dialog1' && (
                <dialog className="fixed top-0 flex flex-col items-center border rounded-md bg-gray-500 text-white">
                    <p className="text-xl  px-4 py-2 tracking-wider">Alert !</p>
                    <p className="text-xl  px-4 py-2 tracking-wider">Teacher  deleted successfully</p>
                </dialog>
            )}
            {showDialog==='dialog2' && (
                <dialog className="fixed top-0 flex flex-col items-center border rounded-md bg-gray-500 text-white">
                    <p className="text-xl  px-4 py-2 tracking-wider">Alert !</p>
                    <p className="text-xl  px-4 py-2 tracking-wider">Are you sure to delete this data! Ciick Proceed to Confirm</p>
                   <div className="flex flex-row justify-evenly w-full">
                   <button className="bg-blue-500 text-white py-1 px-2" onClick={handleProceed}>Proceed</button>
                   <button className="bg-blue-500 text-white py-1 px-2" onClick={handleCancel}>Cancel</button>
                   </div>
                </dialog>
            )}
        </div>
    )
}
export default DeleteTeacher;