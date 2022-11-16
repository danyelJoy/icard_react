import React from 'react'
import "./ClienteLayout.scss";

export  function ClientLayout(props) {
    const { children } = props;
    
  return (
    <div>
        <p>ClienteLayout</p>
        {children}
    </div>
  )
}
