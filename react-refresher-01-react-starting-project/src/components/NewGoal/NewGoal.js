import React from "react";

import './NewGoal.css'
import { useState } from 'react';

const NewGoal = props => {
    const [enteredText,setEnteredText] = useState('');

    const addGoalHandler = event =>{
        event.preventDefault();
        // prevent the browser to send some request to some backend.
        
        const newGoal = {
            id: Math.random().toString(),
            text: enteredText
        };

        setEnteredText('');
        
        props.onAddGoal(newGoal);

    };

    const textChangeHandler = event =>{
        setEnteredText(event.target.value);
        // this part does not depend on the prev state so dont need to use the function
    };

    return (
        // when the submit event happens, the addGoalHandler function wil be called.
        <form className="new-goal" onSubmit={addGoalHandler}>
            <input type="text"  value={enteredText} onChange={textChangeHandler}/>
            <button type="submit">Add Goal</button>
        </form>
    );
    
};

export default NewGoal;