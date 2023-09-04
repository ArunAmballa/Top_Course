
function Filter(props){
    let filterData=props.filterData;
    let category=props.category;
    let setCategory=props.setCategory;
    function filterHandler(title){
        setCategory(title);   
    }
    return (
        <div className="w-11/12 flex flex-wrap max-w-max gap-y-4 space-x-4 mx-auto py-4 justify-center">
            {
            filterData.map((data)=>{
                return (<button onClick={()=>filterHandler(data.title)} className={`text-lg px-2 py-1 rounded-md
                text-white bg-black hover:bg-opacity-50 hover:cursor-pointer
                transition all duration-300 border-2 
                ${category===data.title? "bg-opactiy-60":"bg-opacity-40 border-transparent"}`} key={data.id}>{data.title}</button>);
            })
            }
        </div>
    );
}

export default Filter;