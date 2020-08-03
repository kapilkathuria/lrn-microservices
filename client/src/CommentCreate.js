import React, { useState } from "react";
import axios from 'axios';

export default  ({ postId }) =>  {
    const [content, setCotent] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post(`http://localhost:4001/posts/${postId}/comments`,{
            content
        });

        setCotent('');
    };
    
    return (
    <div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>New Comment</label>
                <input 
                    className="form-control"
                    value={content}
                    onChange={e=> setCotent(e.target.value)}
                />
                </div>
            <button className="btn btn-primary">submit</button>
        </form>
    </div>
    )
}