import { createContext, useContext, useEffect, useState } from 'react'
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged
} from 'firebase/auth'
import {auth} from '../firebase'
import { useDispatch } from 'react-redux'
import { postUser } from '../redux/actions/actions'

const UserContext = createContext()

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState({})
  const dispatch = useDispatch()
  const createUser = async (email, password) => {
    const register = await createUserWithEmailAndPassword(auth, email, password)
    let userRegister = {
      email: register.user.email,
      idUser: register.user.uid 
    }
    console.log(userRegister)
    dispatch(postUser(userRegister))
  }

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      console.log(currentUser)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <UserContext.Provider value={{createUser, user, logout, signIn}}>
      {children}
    </UserContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(UserContext)
}

export default AuthContextProvider