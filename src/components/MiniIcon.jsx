import React from 'react'
import classNames from 'classnames'
import { useSelector } from "react-redux";

function MiniIcon( {phone, children}) {

  const { totalCount } = useSelector(({ cart }) => cart);

  return (
    <div className={classNames("mini-icon", {'phone': phone})}>
        {children}
        {!phone && <div className={classNames("count", {'d-none': !totalCount})}>{totalCount!==0 && totalCount}</div>}
    </div>
  )
}

export default MiniIcon