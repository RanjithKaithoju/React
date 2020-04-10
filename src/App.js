import React from 'react';
import './App.css';

import FirstComponent from './FirstComponent'
import SecondComponent from './Components/SecondComponent';

import ClassBasedComponent from './Components/ClassBasedComponent'

import DescribingState from './Components/DescribingState'
import BindingExample from './Components/Events/BindingExample'
import EventsExample from './Components/Events/EventsExample'

import ParentClass from './Components/Events/ParentClass'
function App() {
  return (
    <div className="App">
        {/* <FirstComponent />
        <SecondComponent /> */}
        {/* <ClassBasedComponent/> */}
        {/* <DescribingState/> */}

        {/* 3rd session */}
        {/* <BindingExample/> */}
        {/* <EventsExample/> */}
        <ParentClass/>
      </div>
    
  );
}

export default App;
