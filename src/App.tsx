import React, { useEffect, Suspense, lazy } from 'react'
import { Router, Redirect, Route, Switch } from 'react-router-dom'
import { ResetCSS } from '@jackinu-uikit'
import BigNumber from 'bignumber.js'
import useEagerConnect from 'hooks/useEagerConnect'
import { useFetchPriceList, useFetchPublicData } from 'state/hooks'
import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import ToastListener from './components/ToastListener'
import PageLoader from './components/PageLoader'
import EasterEgg from './components/EasterEgg'
import Pools from './views/Pools'
import history from './routerHistory'
import Landing from './views/Landing'
import Header from './views/Landing/components/header'
import Footer from './views/Landing/components/footer'



// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page
// const Home = lazy(() => import('./views/Home'))
const Farms = lazy(() => import('./views/Farms'))
const NotFound = lazy(() => import('./views/NotFound'))

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  // Monkey patch warn() because of web3 flood
  // To be removed when web3 1.3.5 is released
  useEffect(() => {
    console.warn = () => null
  }, [])

  useEagerConnect()
  useFetchPublicData()
  useFetchPriceList()

  return (
    <Router history={history}>
      <ResetCSS />
      <GlobalStyle />
      {/* <Menu> */}
      
        <Suspense fallback={<PageLoader />}>
          <Switch>
            <Route path='/' exact>
              <Landing/>
            </Route>
            {/* <Route path="/" exact>
              <Redirect to="/farms" />
            </Route> */}
            <Route path="/farms">
              <Farms />
            </Route>
            <Route path="/pools">
              <Pools />
            </Route>
            {/* Redirect */}
            <Route path="/staking">
              <Redirect to="/pools" />
            </Route>
            <Route path="/syrup">
              <Redirect to="/pools" />
            </Route>
            <Route path="/nft">
              <Redirect to="/collectibles" />
            </Route>
            {/* 404 */}
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      {/* </Menu> */}
      <Footer/>
      <EasterEgg iterations={2} />
      <ToastListener />
    </Router>
  )
}

export default React.memo(App)
