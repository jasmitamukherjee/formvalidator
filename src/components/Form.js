import React from 'react'

export default function Form() {
    const handleSubmit=()=>{
        if(!document.getElementById('name').value){
            alert('Enter name please')
        }
        else if(!document.getElementById('prn').value)
{alert("Enter prn please ")}
else if(!document.getElementById('cgpa').value)
{alert("Enter cgpa please ")}
else{
    if(document.getElementById('cgpa').value > 8)
    {alert("Eligible")}
    else
    {alert("Not eligible")}
}



    }
  return (
    <>
    <div><h1>Form</h1></div>
    <form>
        <label htmlFor="name">Name : </label>
        <input type='text'id="name" placeholder='Enter your name'/>
        <br />
        <label htmlFor="prn">PRN : </label>
        <input id="prn"name = 'prn' placeholder='Enter your PRN'/>
        <br />
        <label htmlFor="cgpa">CGPA : </label>
        <input  id='cgpa' name='cgpa' placeholder='Enter your CGPA' />
        <br />
        <button type='submit' onClick={handleSubmit}>Submit</button>
        

    </form>
    </>
  )
}
