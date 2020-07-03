import React from 'react';
import { connect } from 'react-redux'
import './App.css';

function App(props) {

  return (
    <div className="App">
      <span>{ props.num}</span>
      <button onClick={() => { props.add(1) }}>+1</button>
      <button onClick={() => { props.add(1) }}>+2</button>
      <button onClick={() => { addOdd(props); }}>单数+1</button>
      <button onClick={() => { addAfter2Sec(props); }}>异步两秒后+1</button>
    </div>
  );
}



function addOdd(props) {
  if (props.num % 2 === 1) {
    props.add(1)
  }
}

function addAfter2Sec(props) {
  setTimeout(() => {
    props.add(1)
  }, 2000);
}

const mapStateToProps = state => {
  return {
    num: state.num
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    add: (num) => {
      dispatch({
        type: 'add',
        payload: num
      })
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
