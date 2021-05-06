import './App.css'
import HomePage from './pages/HomePage'
import {BrowserRouter, Route} from 'react-router-dom'
import {Switch} from '@material-ui/core'
import UserDataPage from './pages/UserDataPage'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <BrowserRouter>
          <Switch>
            <Route exact path={'/'}>
              <HomePage />
            </Route>
            <Route path={'/userData'}>
              <UserDataPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App
