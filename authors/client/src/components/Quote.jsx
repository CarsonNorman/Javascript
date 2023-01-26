import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Quote(props) {
  const [quote, setQuote] = useState({})
  const navigate = useNavigate()
  const [load, setLoad] = useState(false)
  useEffect(() => {
    const controller = new AbortController;
    axios
      .get(`http://localhost:8000/api/quote/${props.quote}`, {signal: controller.signal})
      .then(res => setQuote({...res.data}))
      .catch(err => console.log(err))
      return () => controller.abort()
  }, [load, props.quote])

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/quote/${id}`)
      .then(res => {
        console.log(res)
        setLoad(!load)
      })
      .catch(err => console.log(err))

  }
  return (
    <div >
      {quote.hasOwnProperty('title') &&
        <div className="card my-3" >
          <h5>{quote.title}</h5>
          <p>{quote.body}</p>
          <div className="d-flex justify-content-around my-3">
            <button onClick={() => { navigate(`/${props.quote}/${props.author}/edit`) }} >Edit</button>
            <button onClick={() => { handleDelete(props.quote) }}>Delete</button>
          </div>
        </div>
      }
    </div>
  );
}

export default Quote;