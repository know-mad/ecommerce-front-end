import React, { useState } from 'react'
import Layout from '../core/Layout'
import { isAuthenticated } from '../auth'
import { Link } from 'react-router-dom'


const ManageProducts = () => {



  return (
    <Layout
    className='container-fluid'
    title='Manage Products'
    description="Perform CRUD on products"
    >
    <div className='row'>
      <div>...</div>
    </div>

    </Layout>
  )
}

export default ManageProducts
