import { useFormik } from "formik";
import { useState } from "react";
import States from "../States";
import mockAPIUrl from "../../Config";
const CreateTeacher = () => {
    const initialValues = {
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
    };
    const [dialogHidden, setDialogHidden] = useState(false)
    const handleFormSubmit = async (teacherData) => {
        const response = await fetch(
            `${mockAPIUrl}/teacher`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(teacherData)
            }
        );
        const data = await response.json();
        console.log(data);
    }
    const createForm = useFormik({
        initialValues: { ...initialValues },
        onSubmit: function (values, formHelpers) {
            handleFormSubmit(values)
            setDialogHidden(true);
            setTimeout(()=>{
                setDialogHidden(false);
                formHelpers.resetForm();
            },2000)
         
        }
    })
    return (
        <div className="flex flex-col w-full ml-2 mt-2">
            <p className="px-4 text-lg font-bold tracking-wider">Create Teacher</p>
            <form onSubmit={createForm.handleSubmit}>
                <div className="flex flex-col sm:flex-row px-4 py-2 w-full sm:w-4/5 lg:w-3/4">
                    <label
                        className="w-full sm:w-1/3 lg:w-1/4 text-sm lg:text-base tracking-wider"
                        htmlFor='fname'>First Name</label>
                    <input
                        required
                        className="bg-gray-300 px-2 py-1 focus:bg-cyan-300 w-full sm:w-1/2 text-sm lg:text-base uppercase"
                        type='text'
                        name='fname'
                        onChange={createForm.handleChange}
                        value={createForm.values.fname} />
                </div>
                <div className="flex flex-col sm:flex-row px-4 py-2 w-full sm:w-4/5 lg:w-3/4">
                    <label
                        className="w-full sm:w-1/3 lg:w-1/4 text-sm lg:text-base tracking-wider"
                        htmlFor='lname'>Last Name</label>
                    <input
                        required
                        className="bg-gray-300 px-2 py-1 focus:bg-cyan-300 w-full sm:w-1/2 text-sm lg:text-base uppercase"
                        type='text'
                        name='lname'
                        onChange={createForm.handleChange}
                        value={createForm.values.lname} />
                </div>

                <div className="flex flex-col sm:flex-row px-4 py-2 w-full sm:w-4/5 lg:w-3/4">
                    <label
                        className="w-full sm:w-1/3 lg:w-1/4 text-sm lg:text-base tracking-wider"
                        htmlFor='dob'>Date of Birth</label>
                    <input
                        required
                        className="bg-gray-300 px-2 py-1 focus:bg-cyan-300 w-full sm:w-1/2 text-sm lg:text-base uppercase"
                        type='date'
                        name='dob'
                        onChange={createForm.handleChange}
                        value={createForm.values.dob} />
                </div>
                <div className="flex flex-col sm:flex-row px-4 py-2 w-full sm:w-4/5 lg:w-3/4">
                    <label
                        className="w-full sm:w-1/3 lg:w-1/4 text-sm lg:text-base tracking-wider"
                        htmlFor='gender'>Gender</label>
                    <select
                        className="bg-gray-300 px-2 py-1 focus:bg-cyan-300 w-full sm:w-1/2 text-sm lg:text-base uppercase"
                        type='text'
                        name='gender'
                        onChange={createForm.handleChange}
                        value={createForm.values.gender} >
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
                        className="bg-gray-300 px-2 py-1 focus:bg-cyan-300 w-full sm:w-1/2 text-sm lg:text-base uppercase resize-none h-24"
                        type='text'
                        name='address'
                        onChange={createForm.handleChange}
                        value={createForm.values.address} >
                    </textarea>
                </div>
                <div className="flex flex-col sm:flex-row px-4 py-2 w-full sm:w-4/5 lg:w-3/4">

                    <label
                        className="w-full sm:w-1/3 lg:w-1/4 text-sm lg:text-base tracking-wider"
                        htmlFor='city'>City</label>
                    <input
                        required
                        className="bg-gray-300 px-2 py-1 focus:bg-cyan-300 w-full sm:w-1/2 text-sm lg:text-base uppercase"
                        type='text'
                        name='city'
                        onChange={createForm.handleChange}
                        value={createForm.values.city} />
                </div>
                <div className="flex flex-col sm:flex-row px-4 py-2 w-full sm:w-4/5 lg:w-3/4">
                    <label
                        className="w-full sm:w-1/3 lg:w-1/4 text-sm lg:text-base tracking-wider"
                        htmlFor='pincode'>Pincode</label>
                    <input
                        required
                        className="bg-gray-300 px-2 py-1 focus:bg-cyan-300 w-full sm:w-1/2 text-sm lg:text-base uppercase"
                        type='text'
                        name='pincode'
                        onChange={createForm.handleChange}
                        value={createForm.values.pincode} />
                </div>
                <div className="flex flex-col sm:flex-row px-4 py-2 w-full sm:w-4/5 lg:w-3/4">
                    <label
                        className="w-full sm:w-1/3 lg:w-1/4 text-sm lg:text-base tracking-wider"
                        htmlFor='state'>State</label>
                    <select
                        className="bg-gray-300 px-2 py-1 focus:bg-cyan-300 w-full sm:w-1/2 text-sm lg:text-base uppercase"
                        type='text'
                        name='state'
                        onChange={createForm.handleChange}
                        value={createForm.values.state} >
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
                        required
                        className="bg-gray-300 px-2 py-1 focus:bg-cyan-300 w-full sm:w-1/2 text-sm lg:text-base"
                        type='text'
                        name='email'
                        onChange={createForm.handleChange}
                        value={createForm.values.email} />
                </div>
                <div className="flex flex-col sm:flex-row px-4 py-2 w-full sm:w-4/5 lg:w-3/4">
                    <label
                        className="w-full sm:w-1/3 lg:w-1/4 text-sm lg:text-base tracking-wider"
                        htmlFor='mobile'>Mobile</label>
                    <input
                        required
                        className="bg-gray-300 px-2 py-1 focus:bg-cyan-300 w-full sm:w-1/2 text-sm lg:text-base uppercase"
                        type='text'
                        name='mobile'
                        onChange={createForm.handleChange}
                        value={createForm.values.mobile} />
                </div>
                <div className="flex flex-col sm:flex-row px-4 py-2 w-full sm:w-4/5 lg:w-3/4">
                    <label
                        className="w-full sm:w-1/3 lg:w-1/4 text-sm lg:text-base tracking-wider"
                        htmlFor='subject'>Subjects</label>
                    <input
                        required
                        className="bg-gray-300 px-2 py-1 focus:bg-cyan-300 w-full sm:w-1/2 text-sm lg:text-base uppercase"
                        type='text'
                        name='subjects'
                        onChange={createForm.handleChange}
                        value={createForm.values.subjects} />
                </div>
                <div className="flex flex-col sm:flex-row px-4 py-2 w-full sm:w-4/5 lg:w-3/4">
                    <label
                        className="w-full sm:w-1/3 lg:w-1/4 text-sm lg:text-base tracking-wider"
                        htmlFor='joining'>Date of Joining</label>
                    <input
                        required
                        className="bg-gray-300 px-2 py-1 focus:bg-cyan-300 w-full sm:w-1/2 text-sm lg:text-base uppercase"
                        type='date'
                        name='joining'
                        onChange={createForm.handleChange}
                        value={createForm.values.joining} />
                </div>
                <div className="flex flex-col sm:flex-row px-4 py-2 w-full sm:w-4/5 lg:w-3/4">
                    <button type="submit" className="bg-blue-500 text-white text-base px-4 py-1 rounded-md hover:bg-green-500">Submit</button>
                </div>
            </form>
            {dialogHidden && (
                <dialog className="fixed top-0 flex flex-col items-center border rounded-md bg-gray-500 text-white">
                    <p className="text-xl  px-4 py-2 tracking-wider">Alert !</p>
                    <p className="text-xl  px-4 py-2 tracking-wider">Teacher created successfully</p>
                </dialog>
            )}

        </div>
    )
}
export default CreateTeacher;