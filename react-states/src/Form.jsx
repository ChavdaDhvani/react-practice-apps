import { useState } from "react"

export default function Form(){
    let [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        password: "",
    });

    let hadleInputChange = (event) =>{
        setFormData((currData) =>{
            return {...currData, [event.target.name]: event.target.value}
        });
    };


    return(
        <form>
            <label htmlFor="fullName">Full name: </label> 
            <input type="text" placeholder="enter full name" value={formData.fullName} onChange={hadleInputChange} id="fullName" name="fullName"/> 
    
<hr></hr>
            <label htmlFor="username">User name: </label>
            <input type="text" placeholder="enter user name" value={formData.userName} onChange={hadleInputChange} id="userName" name="userName"/> 

<hr></hr>
             <label htmlFor="username">Password: </label>
            <input type="password" placeholder="enter password" value={formData.password} onChange={hadleInputChange} id="password" name="password"/> 
            <hr></hr>
            <button>Submit</button>
        </form>
    )
}