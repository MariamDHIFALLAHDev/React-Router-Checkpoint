import React from 'react';
import { BrowserRouter,Redirect, Link, Route, Switch } from "react-router-dom";
import './App.css';
import  Home  from './components/Home'
import Category from './components/Category'
import Products from './components/Products'
import Login ,{ auth } from './components/login';
import Admin from './components/admin'
 

function App() {
  
  const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props =>
          auth.userAuth === true ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }
      />
    )
  }
  
  
  return (
    <div className="App">
      <BrowserRouter>
      <nav className='navbar navbar-expand-lg navbar-light bg-dark' style={{display: 'flex',
  justifyContent: 'space-around', alignItems:'center'}} >
           <ul className='nav-li'>
            <li>
            <Link to='/'>
            Home
            </Link> 
            </li>
            <li>
              <Link to='/category'>
              Category
              </Link>
            </li>
            <li>
              <Link to='/products'>Products</Link>
             </li>
             <li>
               <Link to='/admin'>Admin</Link>
             </li>
            </ul>
            </nav>
            <Switch>
            <Route path="/login" component={Login} />
            <Route path='/' exact component={Home}/>
            <Route path='/category' component={Category}/>
            <PrivateRoute path="/admin" component={Admin} />
            <Route path='/products' component={Products}/>
           </Switch>
       </BrowserRouter>
    
    </div>
  );
}

export default App;
