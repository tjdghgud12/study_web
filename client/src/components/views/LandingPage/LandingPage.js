//첫페이지 말 그대로 초기 화면
import React, {useEffect} from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';

function LandingPage(props) {
    useEffect(() => {
        axios.get('api/hello')
        .then(response => console.log(response.data))
    }, [])

    const onClickhandler = () => {
        axios.get('api/users/logout')
            .then(response => {
                if(response.data.success) {
                    props.history.push('/login')
                } else {
                    alert('logout Failed')
                }
            })
    }


    return(
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:'100vh'}}>
            <h2>Start Page</h2>
            <button onClick = {onClickhandler}>로그아웃</button>
        </div>
    )
}

export default withRouter(LandingPage)
