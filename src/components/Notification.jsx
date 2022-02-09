import React from 'react';

//style import 
import "../Css/notification.css"

const Notification = ({message, Class}) => {
    if(message== null){
        return null
    }
  return <div className={Class}>
      {message}
  </div>;
};

export default Notification;
