import React, {createContext, useCallback, useState, useContext} from 'react';

interface IAuthContext {
    logged: boolean;
    signin(email: string, password: string): void;
    signout(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC  = ({children}) => {
    
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@minha-carteira:logged');

       return !!isLogged;


    });

    const signin = useCallback((email: string , password: string)=> {

        if(email === 'tales.e.valadares@gmail.com' && password ==='123456'){
            localStorage.setItem('@minha-carteira:logged', 'true');
            setLogged(true);
        }else{
            alert('Verifique suas credenciais e tente novamente.');
        }
    },[]);


    const signout = useCallback(()=> {
        localStorage.removeItem('@minha-carteira:logged');
        setLogged(false);
    },[]);

    return (
        <AuthContext.Provider value={{logged, signin, signout}}>
            {children}
        </AuthContext.Provider>
    );

}

function useAuth() : IAuthContext {
    const context = useContext(AuthContext);

    return context;
}

export { useAuth, AuthProvider};


