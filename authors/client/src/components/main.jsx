import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import AddAuthor from "./AddAuthor";

function Main() {
  const [authors, setAuthors] = useState([])
  const [load, setLoad] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  useEffect(() => {
    const controller = new AbortController;
    axios
      .get('http://localhost:8000/api/')
      .then(res => {
        setAuthors(res.data.authors)
        setError(null)
      })
      .catch(err => {
        setError('Something went wrong')
        console.log(err)
      })
    return () => controller.abort()
  }, [load])
  const handleLoad = () =>{
    setLoad(!load)
  }
  const handleDelete = (id) => {
    axios
    .delete(`http://localhost:8000/api/${id}`)
    .then(res => {
      setAuthors(authors.filter(author => author._id !== id))
      console.log(res)
    })
    .catch(err => console.log(err))
    
  }
  const handleEdit = (id) => {
    navigate(`/author/edit/${id}`)
  }
  const sortedList = authors.sort((a, b) =>
  a.name.localeCompare(b.name));

  return (
    <div className="mx-auto w-25">
      {!error &&
        <div>
          {sortedList.map((author, idx) => {
            return (
              <div key={idx} className='card my-5'>
                <h3  className=" card-title d-flex justify-content-around" onClick={() => { navigate(`/${author._id}`) }}>{author.name}</h3>
                <div className="d-flex justify-content-around my-3">
                <button className="w-25" onClick={() => handleDelete(author._id)}>Delete</button>
                <button className="w-25" onClick={() => handleEdit(author._id)}>Edit</button>
                </div>

              </div>
            )
          })}
        </div>
      }
      {error &&
        <div>{error}</div>
      }
      <AddAuthor handleLoad={handleLoad}/>
    </div>
  );
}

export default Main;