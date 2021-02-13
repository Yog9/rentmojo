import React from 'react'
import { useParams } from "react-router-dom";


const PostDetails = () => {
    const { post_id } = useParams();
    return (
        <div>
            Post Details - { post_id}
        </div>
    )
}

export default PostDetails
