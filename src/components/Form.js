import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("john");
  const [lastName, setLastName] = useState("mburu");
  const [submittedData, setsubmittedData] = useState([])
  const formData = {
    firstName,
    lastName
  }
  const dataArray = [...submittedData, formData]

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  function handleSubmit(e){
    e.preventDefault()
    
    //clearing input fields
    setFirstName("")
    setLastName("")
    setsubmittedData(dataArray)

  }

  const listSubs = submittedData.map((data, index) =>{
    return (
      <div key={index}> 
        {data.firstName} {data.lastName}
      </div>
    )
  })
  return (
   <div>
     <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    <h3>Submissions</h3>
    {listSubs}
   </div>
  );
}

export default Form;
