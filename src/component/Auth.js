import { RoutePath } from 'config/Enums';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Auth({ ChildComponent, noAuth = true, ...props }) {

    const navigate = useNavigate();
    const user = window.sessionStorage.getItem("user");

    useEffect(() => {
        if (!noAuth) {
            if (!user) {
                navigate(`/${RoutePath.LOGIN}`)
            }
        }
    }, [])




    return (
        <ChildComponent {...props} />
    )
}

export default Auth