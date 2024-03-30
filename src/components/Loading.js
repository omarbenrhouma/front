import React from 'react';
import { Spin} from 'antd';
import {  useSelector  } from 'react-redux';

const Loading =({name})=>{
    const loading = useSelector((state) => state.isLoading);

    if (loading) {
      return     <Spin  size='meduim'/>;
    }else{return name } 
  }
export default Loading;