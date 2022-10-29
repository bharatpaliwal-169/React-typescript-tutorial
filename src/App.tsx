import React from 'react';
import Hello from './components/Hello';
import Name from './components/Name';
import { CustomTyper } from './components/Childs/Child';
import { Child1 } from './components/Childs/Child1';
const App =() => {
  return (
    <>
      <h1>Hello TS</h1>
      <Hello name='Bharat' age={21} gender="Male" />
      <Name name={{first: 'Bharat', last: 'Kumar'}} />
      <CustomTyper>This text goes to child component.</CustomTyper>
      <Child1>
        <CustomTyper>This is where we use a custom component in another component.</CustomTyper>
      </Child1>
    </>
  );
}

export default App;