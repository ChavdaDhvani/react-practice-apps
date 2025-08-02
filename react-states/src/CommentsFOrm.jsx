import { useState } from "react";

export default function CommentForm() {
    let [formData, setFormData] = useState({
            username: "",
            remarks: "",
            ratings: 5,
        });

    let handleInputChange = (event) =>{
        setFormData((currData) =>{
            return {...currData, [event.target.name]: event.target.value};
        })
    };

    let handleSubmit = (event) =>{
        event.preventDefault();
        setFormData(
            {
            username: "",
            remarks: "",
            ratings: 5,
        });
    }

    return(
        <div>
            <h4>Give a comment!</h4>
            <form onSubmit={handleSubmit}>
                <input placeholder="username" name="username" type="text" value={formData.username} onChange={handleInputChange} /><hr></hr>
                <textarea value={formData.remarks} name="remarks" placeholder="add new remark" onChange={handleInputChange}>Remarks</textarea><hr></hr>
                <input type="number" name="ratings" placeholder="rating" min={1} max={5} value={formData.ratings} onChange={handleInputChange} /><hr></hr>
                <button>Add Comment</button>
            </form>
        </div> 
    )
}