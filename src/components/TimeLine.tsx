import timeLineData from "../constant/timeLineData";
import TimelineItem from "./TimeLineItem";
import "../styles/timeLine.css";
import React from "react";

const TimeLine = () =>
{
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
