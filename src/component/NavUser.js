import { Link } from "react-router-dom"

const NavUser=()=>{
    return(
        <div className="nave">
            <ul>
                 <Link to='/'><li>Home</li></Link>
                 <Link to='/Contact'><li>contact</li></Link>
                 <Link to ='/Users'><li>Users</li></Link> 
            </ul>
        </div>
    )
}
export default NavUser