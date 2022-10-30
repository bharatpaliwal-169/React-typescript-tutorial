import React from 'react';
import Hello from './components/Hello';
import Name from './components/Name';
import { CustomTyper } from './components/Childs/Child';
import { Child1 } from './components/Childs/Child1';
import { Click } from './components/Events/click';
import { Input } from './components/Events/Input';
import { Login } from './components/Hooks/Login';
import { User } from './components/Hooks/User';
import {Counter} from './components/Hooks/Counter'
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
      <h1>EVENTS</h1>
      <Click handleClick={() => console.log('Button clicked')} />;
      <Input value='' handleChange={(event)=> console.log('Input event',event) } />
      <h1>HOOKS</h1>
      <Login />
      <h2>User : usestate adv</h2>
      <User />
      <h1>Reducer Hook</h1>
      <Counter />
    </>
  );
}

export default App;