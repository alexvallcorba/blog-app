import { Route, Switch } from 'react-router-dom'
// import Home from './screens/Home/Home'
import Posts from './screens/Posts/PostScreen'


function App() {
  return (
    <div className='app'>
      <Switch>
        <Route exact path="/" component={Posts}  />
      </Switch>
    </div>
  )
    
}

export default App;
