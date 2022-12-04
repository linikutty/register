
import React, { useState } from "react";
import './index.css'
import Table from "./Table";



function Register() {
    const [tableData, setTableData] = useState([])

    const [formInputData, setformInputData] = useState(
        {
            fullName: '',
            emailAddress: '',
            password: ''
        }
    );
    const [show, setShow] = useState(false);
    const [editInd, setEditInd] = useState();
   

    const handleChange = (evnt) => {
        const newInput = (data) =>
        (
            { ...data, [evnt.target.name]: evnt.target.value }
        )
        setformInputData(newInput)
    }

    const handleSubmit = (evnt) => {
        evnt.preventDefault();

        const checkEmptyInput = !Object.values(formInputData).every(res => res === "")
        if (checkEmptyInput) {
            const newData = (data) => ([...data, formInputData])
            setTableData(newData);
            const emptyInput = { fullName: '', emailAddress: '', password: '' }
            setformInputData(emptyInput)
        }
    }

    const update = () => {
        tableData.splice(editInd, 1, formInputData);

        setTableData([...tableData]);
        setformInputData({ fullName: "", emailAddress: '', password: '' });

        setShow(false);
        // window.location.reload();

    }
    return (

        <div className="container register">
            
                    <FormInput handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit} show={show} update={update} />
                    <Table tableData={tableData} setTableData={setTableData} setEditInd={setEditInd} setformInputData={setformInputData} setShow={setShow} />
                    {/* setName={setName} */}
                    {/* get={name} */}

                
                
           
        </div>

    );
}

function FormInput({ handleChange, formInputData, handleSubmit, show, update }) {
    return (
        <div className='from' key={1}>
            <div><h1 className="head">User Registeration</h1></div>
            <form>
                <label className="label">Name</label>
                <input type="text" onChange={handleChange} value={formInputData.fullName} name="fullName" className="form-control input" placeholder="Full Name" />

                <label  className="label">Email</label>
                <input type="email" onChange={handleChange} value={formInputData.emailAddress} name="emailAddress" className="form-control input" placeholder="Email Address" />

                <label  className="label">Password</label>
                <input type="password" onChange={handleChange} value={formInputData.password} name="password" className="form-control input" placeholder="password" />


                {!show ? <input type="button" value="Submit" onClick={handleSubmit} className="btn" /> : <input type="button" onClick={update} className="btn" value="Update" />}

            </form>

        </div>


    )
}

export default Register;
