import usefetsh from './fetsh'
import {useParams} from 'react-router-dom'
const BlogDetails = () => {
    const {id} = useParams()
    const {data:blog,pending,error} = usefetsh('http://localhost:8000/blogs/' + id)
    return ( 
        <div className="blog-details">
            {pending && <div>loading...</div>}
            {error&& <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;