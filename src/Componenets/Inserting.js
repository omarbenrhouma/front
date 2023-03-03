import React, { useState } from 'react';
import { useDispatch  } from 'react-redux';
import { Modal,Button, Input} from 'antd';
import { Ajoute} from '../Services/Service';

const Inserting = () => {
    const dispatch = useDispatch();
    const [newData, setNewData] = useState({});
    const[isInserting,setIsInserting]=useState(false);
    const resetInsert = () => {
        setIsInserting(false);
        setNewData({});
      };
      const onOpen = (e) => {
        setIsInserting(true);
    
      };  const Bouton = (record) =>{
        return(
          <>
      <Button type="primary"  onClick={(e) => {
        onOpen (e)}} block >
    Ajouter
    </Button>
    </>
    
    )}
  return (
    <div>
        <Bouton></Bouton>
    <Modal
    title="inserer"
    visible={isInserting}
    okText="Save"
    onCancel={() => {
      resetInsert();
    }}
    onOk={() => {
      dispatch(Ajoute(newData));
      resetInsert();
    }}
  >
    <output>FirstName :</output>
    <Input
      
      value={newData?.firstName}
      onChange={(e) => {
        setNewData((pre) => {
          return { ...pre, firstName: e.target.value };
        });
      }}
    />
    <output>lastName :</output>
    <Input
      value={newData?.lastName}
      onChange={(e) => {
        setNewData((pre) => {
          return { ...pre, lastName: e.target.value };
        });
      }}
    />      
    <output>email :</output>  
    <Input
      value={newData?.email}
      onChange={(e) => {
        setNewData((pre) => {
          return { ...pre, email: e.target.value };
        });
      }}
    />
    <output>contactNumber :</output>
    <Input
      value={newData?.contactNumber}
      onChange={(e) => {
        setNewData((pre) => {
          return { ...pre, contactNumber: e.target.value };
        });
      }}
    />
    <output>age :</output>
    <Input
      value={newData?.age}
      onChange={(e) => {
        setNewData((pre) => {
          return { ...pre, age: e.target.value };
        });
      }}

    />
    <output>date de naissance :</output>
    <Input
      value={newData?.dob}
      onChange={(e) => {
        setNewData((pre) => {
          return { ...pre, dob: e.target.value };
        });
      }}

    />
    <output>salary :</output>
    <Input
      value={newData?.salary}
      onChange={(e) => {
        setNewData((pre) => {
          return { ...pre, salary: e.target.value };
        });
      }}

    />
    <output>address :</output>
    <Input
      value={newData?.address}
      onChange={(e) => {
        setNewData((pre) => {
          return { ...pre, address: e.target.value };
        });
      }}

    />
  </Modal>
  </div>
  );
};
export default  Inserting;