import React from 'react';
import { FcLike } from "react-icons/fc";
import { toast } from 'react-toastify';
import {FcLikePlaceholder} from "react-icons/fc"
function Card(props){
    let course=props.course;
    let likedCourses=props.likedCourses;
    let setLikedCourses=props.setLikedCourses;


    function clickHandler(){
        if (likedCourses.includes(course.id)){
            //You are already liked
            setLikedCourses((prev)=>prev.filter((cid)=>(cid!==course.id)));
            toast.warning("Like Removed");
        }
        else{
            //You are not liked previously
            if (likedCourses.length===0){
                setLikedCourses([course.id])
            }
            else{
                setLikedCourses((prev)=>[...prev,course.id]);
            }
            toast.success('Liked Successfully');
        }

    }
    return (
        <div className='flex flex-col w-[300px] bg-bgDark bg-opacity-80 text-white rounded-md overflow-hidden'>
            <div className='relative '>
                
                <img src={course.image.url} alt=""></img>
                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-10px] flex justify-center'>
                    <button onClick={clickHandler}>
                        {
                            !likedCourses.includes(course.id)?(<FcLikePlaceholder fontSize="1.75rem"></FcLikePlaceholder>):(<FcLike fontSize="1.75rem"></FcLike>)
                        }
                        
                    </button>
                </div>
               
            </div>
         
            <div className='p-4'>
                <p className='text-white text-lg font-semibold'>{course.title}</p>
                <p className='mt-2'>{course.description}</p>
            </div>
        </div>
    );
}

export default Card;