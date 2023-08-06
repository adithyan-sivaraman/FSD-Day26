import { useState,useEffect }  from "react";
import mockAPIUrl from "../Config";
const Dashbord = ({onClickButton})=>{

    const [teacherData, setTeacherData] = useState({
        lname: '',
        fname: '',
        dob: '',
        address: '',
        city: '',
        pincode: '',
        state: '',
        gender: '',
        id: '',
        subjects: '',
        email: '',
        mobile: '',
        joining: ''
    });

    const [studentData, setStudentData] = useState({
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

   

    const fetchTeacherData = async () => {

        const response = await fetch(`${mockAPIUrl}/teacher`);
        const data = await response.json();
        setTeacherData(data);
        console.log(data, data.length);
    };

    const fetchStudentData = async () => {

        const response = await fetch(`${mockAPIUrl}/student`);
        const data = await response.json();
        setStudentData(data);
        console.log(data, data.length);
    };

    useEffect(() => {
        fetchTeacherData();
        fetchStudentData();
    }, []);

return (
    <div className="flex flex-col w-full ml-2 mt-2">
    <p className="text-sm lg:text-base font-bold tracking-wider px-4 py-2">Dashboard</p>
    <div className="flex flex-col px-4 py-2 w-full">
    <div className="flex flex-row w-4/5 lg:w-1/2">
    <p className="text-sm lg:text-base font-bold tracking-wider w-1/2 ">Teachers</p>
    <div className="flex flex-row w-1/2 justify-evenly items-center">
    <p>Actions</p>
    <i className="fa-solid fa-plus" onClick={() => onClickButton(1)} title="Add Teacher"></i>
    <i className="fa-solid fa-pen-to-square" onClick={() => onClickButton(2)} title="Modify Teacher"></i>
    <i className="fa-solid fa-eye" onClick={() => onClickButton(3)} title="View Teacher"></i>
    <i className="fa-solid fa-trash" onClick={() => onClickButton(4)} title="Delete Teacher"></i>
    </div>
    </div>
  
    
    <table className="w-4/5 lg:w-1/2 mt-2">
                <thead>
                    <tr>
                        <th className="w-1/4 text-left border-2 px-4 ">ID</th>
                        <th className="w-1/4 text-left border-2 px-4 ">First Name</th>
                        <th className="w-1/4 text-left border-2 px-4 ">Last Name</th>
                      
                    </tr>
                </thead>
                <tbody>
                    {teacherData.length > 0 ? teacherData.map((item) => (
                        <tr key={item.id} className="hover:bg-blue-500 hover:text-white">
                            <td className="w-1/4 text-left border-2 px-4 ">{item.id}</td>
                            <td className="w-1/4 text-left border-2 px-4 ">{item.fname}</td>
                            <td className="w-1/4 text-left border-2 px-4 ">{item.lname}</td>
                       
                        </tr>
                    )) : (
                        <tr key="nodata" className="hover:bg-blue-500 hover:text-white">
                            <td className="w-1/4 text-left border-2 px-4 font-bold tracking-widest " colSpan="4">No Data Found</td>

                        </tr>
                    )}
                </tbody>
            </table>
            </div>
            <div className="flex flex-col px-4 py-2 w-full">
            <div className="flex flex-row w-4/5 lg:w-1/2">
            <p className="text-sm lg:text-base font-bold tracking-wider w-1/2 ">Students</p>
            <div className="flex flex-row w-1/2 justify-evenly items-center">
            <p>Actions</p>
            <i className="fa-solid fa-plus" onClick={() => onClickButton(5)} title="Add Student"></i>
            <i className="fa-solid fa-pen-to-square" onClick={() => onClickButton(6)} title="Modify Student"></i>
            <i className="fa-solid fa-eye" onClick={() => onClickButton(7)} title="View Student"></i>
            <i className="fa-solid fa-trash" onClick={() => onClickButton(8)} title="Delete Student"></i>
            </div>
            </div>
    <table className="w-4/5 lg:w-1/2 mt-2">
                <thead>
                    <tr>
                        <th className="w-1/4 text-left border-2 px-4 ">ID</th>
                        <th className="w-1/4 text-left border-2 px-4 ">First Name</th>
                        <th className="w-1/4 text-left border-2 px-4 ">Last Name</th>

                    </tr>
                </thead>
                <tbody>
                    {studentData.length > 0 ? studentData.map((item) => (
                        <tr key={item.id} className="hover:bg-blue-500 hover:text-white">
                            <td className="w-1/4 text-left border-2 px-4 ">{item.id}</td>
                            <td className="w-1/4 text-left border-2 px-4 ">{item.fname}</td>
                            <td className="w-1/4 text-left border-2 px-4 ">{item.lname}</td>
              
                        </tr>
                    )) : (
                        <tr key="nodata" className="hover:bg-blue-500 hover:text-white">
                            <td className="w-1/4 text-left border-2 px-4 font-bold tracking-widest " colSpan="4">No Data Found</td>

                        </tr>
                    )}
                </tbody>
            </table>
            </div>
    </div>
    )
}
export default Dashbord;