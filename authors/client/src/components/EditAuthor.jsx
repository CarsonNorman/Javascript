import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"

function EditAuthor() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [form, setForm] = useState({})
    useEffect(() => {
      const controller = new AbortController;
        axios
          .get(`http://localhost:8000/api/${id}`, {signal: controller.signal})
          .then(res => setForm(res.data))
          .catch(err => console.log(err))
          return () => controller.abort()
      }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
        .put(`http://localhost:8000/api/${id}`, form)
        .then(res => {
          console.log(res)
          navigate('/')
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
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" className="form-control" value={form.name} onChange={handleChange} required minLength={3}  />
            <button type="submit">Submit</button>
          </form>
          }
        </div>
     );
}

export default EditAuthor;