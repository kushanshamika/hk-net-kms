import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from '../config/axiosConfig';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const loginAction = async (data) => {

        axios.post('/login', data)
        .then(response => {
            setUser(response.data.username);
            navigate('');
        })
        .catch(error => {
            console.error('Error submitting form:', error);
        });
      };

      const logOut = () => {
        setUser(null);
        localStorage.removeItem("site");
        navigate("/login");
      };

  return( 
    <AuthContext.Provider value={{user, loginAction, logOut}}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};