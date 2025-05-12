import React from 'react'
import { connect } from 'react-redux'
import { resetfilterdata, setfilterdata } from '../Action'

const Filter = ({filter_data,setfilterdata,resetfilterdata}) => {
  const prod = ['Easy', 'Medium']
  return (
   <>
   <div className='container' style={{'justifyItems':'center'}}>
    <h2>Filter:</h2>
    <select name='filter' className='p-1' onClick={(e)=>(
      setfilterdata(e.target.value))}>
       {
        prod.map((item,index)=>(
          <option key={index} value={item}>{item}</option>
        ))
       }
    </select>
    {/* <button className='btn btn-primary m-2' onClick={()=>console.log(filterdata)} >Submit</button> */}
   </div>
   </>
  )
}
const mapStateToProps =  state => ({
  filter_data : state.filterreducer.filter_data
})

export default connect(mapStateToProps,{setfilterdata,resetfilterdata})(Filter)