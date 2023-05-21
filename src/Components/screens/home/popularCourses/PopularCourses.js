import React, { useEffect, useRef} from 'react';
import CourseLarge from '../../../ui/cards/course/CourseLarge';
import './PopularCourses.css';
import {courses} from './Courses.data.js';


const PopularCourses = () => {

    const ref = useRef(null)
    useEffect(() =>{
        const el = ref.current
        if(el) {
            const onWheel = (e) => {
                e.preventDefault()
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY * 4,
                    behavior: "smooth"
                })
            }

            el.addEventListener('wheel', onWheel)

            return () => el.removeEventListener('wheel', onWheel)
        }
    },[])

    return(
        <section className='Courses'>
            <div className='PopularCoursesSlider'>
                <h1>Популярные курсы</h1>
                <div className='PopularCoursesTrack' ref={ref}>
                    <div className='PopularCoursesItem'>
                        {courses.length ? courses.map(course =>
                            <CourseLarge key={course.id} course={course}/>
                        )
                        : <p>Нету курсов</p>
                        }
                        
                    </div>
            </div>
            </div>
            
        </section>
    )
}

export default PopularCourses

