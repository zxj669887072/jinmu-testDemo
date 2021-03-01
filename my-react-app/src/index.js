import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from './components/j-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



function FunCom(props){
  return(
    <div className="aa">
      <p>{props.name}</p>
    </div>
  )
}

class ClassCom extends Component {
  // state = {  }
  render() {
    return(
      <div className="aa">
        <p>{this.props.name}</p>
      </div>
    );
  }
}

const jsx = (<div>
  <h1 className="asd">自行车</h1>
  <a href="https://www.baidu.com">baidu</a>
  <FunCom name="FunCom"></FunCom>
  <ClassCom name="ClassCom"></ClassCom>
</div>);

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  jsx,
  document.getElementById('root')
);
console.log("React",React.version);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
