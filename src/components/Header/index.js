import React from 'react';
import { logout } from '../../store/actions/auth'
import { connect } from 'react-redux';
import style from './style.css'

const Header = props => {
  const { alreadyLogin, logout } = props;
  return (
    <header>
      <div className='wrapper'>
        <p>OOO Рога и копыта</p>
        {alreadyLogin &&
          <button onClick={logout}>Выйти</button>
        }
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    alreadyLogin: state.authReducer.alreadyLogin,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);
  