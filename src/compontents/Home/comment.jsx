import React, { useEffect, useState } from 'react';
import axios from "axios";
function Comment() {
    const [comment, setcomment] = useState([]);
   

    useEffect(() => {

        // IDuser()
        IDcomment()
    }, []);

    const IDcomment = async () => {
        const { data } = await axios.get(`http://127.0.0.1:8000/instgram/get`)

        console.log(data)
        setcomment(data)


}
  return (
      <>
      <div className='add_comment'>
         <h6>COMMENTS</h6>
         {comment.map(comment=>
         <p>{comment.comment}</p>
             )} 
               </div>
             </>

)
}

export default Comment