import React from 'react'
import { FcLike } from "react-icons/fc";
import {FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify';

const Card = (props) => {
    const course = props.course;
    const likedCourses = props.likedCourses;
    
    const setLikedCourses = props.setLikedCourses;
   function clickHandler(){
        if(likedCourses.includes(course.id)){
            // Already marked as liked !
            setLikedCourses((prev)=>prev.filter((cid) =>  cid !== course.id));
            toast.warning("Like Removed");
        }
        else{

            // if not liked yet
            if(likedCourses.length === 0){
                
                setLikedCourses([course.id]);
            }
            else{
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully !")
        }

   }
    return (
   

        <div className='single-card-container'>
            <div>
               <img src={course.image.url}></img>                
            </div>

            <div>
                <button className='like-btn' onClick={clickHandler}>
                { !likedCourses.includes(course.id) ? (<FcLikePlaceholder font-size="1.75rem"></FcLikePlaceholder>): (<FcLike font-size="1.75rem"></FcLike>)}  
                
                </button>

                <div className='single-card-description'>
                    <p className='course-title'>{course.title}</p><br></br>
                    <p className='course-description'>{
                        course.description.length > 100 ? (course.description.substr(0,100) + "...") : ( course.description+"...")
                    }</p>
                </div>
            </div>
        </div>
    )
}

export default Card;