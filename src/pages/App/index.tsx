import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ToTopButton from '../../components/ToTopButton';
import Homepage from '../Homepage';
import RegistrationPage from '../RegistrationPage';
import LoginPage from '../LoginPage';

function App() {
  return (
    <div>
     <Header />
     <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/registration">
        <RegistrationPage />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Redirect to="/404" />
    </Switch>
     <Footer />
     <ToTopButton />
    </div>
  );
}

export default App;
