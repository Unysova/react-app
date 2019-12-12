import React from 'react';
import { Spin } from 'antd';
import style from './style.css'

const Loader = props => {
  return (
    <div className='loader'>
      <Spin />
    </div>
  );
};

export default Loader;
  