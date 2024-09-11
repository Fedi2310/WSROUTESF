import { useNavigate, useParams } from "react-router-dom"

const Profil=({users})=>{
    const {id} =useParams()
    console.log(id)
    const found = users.find((el,i,t)=>el.id == id)
    console.log(found)
    const navigate = useNavigate()
    return(
        <div>
            <h1>Profile</h1>
            <h2>{found.name}</h2>
            <h3>{found.age}</h3>
            <button onClick={()=>navigate('/')}>home</button>
        </div>
    )
}
export default Profil