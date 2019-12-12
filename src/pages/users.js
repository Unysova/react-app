import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import UserCard from '../components/UserCard';
import NewUser from '../components/NewUser';
import 'antd/dist/antd.css';

const UsersPage = props => {
  const { usersList } = props;
  const [departments, setDepartments] = useState(new Map());

  useEffect(() => {
    const newDepartments = new Map();
    for( let user of usersList) {
      let department = user.department;
      if (!newDepartments.has(department)) {
        newDepartments.set(department, [user]);
      } else {
        let val = [...newDepartments.get(department), user];
        newDepartments.set(department, [...val]);
      }
      setDepartments(new Map([...newDepartments]));
    }
  }, [usersList]);

  const setByDepartments = (department) => {
    const users = departments.get(department);
    const usersList = users.map((user, index)=> {

      return(<UserCard key={index} user={user}/>) 
    });
    return usersList
  }

  const departmensList = Array.from(departments.keys()).map((department, index)=> {
    return (<React.Fragment key={index}>
      <h1>{department}</h1>
      <div className='users-list'>
        {setByDepartments(department)}
      </div>
    </React.Fragment>)
  })
  
  return (
    <div className='users-page'>
      <div className='wrapper'>
      <h1>Список сотрудников</h1>
      {usersList ? departmensList : null}
      <NewUser/>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    usersList: state.usersReducer.usersList
  }
}

export default connect(mapStateToProps)(UsersPage);
  