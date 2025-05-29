
import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import {auth, googleProvider} from './firebase.Config'

function Login (){
    const loginWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            alert(`welcome ${user.dispayName}`)
        }
        catch (error) {
            alert(error.message)
        }
    }

    return (
         <>
         <div style={{backgroundGroundColor: "text-blue-400"}}>
            <p>oAuth Login</p>
            <button className='btn btn-primary' onClick={loginWithGoogle}>Login withGoogle</button>

         </div>
        </>
    )

}
export default Login