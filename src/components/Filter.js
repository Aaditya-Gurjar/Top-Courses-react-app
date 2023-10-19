import React from "react";
import { filterData } from "../data";

const Filter = (props) =>{
    const filterData = props.filterData;
    const category = props.category;
    const setCategory = props.setCategory;

    function filterHandler(title){
        setCategory(title);
    }

    return(
        <div className="btn-container">
            {filterData.map(data =>{
                return <button onClick={()=>filterHandler(data.title)} key={data.id}>{data.title}</button>
            })}
        </div>
    );
};

export default Filter;