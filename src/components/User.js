import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../actions/index';

const User = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers(userData));
    return () => {
      // cleanup
    };
  }, []);

  if (userData.loading) {
    return <h2>Loading...</h2>;
  }
  if (userData.error) {
    return <h2>{userData.error}</h2>;
  }
  return (
    <div>
      <h2>User List</h2>
      <div>
        {
          userData && userData.users && userData.users.map((user) => (
            <p key={user.id}>{user.name}</p>))
        }
      </div>
    </div>
  );
};

export default User;
