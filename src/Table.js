
function Table({tableData,setTableData,setformInputData,setShow,setEditInd}){

    const DeleteAll=()=>{
        
        setTableData([]);

    }
//njknjk
    const deletes=(index)=>{
         //console.log(index);
        const newTable=tableData.filter(e=>index);
        //
        newTable.splice(index,1);
        //console.log(newTable);
        setTableData(newTable);
    }
     
    const edits=(index)=>{
            // formInputData(tableData[index]);
            console.log(index);
            setformInputData(tableData[index]) ;
            setShow(true);
            setEditInd(index);

            


            
    }
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Full Name</th>
                    <th>Email Address</th>
                    <th>password</th>
                    <th><button onClick={DeleteAll}>DeleteAll</button></th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
            {
                tableData.map((data, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{data.fullName}</td>
                            <td>{data.emailAddress}</td>
                            <td>{data.password}</td>
                            <td><button className="del" onClick={()=>{deletes(e=>index)}}>X</button></td>
                           
                            <td ><button onClick={()=>{edits(index)}}>Edit</button></td>
                           
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}
export default Table;