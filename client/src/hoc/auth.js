import React, { useEffect } from 'react'; 
import { useDispatch } from  'react-redux';
import { auth } from '../_actions/user_action';

export default function (SpecificComponont, option, adminRoute = null) {

    function AuthenticationCheck(props) {
        const dispatch = useDispatch()
        
        useEffect(() => {
            dispatch(auth())
                .then(response => {
                    console.log(response)
                    
                    if(!response.payload.isAuth) {  //로그인한 상태
                        if(option) {
                            props.history.push('/login')
                        }
                    } else {        //로그인 안한 상태
                        if(adminRoute && !response.payload.isAdmin){
                            props.history.push('/')
                        } else {
                            if(option === false) props.history.push('/')
                        }
                    }
                })
        }, [])
        return (
            <SpecificComponont />
        )
    }




    return AuthenticationCheck
}