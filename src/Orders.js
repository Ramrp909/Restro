import React from 'react'
import { connect } from 'react-redux'

const Orders = ({list}) => {
  return (
    <div>
      <center>
                {list.length > 0 ?
                <div className="container">
                    <div className="row">
                       {list.map((item,index)=>(
                        <div key={index} className="col-md-4"style={{padding:"3px"}}>
                            <div className="card" style={{width:"18rem", padding:"5px"}}>
                                <img src={item.image} className='card-img-top' alt="food img"/>
                            <div className="card-body">
                                <div className="card-title">{item.name}</div>
                                <h2>{item.cuisine}</h2>
                                <h2>Rs.{item.caloriesPerServing}</h2>
                                <h2>Table number:{item.table_number}</h2>
                            </div>
                          </div>
                            </div>
                       ))}
                    </div>
                </div>
                :
                <h2 className='text-primary'>No Order placed yet...</h2>
                }
            </center>
    </div>
  )
}
const mapStateToProps = state =>({
  list : state.orderreducer
})

export default  connect(mapStateToProps)(Orders);
