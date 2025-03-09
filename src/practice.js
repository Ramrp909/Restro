// // // // import React from 'react'

import { dblClick } from "@testing-library/user-event/dist/click"

import React,{useState} from "react";
import Test from './Test';

const App = () => {
  const [nam,setNam] = useState({
    name: 'Ram',
    age: 38
  })
  const {name,age} = nam; //destructuring


  const [names,SetNames] = useState ('')

  const [data,SetData] = useState({
      email: '', 
      password:''
    })

const changeHandler = e => {
  SetData({...data,[e.target.name]:e.target.value})
}
const submitHandler = e => {
  e.preventDefault();
  if (data.password.length < 5)
    {alert('password length is short')}
  else {console.log(data)}
  console.log(data)
}
  return (
    <div>
      <h2>Hello {name},{age}</h2>

      {/* Onclick event handler */}
      <button onClick={()=> alert('Hi User')}>Onclick</button> <br/>

// {/* Onchange event handler */}
      Names: {names}<br/>
      <input type='text' names='names' onChange={(e)=>SetNames(e.target.value)}/>

      {/* onsubmit event handler */}
      <div>
        <center>
          <form onSubmit={submitHandler}>
            <label style={{'color': 'blue','fontFamily':'SansFransciso'}}>Email:</label>
            <input type='text' name='email' onChange={changeHandler}/><br/>
            <label>Password:</label>
            <input type='password' name='password' onChange={changeHandler}/><br/>
            <input type='submit' value='Login' className='btn btn-primary'/>
          </form>
        </center>
      </div>
      <Test name={name} age={age}/>
    </div>
  )
}
export default App;

//function
const App = () => {
  let name = "Ram"
  return (
    <div>
    <center>
    <h2>Welcome {name}</h2>
    </center>
    </div>
  )
}
class component
class App extends React.Component{
  render () {
    let name = "Prasad"
    return(
    <div>
    <center>
    <h2>Welcome {name}</h2>
    </center>
    </div>)
  }
}
const Test = (props) => {
    return (
        <div>
        <center><h1> Functional Test Component<br></br>
            Name: {props.name} and Age: {props.age}
        </h1>
        </center>
        </div>
    )
}
export default Test;

{/*Route - path url - Path params - query params*/}
//App.js
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Dashboard from './Dashboard'
import About from './About';
// import Pagenotfound from './Pagenotfound';

const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/Dashboard" element={<Dashboard />}/>
         <Route path="/About" element={<About/>}/>
         <Route path="*" element={<Pagenotfound />}/>
       </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
{/*Home*/}
import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';

const Home = () => {
  const user="Ram"
  return (
    <div>
        <h3>Welcome to Home Page</h3><br/>
        {/* Query params */}
        <Link to={`/dashboard?name=${user}&age=${28}`} className='Link'>Dashboard</Link>
        <Link to='/About' className='Link'>About</Link>

    </div>
  )
}

export default Home
Dashboard
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// Query params - useLocation

const Dashboard = () => {
  let {search}= useLocation();
  let params = new URLSearchParams(search) //query params
  return (
    <div>
        Dashboard Page<br/><p>
          Name:{params.get('name')},age:{params.get('age')}
        </p>
        <Link to='/' >back to Home</Link>
    </div>
  )
}

// export default Dashboard

//firebaseDB
To post data to db
firebaseDB.child('data object name').push(data,
    err =>{
        if(err){
            alert(console.log(err))
        }
    }
)

// // //to display posted data
// // create an useState func
// useEffect used to render func componenet
//to display posted data using useEffect
useEffect(()=>{
    firebaseDB.child('dataObjectName').on('value',details=>
    setGetData(details.val())
    )
},[])
{'func getData' &&
    Object.keys(getData).map(key=>{getData.key[item]})
}

//to delete posted data in db
//create a deleteHander
deleteHandler = key = {
    firebaseDB.child(`dataobjectname/${key}`).remove(
        //any errors to find - code if err 
    )  //backticks `` is used to determine key
}


//POST DATA - DELETE DATA - UPDATE DATA - FIREBASE DB
import React,{useEffect, useState}from 'react';
import firebaseDB from './firebase';
import {useNavigate} from 'react-router';

