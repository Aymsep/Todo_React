import {useState} from 'react'
import { useHistory } from 'react-router-dom'
const Create = () => {
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [author,setAuthor] = useState('aymsep')
    const [pend,setPend] = useState(false)
    const history = useHistory()
    const HandleSubmit = (e) => {
        e.preventDefault()
        const blog = {title , body, author}
        setPend(true)
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(blog)
        }).then(() => {
            console.log('new blog aded')
            setPend(false)
            setTitle('')
            setBody('')
            setAuthor('')
            history.push('/home')
        })
    }
    return ( 
        <div className="create">
            <h2>add new project</h2>
            <form onSubmit={HandleSubmit} action="">
                <label>blog title:</label>
                <input type="text" 
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>blog body:</label>
                <textarea 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>blog body:</label>
                <select name="" id=""
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="aymsep">aymsep</option>
                    <option value="maalak">malak</option>
                    <option value="louna">louna</option>
                </select>
               {!pend && <button>add blog</button>}
               {pend && <button>Loading blog</button>}
            
            </form>
        </div>
     );
}
 
export default Create;