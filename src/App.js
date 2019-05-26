import React, { Component } from 'react';
import Menu from './components/Menu/Menu';
import { Link} from 'react-router-dom';
import './App.css';
import routes from './routes';
import { Route,Switch,BrowserRouter as Router} from 'react-router-dom';
import logo from "./logo.svg"
class App extends Component {
  render() {
    return (
     <Router>
         <div className="App">
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
                 <Link to={""} className="navbar-brand"> <img width="100" src={logo} className="App-logo" alt="logo" /></Link>
                 <button className="navbar-toggler" type="button" data-toggle="collapse"
                         data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                         aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                 </button>
                 <Menu></Menu>
             </nav>

             <div className="container">
                 {
                     this.showContentMenus(routes)
                 }
             </div>
         </div>
     </Router>
    );
  }
  showContentMenus = (routes) => {
      var result = null;
      if(routes.length > 0) {
          result = routes.map((route,index) => {
             return(
                 <Route
                     key={index}
                     path={route.path}
                     exact={route.exact}
                     component = {route.main}
                 />
             );

          });
      }
      // console.log(result)
      return <Switch>{result}</Switch>
  }
}

export default App;
