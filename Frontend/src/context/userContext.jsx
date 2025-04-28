import React, {creatContext, useState} from 'react';

const UserProvider = ({children})=>{
    const [user, setUser] = useState(null);

    const updateUser = (userData) =>{

        setUser(userData);
    };

    const clearUser = () =>{

        setUser(null);
    };
    return (
        <UserContext.Provider
        value={{
        user,
        updateUser,
        clearUser,
        }}
        >
        {children}
        </UserContext.Provider>
        
        );
};



export default UserProvider;