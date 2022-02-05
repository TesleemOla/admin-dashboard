import React from 'react';

const Notification = ({message, Class}) => {
    if(message== null){
        return null
    }
  return <div className={Class}>
      {message}
  </div>;
};

export default Notification;
