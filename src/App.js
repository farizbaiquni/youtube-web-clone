import {lazy, Suspense} from 'react'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import * as ROUTES from './constans/routes'

function App() {

   const Dashboard = lazy(() => import('./pages/Dashboard'))
   const Search = lazy(() => import('./pages/Search'))
   const NotFound = lazy(() => import('./pages/NotFound'))
   const Watch = lazy(() => import('./pages/Watch'))

  return (
    <div className="App">
      <Router>
        <Suspense fallback={<h2>Loading...</h2>} >
          <Switch>
            <Route path={ROUTES.DASHBOARD} component={Dashboard} exact/>
            <Route path={ROUTES.SEARCH} component={Search}/>
            <Route patch={ROUTES.WATCH} component={Watch}/>
            <Route component={NotFound}/>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
