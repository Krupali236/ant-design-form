import React from 'react'
import {  Button} from 'antd';

const SignInBtn = ({onClick , children}) => {
  return (
    <div>
        <Button
          variant="outlined"        
          onClick={onClick}
          className="sign-in-btn"
          style={{border:"2px solid ##019670"}}
        > 
        {children}
        </Button>
    </div>
  )
}

export default SignInBtn
