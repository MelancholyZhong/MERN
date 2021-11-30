import React from "react";
import "./GoalList.css"

// The "props" GoalList component receives is all atrributes we send when calling it 
const GoalList = props => {
    return(
        <ul className="goal-list">
            {props.items.map((goal) => {
                return <li key={goal.id}>{goal.text}</li>;
            })}
            {/* In this part, you cannot directly use the js array,
            the map() method will map every item in items into a list item */}
        </ul>
    );
    
}

export default GoalList;