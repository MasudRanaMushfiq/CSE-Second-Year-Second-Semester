export default function Category({data}){

    return(
        <div className="flex-wrap m-3 p-3 bg-gray-600 rounded-2xl">
            <div>
                <img src={data.strCategoryThumb} alt={data.strCategory}/>
            </div>
            <div>
                <h1 className="text-3xl text-white">{data.strCategory}</h1>
                <p className="text-black">{data.strCategoryDescription}</p>
            </div>
        </div>
    )
}