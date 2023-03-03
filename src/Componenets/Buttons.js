import React from 'react';
import { useDispatch  } from 'react-redux';
import {  addallData ,deleteallData} from '../Services/Service';
import { Button} from 'antd';
import Loading from './Loading';
const Buttons = () => {
    const dispatch = useDispatch();

    const Add  =()=>{
        dispatch(addallData())
    }
      const Deleteall = () =>{
        dispatch(deleteallData())
      }
  return (
    <div>
    <Button onClick={() => {
        Add()}}>Add the Api Data</Button>
       <Button onClick={() => {
        Deleteall()}}>Delete all Data</Button><Loading/></div>
  );
};
export default Buttons;