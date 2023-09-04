import React, { useEffect } from "react";
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import { filterData,apiUrl } from "./data";
import { toast } from "react-toastify";
import { useState } from "react";
import Spinner from "./components/Spinner";

const App = () => {
  const [courses,setCourses] = useState(null);
  const [loading,setLoading] = useState(true);
  const [category,setCategory]=useState(filterData[0].title);
  
  async function fetchData(){
    setLoading(true);
    try{
        let response=await fetch(apiUrl);
        let output=await response.json();
        setCourses(output.data);
      }
    catch(error)
    {
      toast.error("API Call Failed");
    }
    setLoading(false);
  }

  useEffect( ()=>
  {
    fetchData();
  }, []);

  return (
  <div className="flex flex-col min-h-screen bg-bgDark">
    <div>
      <Navbar></Navbar>
    </div>
    <div>
      <div>
        <Filter filterData={filterData} setCategory={setCategory} category={category}></Filter>
      </div>
    
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner></Spinner>) : (<Cards courses={courses} category={category}></Cards>)
        }
      </div>
    </div>
   
  
  </div>);
};

export default App;
