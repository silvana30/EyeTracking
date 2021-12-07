import './App.css'
import HomePage from './pages/HomePage'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import UserDataPage from './pages/UserDataPage'
import theme from './CustomTheme'
import {ThemeProvider} from '@material-ui/core/styles'
import StartButtonPage from './pages/StartButtonPage'
import PicturePage from './pages/PicturePage'

function App() {
  return (
    <ThemeProvider theme={theme}>
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
              <Route path={'/startPage'}>
                <StartButtonPage />
              </Route>
              <Route path={'/framePage'}>
                <PicturePage />
              </Route>
            </Switch>
          </BrowserRouter>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App
