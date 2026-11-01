import React from 'react';
import { formatPrice } from "@/lib/utils";
import Image from 'next/image';

function CoursePreview({ course }: CoursePreviewProps) {

    const price = formatPrice(course.price);
    return (
        <div className="course-preview">
            <div className="course-preview__container">
                <div className="course-preview__image-wrapper">
                    <Image src={course.image || "/course-preview-placeholder.png"} alt={course.title} width={640} height={360} className="w-full" />
                </div>
                <div className="">
                    <h2 className="course-preview__title">{course.title}</h2>
                    <p className="text-gray-400 text-md mb-4">{course.teacherName}</p>
                    <p className="text-sm text-customgrays-dirtyGrey">{course.description}</p>
                </div>


            </div>

        </div>
    )
}

export default CoursePreview