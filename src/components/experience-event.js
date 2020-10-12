import React from "react"
import "./experience-event.scss"

export default function ExperienceEvent(props) {
    const { time_period, company, position, location, description } = props;
    const description_list = description.map((desc, i) => <li key={i}>{desc}</li>);
    // console.log(time_period);
    return ( 
        <div className="event-detail" data-time-period={time_period}>
            <span>{time_period}</span>
            <h3>{ company }</h3>
            <p>{ position }</p>
            <p>{ location }</p>
            <ul>
                {description_list}
            </ul>
        </div>
    )
};

