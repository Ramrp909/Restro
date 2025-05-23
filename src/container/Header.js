import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = ({count}) => {
  return (
   <>
    <nav className="navbar navbar-light bg-light">
        <div>
            <h2>Restaurant</h2>
        </div>
        <div>
            <button className='btn btn-primary'>
                <Link style={{color:'white', textDecoration:'none'}} to='/orders'>Orders</Link><span className='badge bg-primary'>{count}</span></button>
        </div>
    </nav>
   </>
  )
}

const mapStateToProps = state => ({
    count : state.orderreducer.length
})
export default connect(mapStateToProps)(Header)