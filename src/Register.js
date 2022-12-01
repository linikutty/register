
import React, { useState } from "react";
import './App.css'
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
    // const [name, setName] = useState('vvvvvvv');

    //  const [get,setGet]=useState("");


    // const Name = (props) => {
    //     return (

    //         <p>welcome{props.name}</p>

    //     )Tabe
    // }

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

            //   console.log(data)
            setTableData(newData);


            //console.log (newData)
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


    //delete
    // const deletes=(index)=>{
    //     const newTable=tableData.filter(e=>e.index!==index);
    //     setTableData(newTable);

    // }

    return (

        <div className="container">
            <div className="form">
                <div className="col-sm-8">
                    <FormInput handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit} show={show} update={update} />
                    <Table tableData={tableData} setTableData={setTableData} setEditInd={setEditInd} setformInputData={setformInputData} setShow={setShow} />
                    {/* setName={setName} */}
                    {/* get={name} */}

                </div>
                <div className="col-sm-4">
                    {/* <div>{name}</div> */}
                </div>
            </div>
        </div>

    );
}

function FormInput({ handleChange, formInputData, handleSubmit, show, update }) {
    return (
        <div className='from'>
            <div><h1>User Registeration</h1></div>
            <form>
                <label for="Name" className="label">Name</label>
                <input type="text" onChange={handleChange} value={formInputData.fullName} name="fullName" className="form-control input" placeholder="Full Name" />

                <label for="Email" className="label">Email</label>
                <input type="email" onChange={handleChange} value={formInputData.emailAddress} name="emailAddress" className="form-control input" placeholder="Email Address" />

                <label for="Password" className="label">Password</label>
                <input type="password" onChange={handleChange} value={formInputData.password} name="password" className="form-control input" placeholder="password" />


                {!show ? <input type="button" value="Submit" onClick={handleSubmit} className="btn" /> : <input type="button" onClick={update} className="btn" value="Update" />}

            </form>

        </div>


    )
}

export default Register;
