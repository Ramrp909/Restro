import React from 'react'
import Header from './container/Header'
import Table from './container/Table'
import Filter from './container/Filter'
import Card from './container/Card'
import './index.css'

export const Home = () => {
  return (
    <>
    <div>
    <Header />
    <Table />
    <div>
      <h2 className="text-red-500 sm:text-blue-500">hello world</h2>
    </div>
    <Filter />
    <Card />
    </div>
  
    </>
    
  )
}
