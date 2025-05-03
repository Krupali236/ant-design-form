import React from 'react'
import {  Button} from 'antd';
const SolidButton = ({ children, onClick }) => {
  return (
    <div>
        <Button  type="primary" variant='solid' htmlType="submit" className="signup-btn" onClick={onClick} style={{margin:"10px 0px"}}>
          {/* Sign Up */}
          {children}
        </Button>
    </div>
  )
}

export default SolidButton
