import React from 'react'
import { Layout } from './layout/Layout'
import { Home } from './pages/home/Home'

export const Main = () => {
  return (
    <Layout>
        <div>
            <Home />
        </div>
    </Layout>
  )
}
