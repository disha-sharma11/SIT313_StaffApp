import { createContext, useState } from "react";

export const UserInfo = createContext({
    currentuser: null,
    setcurrentuser: () => null
});

export function UserProvider({ children }) {
    const [currentuser, setcurrentuser] = useState(null);

    const value = { currentuser, setcurrentuser };

    return (
        <UserInfo.Provider value={value}>
            {children}
        </UserInfo.Provider>
    );
}
