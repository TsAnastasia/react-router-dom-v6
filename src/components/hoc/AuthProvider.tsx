import React, { createContext, FC, useState } from "react";

type IUser = string | null;

interface IAuth {
  user: IUser;
  signin: Function;
  signout: Function;
}

export const AuthContext = createContext<IAuth | null>(null);

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<IUser>(null);

  const signin = (newUser: string, cb?: Function) => {
    setUser(newUser);
    if (cb) {
      cb();
    }
  };
  const signout = (cb?: Function) => {
    setUser(null);
    if (cb) {
      cb();
    }
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
