import Navbar from './navbar';
import Home from './home'
import Create from './Create'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlogDetails from './BlogDetails';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
      <Switch>
        <Route exact path="/home">
          <Home/>
        </Route>
        <Route exact path="/create">
          <Create/>
        </Route>
        <Route exact path="/blogs/:id">
          <BlogDetails/>
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
