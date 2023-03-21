import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router/index'
import Header from './components/header'
import Footer from './components/footer'
import AppPlayerBar from './pages/player/app-player-bar'
import { Skeleton, ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { theme } from './base-ui/theme'
import AutoTop from './components/auto-top'

function App() {
  return (
    <div className="App">
      <ConfigProvider locale={zhCN} theme={theme}>
        <AutoTop>
          <Header />
          <Suspense fallback={<Skeleton />}>{useRoutes(routes)}</Suspense>
          <Footer />
          <AppPlayerBar />
        </AutoTop>
      </ConfigProvider>
    </div>
  )
}

export default App