const Register = () => {
  let navigate = useNavigate();//data to push to update form
  const [data,setData] = useState({
    firstname:'',
    lastname:'',
    email:'',
  })

const [getData,setGetData] = useState({})
useEffect(()=>{ //display posted data
  firebaseDB.child('register').on('value',details =>{
    setGetData(details.val()); //details.val is a func
  })
},[])
const {firstname,lastname,email} = {...data}
const changeHandler = e => {
  setData({...data,[e.target.name]:e.target.value})
}

const submitHandler = async(e) => {
  e.preventDefault();
  var dataAdded =  await firebaseDB.child('register').push( //post the data in db
    data,
    err => {
      if (err) {
        console.log(err)
      }
      else {alert('Data added')}
    }
  )
  setData({
    firstname:'',
    lastname:'',
    email:'',
  })

  // fetch('https://restro-8b919-default-rtdb.firebaseio.com/data.json',
  // {
  //   method:"POST",
  //   body: JSON.stringify(data),
  //   headers: {"Contet-Type":"application/json; charset=UTF-8",
  //   }}
  // ).then(res => alert('Data posted')).catch(err => console.log(err))
}
const deleteHandler = key => {
  firebaseDB.child(`register/${key}`).remove( //deleting the branch in db usig key
    err => {
      if (err) {
        console.log(err)
      }
    }
  )
}
return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
            <h3>RegisterForm</h3>
          <label>First Name</label><br/>
          <input type='text' name='firstname' value={firstname} onChange={changeHandler}/><br/>
          <label>Last Name</label><br/>
          <input type='text' name='lastname' placeholder="last Name" value={lastname}onChange={changeHandler}/><br/>
          <label>Email</label><br/>
          <input type='text' name='email' value={email} onChange={changeHandler} placeholder='Enter your mail'/><br/>
          <input type='Submit' value="Post data"/>
        </form>
      </center>
    <div >
      {getData && 
      Object.keys(getData).map(key=>
        <div style={{border:'2px solid black',margin:'5px'}}>
          <p>Firstname:{getData[key].firstname}</p>
          <p>Lastname:{getData[key].lastname}</p>
          <p>Email:{getData[key].email}</p>

          <button onClick={()=> navigate(`/update?firstname=${getData[key].firstname}&lastname=${getData[key].lastname}&email=${getData[key].email}&key=${key}`)} //used query parameter to post data to updateform
          >Update</button>

          <button
          onClick={()=> deleteHandler(key)}>Delete</button>
        </div> )
      }
    </div>
    </div>
  )
}

export default Register;

//UPDATE FORM
import React,{useState, useEffect}from 'react';
//import {URLSearchParams} from 'react-router-dom'
import { useLocation} from 'react-router-dom';
import firebaseDB from './firebase';

const UpdateForm = () => {
let {search}= useLocation();
let query = new URLSearchParams(search);
//let query = new URLSearchParams(useLocation().search);//queryparams to get data u
const [data,setData] = useState({
  firstname:'',
  lastname:'',
  email:''
})

const changeHandler = e => {
  setData({...data,[e.target.name]:e.target.value})
}
useEffect(()=>{
  setData({...data,
    firstname:query.get('firstname'),
    lastname:query.get('lastname'),
    email:query.get('email'),
  })
},[])


const submitHandler = e => {
  e.preventDefault();
  firebaseDB.child(`register/${query.get('key')}`).set( //post the data in db, query.key to get key, set to post the updated data
    data,
    err => {
      if (err) {
        console.log(err)
      }
      else {alert('Data updated')}
    }
  )
  }

  // fetch('https://restro-8b919-default-rtdb.firebaseio.com/data.json',
  // {
  //   method:"POST",
  //   body: JSON.stringify(data),
  //   headers: {"Contet-Type":"application/json; charset=UTF-8",
  //   }}
  // ).then(res => alert('Data posted')).catch(err => console.log(err))
return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <h3>UpdateForm</h3>
          <label>First Name</label><br/>
          <input type='text' name='firstname' value={data.firstname} onChange={changeHandler}/><br/>
          <label>Last Name</label><br/>
          <input type='text' name='lastname' value={data.lastname} onChange={changeHandler}/><br/>
          <label>Email</label><br/>
          <input type='text' name='email' value={data.email} onChange={changeHandler}/><br/>
          <input type='submit' value="Update"/>
        </form>
      </center>
    </div>
  )
}
export default UpdateForm;
