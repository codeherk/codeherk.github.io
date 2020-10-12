import React from "react"
import "./additional-event.scss"

export default function AdditionalEvent(props) {
    const { time_period, title, description } = props;
    const description_list = description.map((desc, i) => <li key={i} >{desc}</li>);
    // console.log(time_period);
    return ( 
        <div className="additional-event-detail" data-time-period={time_period}>
            <span>{time_period}</span>
            <h3>{ title }</h3>
            <ul>
                {description_list}
            </ul>
        </div>
    )
};

