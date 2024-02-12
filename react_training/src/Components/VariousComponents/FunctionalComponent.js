import React, { useRef, useState, useEffect, useCallback } from "react";
import StatelessComponent from "./StatelessComponent";
import {MemoChatWin} from "../Hooks&LifeCycles/SnapShot";

const userDet = "name";

function FunctionalComponent() {
  const [name, setName] = useState("rishabh");
  const [age, setAge] = useState(12);
  const [message, setMessage] = useState([
    "hello",
    "Hello, how are you?",
    "I'm doing well, thanks! How about you?",
    "I'm good too. Any plans for the weekend?",
    "Not sure yet, maybe catch a movie. What about you?",
    "Sounds like a plan. Let me know if you decide on a movie.",
    "Sure thing! Will do.",
    "I heard there's a new restaurant opening downtown. Interested?",
    "That sounds exciting! What type of cuisine is it?",
    "It's a fusion of Italian and Japanese. Quite unique!",
    "I love trying new cuisines. Count me in!",
  ]);

  
  const input = useRef();

  const handleChange = useCallback((event) => {
    setName(event.target.value);
  }, [message])

  function handleSubmit(event) {
    alert("A message was submitted: " + input.current.value);
    event.preventDefault();
    setMessage([...message, input.current.value]);
  }

  const handleControlledSubmit = () => {
    alert("A name was submitted: " + name);
    // event.preventDefault();
  };

  useEffect(() => {
    console.log('in did mount');
    setName("Rajiv");

    return () => {
      console.log('in unmount')
    };
  }, []);

  useEffect(() => {

    console.log('in did udpate', name);

  }, [name, message]);

  return (
    <div className="App">
      <MemoChatWin messages={message} />
      <div className="heading padding-top">Functional Component</div>
      <div className="sub-heading padding-top">Controlled Component</div>
      <label htmlFor="fname">Name</label>
      <input type={"text"} id="fname" value={name} onChange={handleChange} />
      <button onClick={handleControlledSubmit}>{userDet}</button>

      <div className="padding-top">Uncontrolled Component</div>
      <form onSubmit={handleSubmit}>
        <label>Message</label>
        <input type={"text"} ref={input} defaultValue={name} />
        <input type={"submit"} value="Submit" />
      </form>
      {/* <StatelessComponent age={age} changeAge={setAge} /> */}
    </div>
  );
}

export default FunctionalComponent;
