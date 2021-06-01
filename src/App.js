import {lazy, Suspense} from 'react'

function App() {

   const Dashboard = lazy(() => import('./pages/Dashboard'))

  return (
    <div className="App">
      <Suspense fallback={<h2>Loading...</h2>} >
        <Dashboard />
      </Suspense>
    </div>
  );
}

export default App;
