import React from 'react';
import './App.css';

import FirstComponent from './FirstComponent'
import SecondComponent from './Components/SecondComponent';

import ClassBasedComponent from './Components/ClassBasedComponent'

import DescribingState from './Components/DescribingState'
function App() {
  return (
    <div className="App">
        {/* <FirstComponent />
        <SecondComponent /> */}
        {/* <ClassBasedComponent/> */}
        <DescribingState/>
      </div>
    
  );
}

export default App;
