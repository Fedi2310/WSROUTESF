import CardUser from "./CardUser"

const ListUser=({users})=>{
    return(
        <div>
            {
                users.map((el,i,t)=> <CardUser key = {i} el = {el}/>)
            }
        </div>
    )
}
export default ListUser