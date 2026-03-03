import './App.css'

function App() {
  function handleClick() {
    alert("Button clicked!");
  }

  function handleMouseOver() {
    alert("Mouse over the paragraph!");
  }

  function handleInputChange(event) {
    console.log("Input value:", event.target.value);
  }


  function handleSubmit(e){
    e.preventDefault();  
    // i am writing my custom behavior down here instead of the default behavior of form submission
    alert("Form submitted!");
  }

  return (
    <div>
      <button onClick={handleClick} >
      {/* <button onClick={() => alert("Button clicked!")}> */}
        Click me
      </button>


      <p onClick={handleMouseOver} style={{border:"3px solid black"}}>
        I am a Para
      </p>


      <form onSubmit={handleSubmit} >
        input: <input type="text" onChange={handleInputChange} />

        <button type='submit' >Submit</button>
      </form>


      {/* <button onClick={alert("Button click hone se pahle hi me (Immediate invoke)")}>   kabhi bh direct nii likhte h Hamesa ek function bana kr likhte h */}
        {/* Click to karke dekh baba  */}
      {/* </button> */}

      <button onClick={() => alert("Button clicked!")}>Click to karke dekho</button>




    </div>
  )
}

export default App