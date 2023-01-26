import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"

function Edit() {
    const {id, author} = useParams()
    const navigate = useNavigate()
    const [form, setForm] = useState({})
    useEffect(() => {
      const controller = new AbortController;
        axios
          .get(`http://localhost:8000/api/quote/${id}`, {signal: controller.signal})
          .then(res => setForm(res.data))
          .catch(err => console.log(err))
          return () => controller.abort()
      }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
        .put(`http://localhost:8000/api/quote/${id}`, form)
        .then(res => {
          console.log(res)
          navigate(`/${author}`)
        })
        .catch(err => console.log(err))
      }
      const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value
        })
    }


    return ( 
        <div>
          {form &&
            <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" className="form-control" value={form.title} onChange={handleChange} required minLength={5}  />
            <label htmlFor="body">Body</label>
            <input type="text" name="body" id="body" className="form-control" value={form.body} required minLength={10} onChange={handleChange} />
            <button type="submit" >Submit</button>
          </form>
          }
        </div>
     );
}

export default Edit;