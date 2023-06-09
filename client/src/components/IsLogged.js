import React, { useEffect, useContext } from 'react';
import { AuthContext } from './AuthContext';

export default function IsLogged() {
    const { login, user } = useContext(AuthContext);

    useEffect(() => {
        const cookieData = document.cookie
          .split(';')
          .find(cookie => cookie.trim().startsWith('userData='));

        if (cookieData) {
          const userString = decodeURIComponent(cookieData.split('=')[1]);
          const user = JSON.parse(userString);
          login(user);
        }
      }, []);

    return (
        <></>
    )
}