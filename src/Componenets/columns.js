import {Avatar} from 'antd';
import Delete from "./Delete";
import Update from './Update';
const columns = [
    {
      title: "Image",
      dataIndex: "imageUrl",
      key: "imageUrl",
      align:"center",
      render: (text, record) => {
        return (
          <div>
            {<Avatar src={record.imageUrl}style={{ width: '100%' ,height:'30%'}}/>}
          </div>
        );
      }
    },
    {
      
      title: 'FirstName',
      dataIndex: 'firstName',
      align:"center",
      filters: [
        {
          text: 'Louie',
          value: 'Louie',
        },
      ],
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value, record) => record.firstName.includes(value),
      sorter: ((a, b) => (a.firstName.toLowerCase() > b.firstName.toLowerCase() ? 1 : -1)),
      width: '20%',


    },
    
   {   
    title: 'LastName',
    dataIndex: 'lastName',
    align:"center",
    sorter: ((a, b) => (a.lastName.toLowerCase() > b.lastName.toLowerCase() ? 1 : -1)),
    width: '20%',



  },
  {   
    title: 'Email',
    dataIndex: 'email',
    align:"center",
  },
 
  {   
    title: 'Contact Number',
    dataIndex: 'contactNumber',
    align:"center",
  },


    {
      title: 'Age',
      dataIndex: 'age',
      sorter: ((a, b) => (a.age > b.age ? 1 : -1)),
    },
    {   
      title: 'Date De Naissance',
      dataIndex: 'dob',
      width: '20%',

    },
    {   
      title: 'Salary',
      dataIndex: 'salary',
      align:"center",
      sorter: ((a, b) => (a.salary > b.salary ? 1 : -1)),
  
    },
    
    {
      title: 'Address',
      dataIndex: 'address',
      align:"center",
      filters: [
        {
          text: 'Address1',
          value: 'Address1',
        },
        {
          text: 'Address2',
          value: 'Address2',
        },
      ],
      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: true,
      width: '20%',
    },
    { 
      title:'Action',
      align:"center",
      render : (record) =>{
        return(
        <>
        <Update record={record}></Update>
          <Delete record={record}></Delete>
        </>
      )
      },      width: '20%',

    },
  ];
  export default columns ;