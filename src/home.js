import BlogList from './BlogList'
import usefetsh from './fetsh'
const Home = () => {
    const {data,pending,error} = usefetsh('http://localhost:8000/blogs')


    return(
    <div className="content">
       {pending && <h2>data loading .....</h2>}
       {data && <BlogList data={data} />} 
       {error && <h2>{error}</h2>}
    </div>
)
}
 
export default Home;