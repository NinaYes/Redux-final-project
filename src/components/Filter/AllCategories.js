import Filter from "./Filter";

const AllCategories = () => {
    return (
        <div>
            <h1 className="headerShop">What art do you like?</h1>

            {['PRINT', 'SCULPTURE', 'PAINTING', 'PHOTO' , 'ALL']
            .map((category, index) => <Filter key={index} category={category}/>
            )}
            
        </div>
    )
}

export default AllCategories;