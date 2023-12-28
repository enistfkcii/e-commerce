import React from "react"
import { useNavigate } from "react-router-dom"
const NavbarLeft = () => {
    return (
        <div onClick={() => window.location.href = '/'} className="text-5xl cursor-pointer">ShopZenga</div>
    )
}

export default NavbarLeft