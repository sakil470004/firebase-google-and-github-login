import React, { useState } from 'react'
import useFirebase from '../Firebase/useFIrebase';



export default function Home() {





    const { signInUsingGoogle, user, logOut, signInUsingGithub } = useFirebase();




    return (
        <div>

            {
                !user.email ?
                    <button onClick={signInUsingGoogle} >Google Sing In</button>
                    : <button onClick={logOut}>LogOUt</button>}
            {user.email && <div>
                <h1>Name : {user?.displayName}
                </h1>
                <div>
                    <h1>Email : {user?.email}
                    </h1>
                    <img width="250px" src={user?.photoURL} />

                </div>
            </div>}
            <button onClick={signInUsingGithub} >SingInWithGithub</button>
                {console.log(user)}


        </div>
    )
}
