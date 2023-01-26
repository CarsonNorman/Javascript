import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Quote from "./Quote";

function Author() {
  const { id } = useParams()
  const [author, setAuthor] = useState({})
  const [load, setLoad] = useState(false)
  const [form, setForm] = useState({})
  const [add, setAdd] = useState(false)

  useEffect(() => {
    const controller = new AbortController;
    axios
      .get(`http://localhost:8000/api/${id}`, {signal: controller.signal})
      .then(res => {
        setAuthor(res.data)
        setForm({ author: res.data._id })
      })
      .catch(err => console.log(err))
      return () => controller.abort()
  }, [load, id])
  const handleLoad = () =>{
    setLoad(!load)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    axios
    .post(`http://localhost:8000/api/${author.id}`, form)
    .then(res => {
      console.log(res)
      setAdd(!add)
      setLoad(!load)
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
    <div className="w-25 mx-auto card border-0">
      
      {author &&
        <div className="mx-auto card border-0 w-100">
          {author.name}
          {author.quotes && author.quotes.map((quote, idx) =>{
            return <Quote  handleLoad={handleLoad} key={idx} quote={quote} author={author._id} />
          })}
          {!add &&
            <button onClick={() => setAdd(!add)} className='w-50 mx-auto'>Add Quote</button>
          }
        </div>
      }
      {add &&
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input className="form-control" type="text" name="title" id="title" required minLength={5} onChange={handleChange} />
            <label htmlFor="body">Body</label>
            <input className="form-control" type="text" name="body" id="body" required minLength={10} onChange={handleChange} />
            <div>
            <button type="submit" >Submit</button>
            <button onClick={() => setAdd(!add)}>cancel</button>
            </div>
          </form>
          
        </div>
      }
    </div>
  );
}

export default Author;