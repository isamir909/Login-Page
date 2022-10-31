import { useState } from 'react';
import './App.css';
import FormInput from "./Components/FormInput";

function App() {
  const [values,setValues]=useState({
    username:"",
    email:"",
    BirthDate:"",
    password:"",
    confirmPassword:""
  })

  const inputs=[
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Username",
      errorMessage:"Username should be between 3-16 characters and shouldn't include any special character ",
      pattern:"^[A-Za-z0-9]{3,16}$",
      label:"Username",
      required:true
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"Email",
      errorMessage:"it should be a valid email address",
      label:"Email",
      required:true
    },
    {
      id:3,
      name:"BirthDate",
      type:"date",
      placeholder:"Birth Date",
      label:"Birth Date"
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Password",
      errorMessage:"password should be between 8-21 character and should include 1 capital letter,1 number or 1 special character ",
      label:"Password",
      pattern:"^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z])(.{8,21})$",
      required:true
    },
    {
      id:5,
      name:"confirmPassword",
      type:"password",
      placeholder:"Confirm Password",
      errorMessage:"confirm password should be same as password  ",
      label:"Confirm Password",
      // pattern:values.password,
      required:true
    },
  

  ]

  // async data => {
  //   const response = await fetch(`${APIURL}/contacts`, {
  //     method: "POST",
  //     mode: "cors",
  //     cache: "no-cache",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(data)
  //   });
  //   return response.json();
  // };
  const {username,email,password,confirmPassword,BirthDate}=values
  console.log(username);
  const hitAPI=()=>{
    const apiUrl ='http://localhost:3001/user/register';
    fetch(apiUrl,{method:"POST",body:JSON.stringify({username,email,password,confirmPassword}),withCredentials: true,crossDomain:true,headers: {
      'Content-type': 'application/json; charset=UTF-8',
      "Access-Control-Allow-Origin":"*",
      "Accept":'application/json'
    },})
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
    }
    
    const handleSubmit=(e)=>{
      e.preventDefault()
      e.stopPropagation()
      hitAPI()
    //  console.log("handelSubmit");
    }




  const onChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
  }
  console.log(values);
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>

      {inputs.map((input)=>(
            <FormInput key={input.id} {...input}  value={values[input.name]} onChange={onChange}/>
      ))}

         <button>Submit</button>
      </form>
    
    </div>
  );
}

export default App;
