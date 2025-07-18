import { NavLink } from "react-router"


export default function FirstCompo({data }){
    return(
        <NavLink to ={`/catagory/${data.strCategory}`}>
            <div>
                <h3>Name : {data.strCategory}</h3>
                <img src={data.strCategoryThumb} alt="" />
                <p>Description: <br />{data.strCategoryDescription}</p>
            </div>
        </NavLink>
    )
}
