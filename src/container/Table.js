import React from 'react'
import { connect } from 'react-redux'
import {settablenumber} from "../Action"

const Table = ({table_number,settablenumber}) => {
    const data = [1,2,3,4,5,6,7, 8,9,10]
    const inactive = "btn btn-outline-primary p-3 m-2"
    const active = 'btn bg-primary p-3 m-2'
  return (
    <>
    { data.length === 0 ?
    <div className='spinner spinner-circle'>
        <h2>loading...</h2>
    </div>
    :
    <center>
    <div>
        {
        data.map((num,index)=>(
          <div style={{display:'inline'}} key={index}>
            <button  className={table_number === num?active: inactive} onClick={()=>{
              settablenumber(num)
            }}>{num}</button>
            </div>
        ))
    }
    </div>
    </center>
    
    }
    </>
  )
}
const mapStateToProps = state => ({
  table_number : state.tablereducer.table_number }
)

export default connect(mapStateToProps,{settablenumber})(Table)