import { useState } from "react"
import Category from "./Category"

export default function Home () {
    const [a, b] = useState([])
    
    function showCategory() {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(data => data.json())
        .then(data => {
            b(data.categories)
        })
        .catch(err => console.log(err))
    }
    function clearCategory() {
        b([])
    }
    return (
        <div>
            <div>
                <button onClick={showCategory} className="bg-blue-700 m-3 p-3 text-white rounded-2xl">View Meal Categories</button>
                <button onClick={clearCategory} className="bg-red-600 m-2 p-3 text-white rounded-2xl">Clear Categories</button>
                <h1 className="ml-7">Click the button to view meal categories</h1>
            </div>
            <div>
                {
                    a.map(x => <Category data={x} key={x.idCategory}></Category>)
                }
            </div>
        </div>
    )
}