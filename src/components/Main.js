import React from 'react'
import { Layout } from './layout/Layout'
import { Home } from './pages/home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import All from './pages/all/All';


export const Main = () => {
  return (
    <Layout>
        <div>
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/hamsi' element={<All />} />

            </Routes>
          </Router>
        </div>
    </Layout>
  )
}
