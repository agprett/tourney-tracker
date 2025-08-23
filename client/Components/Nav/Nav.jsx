import { NavLink, Outlet } from "react-router"

import trophy from '../../assests/trophy.png'

function Nav () {

  return (
    <>
      <nav>
        <NavLink to={'/'} ><img className="logo" src={trophy} alt="trophy-logo"/></NavLink> 
        <NavLink to={'/'} >Home</NavLink>
        <NavLink to={'/tournament'} >Tournament</NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default Nav