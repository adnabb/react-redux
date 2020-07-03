import React from 'react';
import './App.css';

function App(props) {
  const store = props.store;

  return (
    <div className="App">
      <span>{store.getState().num}</span>
      <button onClick={() => { add1(store); }}>+1</button>
      <button onClick={() => { add2(store); }}>+2</button>
      <button onClick={() => { addOdd(store); }}>单数+1</button>
      <button onClick={() => { addAfter2Sec(store); }}>异步两秒后+1</button>
    </div>
  );
}

function add1(store) {
  store.dispatch({
    type: 'add',
    payload: 1
  });
}


function add2(store) {
  store.dispatch({
    type: 'add',
    payload: 2
  });
}


function addOdd(store) {
  if (store.getState().num % 2 === 1) {
    store.dispatch({
      type: 'add',
      payload: 1
    });
  }
}

function addAfter2Sec(store) {
  setTimeout(() => {
    store.dispatch({
      type: 'add',
      payload: 1
    });
  }, 2000);
}

export default App;
