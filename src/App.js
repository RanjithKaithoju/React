import React, { PureComponent } from 'react';
import './App.css';

import FirstComponent from './FirstComponent'
import SecondComponent from './Components/SecondComponent';

import ClassBasedComponent from './Components/ClassBasedComponent'

import DescribingState from './Components/DescribingState'
import BindingExample from './Components/Events/BindingExample'
import EventsExample from './Components/Events/EventsExample'

import ParentClass from './Components/Events/ParentClass'
import DestructureObjects from './Components/Day4/DestructureObjects'
import ConditionalRendering from './Components/Day4/ConditionalRendering'

import ArrayRendering from './Components/Day4/ArrayRendering'
import ArrayRendering2 from './Components/Day4/ArrayRendering2'

import StylesExample from './Components/Day4/StylesExample/StylesExample'

import LifeCycleComponents from './Components/Day5/LifeCycleComponents'

import DemoComponent from './Components/Day5/DemoComponent'
import ReactPureComponent from './Components/Day5/ReactPureComponent'

import BasicComponent from './Components/Day6/BasicComponent'

import NewComponent from './Components/Day6/NewComponent'

import ReactRouterExample from './Components/Day6/Routing/ReactRouterExample'
import ReactRef from './Components/Day7/ReactRef'

import ContextExample from './Components/Day7/ContextExample/ContextExample'
import ListUsers from './Components/Day8/FetchingDataWithAxios/ListUsers'
import PostUser from './Components/Day8/FetchingDataWithAxios/PostUser'

import ClassBasedComponentStateExample from './Components/Day8/ClassBasedComponentStateExample'
import FunctionalBasedComponentStateExample from './Components/Day8/FunctionalBasedComponentStateExample'
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
        {/* <ParentClass/> */}

        {/* Day 4 */}
        {/* <DestructureObjects/> */}
        {/* <ConditionalRendering/> */}

        {/* <ArrayRendering/> */}
        {/* <ArrayRendering2/> */}
        {/* <StylesExample/> */}
        {/* <LifeCycleComponents/> */}
        {/* <DemoComponent/> */}
        {/* <ReactPureComponent/> */}
     
        {/* <BasicComponent/> */}

        {/* <NewComponent/> */}
        {/* <ReactRouterExample/> */}

        {/* <ReactRef/> */}
        {/* <ContextExample/> */}

        {/* <ListUsers/> */}
        {/* <PostUser/> */}
        {/* <ClassBasedComponentStateExample/> */}
        <FunctionalBasedComponentStateExample/>
      </div>
    
  );
}

export default App;
