import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [{ status }, setStatus] = useState({ status: 'online' });

  useEffect(() => {
    const handlerOnlineStatus = (e) => {
      setStatus({
        status: e.target.navigator.onLine ? 'online' : 'offline',
      });
    };
    
    window.addEventListener('offline', handlerOnlineStatus);
    window.addEventListener('online', handlerOnlineStatus);

    return () => {
      window.removeEventListener('offline', handlerOnlineStatus);
      window.removeEventListener('online', handlerOnlineStatus);
    };
  }, [status]);

  const onlineStatus = status === 'online';
  return (
    <>
      <div className={onlineStatus ? 'status' : 'status status_offline'}>
        {status}
      </div>
    </>
  );
};


export default ConnectionStatus;
