import {Link} from 'react-router-dom'
const BlogList = ({data, title, Deleteblog}) => {
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {data.map((blog) => (
                <div className="blog-prev" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <h3>{blog.author}</h3>
                    </Link>
                    <button onClick={()=> Deleteblog(blog.id)}>X</button>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;