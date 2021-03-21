import { React, useEffect, useState } from 'react';
import '../../css/admin.css';
import { Toast, ToastHeader } from 'reactstrap';
import { dbService, storageService } from '../../fbase';

const UserList = ({allUsers}) => {
  const [userlist, setUserlist] = useState([]);

  useEffect(() => {
    setUserlist([]);
    allUsers.map(user => {
      setUserlist(userlist => [...userlist, user]);
    })
    return () => {
      setUserlist([]);
    }
  }, [allUsers])

  const RecentUser = userlist.map(user => (
    <Toast>
      <ToastHeader>
        <div className="spaceBetween">
          <div>{user.name}__</div>
          <div>{user.status}</div>
        </div>
      </ToastHeader>
      <div className="needMargin spaceBetween">
        <div>학번 : {user.studentid}</div>
        <div>학과 : {user.department}</div>
      </div>
      <div className="needMargin spaceBetween">
        <div>Rating : {user.rating}</div>
        <div>{user.time}</div>
      </div>
    </Toast>
  ))

  return (
    <div className="Box">
      {RecentUser}
    </div>
  );
};

export default UserList;
