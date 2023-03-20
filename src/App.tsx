import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router/index'
import Header from './components/header'
import Footer from './components/footer'
import AppPlayerBar from './pages/player/app-player-bar'
import { Skeleton } from 'antd'

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<Skeleton />}>{useRoutes(routes)}</Suspense>
      <Footer />
      <AppPlayerBar />
    </div>
  )
}

export default App
