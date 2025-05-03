import React from 'react'
import {  Button} from 'antd';

const SignInBtn = ({onClick , children}) => {
  return (
    <div>
        <Button
          variant="outlined"        
          onClick={onClick}
          className="sign-in-btn"
        > 
        {children}
        </Button>
    </div>
  )
}

export default SignInBtn
