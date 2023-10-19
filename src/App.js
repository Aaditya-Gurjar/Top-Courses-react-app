import React, { useEffect, useState } from "react";
import Navbar  from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { filterData, apiUrl } from "./data";
import { toast } from "react-toastify";
import Spinner from "./spinner";


const App = () => {
  const [courses, setCourses] = useState({});
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title)

  useEffect(() => {
    const fetchData = async()=>{
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        console.log(output);
        // save data into variable
        setCourses(output.data);

      } catch (error) {
        toast.error("Something went wrong !");
      }
      setLoading(false);
    }
    fetchData();
  }, [])
  return(
    <div className="main-container">
      <Navbar ></Navbar>

      <Filter
       filterData={filterData}
       category={category}
       setCategory={setCategory}
       ></Filter>


      {
        loading ? (<Spinner></Spinner>) : (<Cards courses={courses} category={category}></Cards>)
      }
    </div>
  ) 
};

export default App;
