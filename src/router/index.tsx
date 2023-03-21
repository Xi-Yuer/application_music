import React from 'react'
import { Navigate, RouteObject } from 'react-router-dom'
import { lazy } from 'react'

const Discover = lazy(() => import('@/pages/discover/index'))
const Mine = lazy(() => import('@/pages/mine/index'))
const Focus = lazy(() => import('@/pages/focus/index'))
const DownLoad = lazy(() => import('@/pages/download/index'))

const Recommend = lazy(() => import('@/pages/discover/pages/recommend/index'))
const Radio = lazy(() => import('@/pages/discover/pages/radio/index'))
const Ranking = lazy(() => import('@/pages/discover/pages/ranking/index'))
const Singer = lazy(() => import('@/pages/discover/pages/singer/index'))
const Songs = lazy(() => import('@/pages/discover/pages/songs/index'))
const Album = lazy(() => import('@/pages/discover/pages/album/index'))

const PlayList = lazy(() => import('@/pages/playlist/index'))

const routes: RouteObject[] = [
  // 路由重定向
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      { path: '/discover', element: <Navigate to="/discover/recommend" /> },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/radio',
        element: <Radio />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/singer',
        element: <Singer />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      },
      {
        path: '/discover/album',
        element: <Album />
      },
      {
        path: '/discover/playlist/:id',
        element: <PlayList />
      }
    ]
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/download',
    element: <DownLoad />
  }
]

export default routes
