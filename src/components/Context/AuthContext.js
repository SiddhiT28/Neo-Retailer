import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { API_URL } from '../API/Constant'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false)
    const [user, setUser] = useState(null)

    const login = (user) => {
        setAuth(true)
        setUser(user)

        const data_to_store = {
            userId: user.id,
            email: user.email,
            name: user.name,
        }

        sessionStorage.setItem('auth', true)
        sessionStorage.setItem('user', JSON.stringify(data_to_store))
    }


    const logout = () => {
        setAuth(false)
        setUser(null)
    }

    const updateUser = () => {

        const user_data = JSON.parse(sessionStorage.getItem('user'))


        axios.get(`${API_URL}/vendor/getById`, {
            params: {
                id: user_data.userId
            }
        }).then(res => {
            login(res.data);
        })
    }

    return (
        <AuthContext.Provider value={{
            auth,
            user,
            login,
            logout,
            updateUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);