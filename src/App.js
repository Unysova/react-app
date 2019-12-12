import React, { useEffect  } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter} from 'react-router-dom';
import Header from './components/Header/';
import Footer from './components/Footer/';
import Loader from './components/Loader/';
import { getUsers } from './store/actions/users';
import { getMe } from './store/actions/auth';
import './App.css';

import AuthForm from './components/AuthForm/'
import UserCard from './components/UserCard';
import UsersPage from './pages/Users';

const App = props => {
  const { alreadyLogin, showLoader, getUsers, getMe, roles, me } = props;
  const initRequests = async () => {
    await getUsers();
    await getMe();
  }

  useEffect(() => {
    if(!alreadyLogin) return
    initRequests();
  }, [alreadyLogin]);
  return (
    <>
      <Header/>
      <Switch>
        {!alreadyLogin &&
          <Route 
            path='/' 
            component={AuthForm}
            />
        }
        {(alreadyLogin && roles === 'user') &&
          <Route 
            path='/' 
            exact 
            // component={UserCard}
            render={(props) => 
              <UserCard 
                {...props} 
                user={me} />}
            
          />
        }

        {(alreadyLogin && roles === 'admin') &&
          <Route 
            path='/' 
            exact 
            component={UsersPage}
          />
        }
        
      </Switch>
      <Footer/>

      {showLoader && <Loader/>}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    alreadyLogin: state.authReducer.alreadyLogin,
    showLoader: state.mainReducer.showLoader,
    roles: state.authReducer.roles,
    me: state.authReducer.userInfo,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers()),
    getMe: () => dispatch(getMe()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));