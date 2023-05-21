import React from 'react'
import './CourseLarge.css'

const CourseLarge = ({course}) => {
  return (
    <a href='https://eios.kemsu.ru/a/eios' className='CourseLarge'>
        <div className='CourseLargeInner'>

            <div className='CourseLargeInnerHeader'>
                <p className='CourseLargePTitle'>{course.direct}</p>
                <h2>{course.name}</h2>
            </div>

            <div className='CourseLargeInnerMiddle'>
                <img alt='изображение курса' src={course.image} className='CourseLargeInnerImage'/>
            </div>

            <div className='CourseLargeInnerFooter'>
                <div className='CourseLargeInnerFooterText'>
                    <h2>{course.teacher}</h2>
                    <p className='CourseLargePTitle'>{course.university}</p>
                </div>
                <img alt='универститет' src={course.universityLink} className='CourseLargeInnerFooterImage'/>    
            </div>

        </div>
    </a>
  )
}

export default CourseLarge