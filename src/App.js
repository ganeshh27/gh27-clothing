import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'

import Homepage from '../src/pages/homepage/homepage.component';
import Hat from   '../src/pages/hat/hat.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component';
import SignInAndSignUpPage from '../src/pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {  auth} from "./firebase/firebase.utils";

class App extends React.Component {
  constructor()
 {
    super();
    this.state = {
      currentUser: null
    }
 } 
 
 unsubscribeFromAuth = null 

 componentDidMount() {
   this.unsubscribeFromAuth =  auth.onAuthStateChanged(user => {
     this.setState({currentUser: user})
     console.log(user)
   })
 }
 
 componentWillUnmount() {
   this.unsubscribeFromAuth();
 }
 render () {
  return (
    <div >
      <Header currentUser={this.state.currentUser}/>
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/shop' component={ShopPage} />
      <Route exact path='/shop/hats' component={Hat} />
      <Route exact path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}
}

export default App;
