import { Route, Switch } from 'react-router-dom'
import Home from './screens/Home/Home'


function App() {
  return (
    <div className='app'>
      <Switch>
        <Route exact path="/" component={Home}  />
        
      </Switch>
    </div>
  )
    
}

export default App;
