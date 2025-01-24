import {NavLink}  from "react-router-dom";
export default function Navbar() {
return(
    <nav>
        <NavLink to="/">
           Bot Collection
        </NavLink>
        <NavLink to="/bot-army">
            Bot Army
        </NavLink>
    </nav>
)
}