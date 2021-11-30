import React, {useState} from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

// this is a function based react component,gas to be react component
const App = () => {

  // by using state, the react will know when to re-render.
  // the "useState" function will return 2 things, the first is our latest state(or initial state);
  // the second is a function that update the state
  const [courseGoals, setCourseGoals] = useState([
    {id:'cg1',text:'Finish the course.'},
    {id:'cg2',text:'2Finish the course.'},
    {id:'cg3',text:'3Finish the course.'},
  ]);

  const addNewGoalHandler = newGoal => {
    // here uses concat will not modifie the original goals, but returns a new one to replace
    // setCourseGoals(courseGoals.concat(newGoal));
    // The approach upside is not good enough, because the updates will not be re-rendered immidiately
    setCourseGoals((prevCourseGoals)=>prevCourseGoals.concat(newGoal));
  };


  return(
    <div className="course-goals">
      <h2>Course Goals</h2>
      {/* The attribute(addGoal,items) of component GoalList is defined by us */}
      <NewGoal onAddGoal={addNewGoalHandler}/>
      {/* this onAddGoal method gives us solution to pass information from child to parent */}
      <GoalList items={courseGoals} />
    </div>
  );
  // This thing looks like html, react understands this 
  // React.createElement('h1',{attributes},A react APP!)
};


export default App;
