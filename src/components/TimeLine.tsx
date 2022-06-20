
import TimelineItem from "./TimeLineItem";
import "../styles/timeLine.css";
import React from "react";


const TimeLine = () =>
{
    const timeLineData = [
        {
            text: 'Started Computer Programming at Seneca College',
            date: 'September 7 2018',
            category: {
                tag: 'School',
                color: '#FF0000'
            },
        },
        {
            text: 'Started Service Desk Analyst Co-op at Seneca College',
            date: 'January 2 2020',
            category: {
                tag: 'Work',
                color: '#FFDB14'
            },
        },
        {
            text: 'Started Research Assitant Co-op at Seneca College ',
            date: 'September 2020',
            category: {
                tag: 'Work',
                color: '#FFDB14'
            },

        },
        {
            text:
                'Finished my Enrollment System Project ',
            date: 'August 8 2021',
            category: {
                tag: 'project',
                color: '#018f69'
            },
            link: {
                url:
                    'https://github.com/zthaver/Enrollment-System',
                text: 'Check it out here'
            }
        },
        {
            text: 'Graduated From Seneca College',
            date: 'September 6 2021',
            category: {
                tag: 'school',
                color: '#FF0000'
            },
        }
    ]
    return(
        timeLineData.length > 0 && (
            <div className="timeline-container">
                <> {timeLineData.map((data,idx)=>{
                    return <TimelineItem data={data} key={idx}/>
                })}</>
                </div>
        )
    )
}
export default TimeLine;
