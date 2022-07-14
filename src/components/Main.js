import React from 'react'
import { Layout } from './layout/Layout'
import { Home } from './pages/home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import All from './pages/all/All';
import { Other } from './pages/others/Other';
import { hashHistory } from 'react-router';

export const Main = () => {
  return (
    <Layout>
        <div>
          <Router>
            <Routes>
              <Route path='/' element={<Home />} exact />
              <Route path='/hamsi' element={<All />} />
              <Route path='/hamsi/:id' element={<Other />} />

            </Routes>
          </Router>
        </div>
    </Layout>
  )
}
