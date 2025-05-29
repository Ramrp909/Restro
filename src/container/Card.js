import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addorder, resetfilterdata, resettablenumber } from '../Action'

const Card = ({filter_data,table_number,addorder}) => {
    const [data,setData] = useState([])
    const [cloneData,setCloneData] = useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/recipes').then(
            res => res.json(

            ))
            .then(
                json => {
                    setData(json.recipes)
                    setCloneData(json.recipes)
                    
                }
            
            ); 
    },[])

    useEffect(()=>{
        if(filter_data !== 'Easy'){
            let specific = cloneData.filter(recipes => recipes.difficulty === filter_data)
            setData(specific)
        }
        else (
            setData(cloneData)
        )
    },[filter_data])
    const Handler = async (id,name,cuisine,image,caloriesPerServing,table_number) => {
        if (table_number !== null) {
            await addorder(id,name,cuisine,image,caloriesPerServing,table_number)
            await resettablenumber()
            await resetfilterdata()
            alert('order placed successfully')
        }
        else {
            alert('please select the table number')
        }
    }
  return (
    <>
        <div>
            <center>
                {data.length > 0 ?
                <div className="container">
                    <div className="row">
                       {data.map((item,index)=>(
                        <div key={index} className="col-md-4"style={{padding:"3px"}}>
                            <div className="card" style={{width:"18rem", padding:"5px"}}>
                                <img src={item.image} className='card-img-top' alt="food img"/>
                            <div className="card-body">
                                <div className="card-title">{item.name}</div>
                                <h2 className='text-lg text-green-900'>{item.cuisine}</h2>
                                <button className='btn btn-success'>Rs.{item.caloriesPerServing}</button>
                                <button className="btn btn-primary" onClick={()=>
                                    Handler(item.id,item.name,item.cuisine,item.image,item.caloriesPerServing,table_number)
                                }>Order</button>
                            </div>
                          </div>
                            </div>
                         
                       ))}
                    </div>
                </div>
                :
                <h2>Loading...</h2>
                }
            </center>
        </div>
    </>
  )
}
const mapStateToProps = state => ({
    filter_data : state.filterreducer.filter_data,
    table_number: state.tablereducer.table_number
})
export default connect(mapStateToProps,{addorder})(Card)