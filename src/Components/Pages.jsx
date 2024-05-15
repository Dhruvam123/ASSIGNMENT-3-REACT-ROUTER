import { Outlet } from "react-router-dom"
import Header from "./Header"

const Pages=()=>{
    return(
        <div>
            <Header/>
            <Outlet/>

        </div>
    )
}
export default Pages