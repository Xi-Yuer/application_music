import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router/index'
import Header from './components/header'
import Footer from './components/footer'
import AppPlayerBar from './pages/player/app-player-bar'
import { Skeleton, ConfigProvider, Spin } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { useAppSelector } from './store'
import { shallowEqual } from 'react-redux'

function App() {
  const { isLoading } = useAppSelector((state) => state.loading, shallowEqual)
  return (
    <div className="App">
      <ConfigProvider locale={zhCN}>
        <Spin spinning={isLoading} tip="Loading...">
          <Header />
          <Suspense fallback={<Skeleton />}>{useRoutes(routes)}</Suspense>
          <Footer />
        </Spin>
        <AppPlayerBar />
      </ConfigProvider>
    </div>
  )
}

export default App
