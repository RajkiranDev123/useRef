import { useEffect, useState, useRef } from "react";
//use useRef for storing  & persisting values but without cause re-rendering.
//directly access dom el
//useRef‘s current property is mutable, but useState‘s state variable is not. In contrast to the current property of
//useRef, you should not
// directly assign values to the state variable of useState. Instead, always use the updater function.
//useRef is a React Hook that lets you reference a value that’s not needed for rendering.
function App() {

const [st1,setSt1]=useState(0)
const [st2,setSt2]=useState(0)
// let r=9
// Local variables don’t persist between renders. When React renders this component a second time, it renders it from scratch—it doesn’t consider any changes to the local variables.
// Changes to local variables won’t trigger renders. React doesn’t realize it needs to render the component again with the new data.
//Variable declared using useRef doesn't get included in the react life cycle****
  const countRef = useRef(0);
  console.log("countref from outside inc fun", countRef.current);

  const focusRef = useRef(null);
  const focusRef2 = useRef(null);

  const [changeState, setchangeState] = useState(0);

  function increment() {
    countRef.current += 1;
    console.log("count from inc fun :", countRef.current);
    focusRef.current.focus();

    // setchangeState(changeState + 1); //but this will cause re-render
  }

  function f2() {
    focusRef2.current.focus();
  }
  // focus : control gets transfered to input field and we can type value instantly
  useEffect(() => {
    focusRef.current.focus();
  }, []);
  return (
    <div className="App" style={{ padding: 9 }}>
      <button onClick={increment}>Increment : {countRef.current}</button>
      <input type="text" placeholder="type something.." ref={focusRef} />
      <br />
      {changeState}
      <br />
      <br />
      <button onClick={f2}>button</button>
      <input ref={focusRef2} type="text" placeholder="focus 2.." />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <p>State1 :{st1}</p>
      <button onClick={()=>setSt1(s1=>s1+1)}>st1</button>


      <p>State2 :{st2}</p>
      <button onClick={()=>setSt2(countRef.current+1)}>st2</button>

    </div>
  );
}
export default App;
