import React, { useState } from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import {userColumns ,userRows} from '../../datatablesource'
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch'
import { baseUrl } from '../../constants/baseUrl'
  

const Datatable = () => {

  // const { data , loading , error } = useFetch(`${baseUrl}/users`)
  const [data , setData] = useState(userRows)

  const handleDelete = (id)=>{
    setData(data.filter(item => item.id !== id))
  }

    const actionColumn = [
      {
        field:"action",
        headerName:"Action",
        width:200,
        renderCell:(params) => {
          return (
            <div className="cellAction">
              <Link to="/users/test" style={{textDecoration:"none",cursor:"pointer"}}><div className="viewButton">View</div></Link>
              <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
            </div>
          )
        }
      }
    ]

  return (
    <div className='datatable'>
        <div className="datatableTitle">
          Add New User
          <Link to="/users/new" style={{ textDecoration:"none"}} className="link">
          Add New
          </Link>
        </div>
         <DataGrid
        rows={data}
        className="datagrid"
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
       
      />
    </div>
  )
}

export default Datatable