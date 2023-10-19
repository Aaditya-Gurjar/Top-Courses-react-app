import React, { useState } from "react";
import Card from './Card';

const Cards = ({courses, category}) =>{
   
    let allCourses = [];
    const[likedCourses, setLikedCourses] = useState([]);
    const getCourses = () => {
       if(category == "All"){
        Object.values(courses).forEach((courseCategory)=>{
            courseCategory.forEach(course =>{
                allCourses.push(course);
            })
        });
        return allCourses;
       }

       else{
        return courses[category];
       }
    }

    return(
        <div className="cards-container">
            {
                getCourses().map((course)=>{
                    
                    return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>
                })
            }
        </div>
    );
};

export default Cards;