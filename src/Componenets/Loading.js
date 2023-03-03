import React from 'react';
import { Spin} from 'antd';
import {  useSelector  } from 'react-redux';

const Loading =()=>{
    const loading = useSelector((state) => state.loading);

    if (loading) {
      return     <Spin  size='meduim'/>
      ;
    }
  }
export default Loading;