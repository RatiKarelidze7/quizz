import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {

    const [allPost, setAllPost] = useState( { })
    const [showError, setShowError] = useState(false)
    const [showLoading, setShowLoading] = useState(false)

    useEffect(() => {
        setShowLoading(true)
        setTimeout(() => {
            setShowLoading(false)
        },3000);
    }, [])


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setAllPost(response.data)
            })
            .catch(function (error) {
                setShowError(true)
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, []);


    const refreshHandler = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setAllPost(response.data)
            })
            .catch(function (error) {
                setShowError(true)
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

  return (
      <>
          <h1>Posts ☺</h1>

          {showError && <h3>Data not found</h3>}

          <button onClick={refreshHandler} className={"refresh"}>Refresh</button>

          {showLoading ? <p>Loading...</p> : <div className={"all-posts"}>
              <div>
                  <h3>{allPost[0].title}</h3>
                  <h2>{allPost[0].body}</h2>
              </div>
              <div>
                  <h3>{allPost[1].title}</h3>
                  <h2>{allPost[1].body}</h2>
              </div>
              <div>
                  <h3>{allPost[2].title}</h3>
                  <h2>{allPost[2].body}</h2>
              </div>
              <div>
                  <h3>{allPost[3].title}</h3>
                  <h2>{allPost[3].body}</h2>
              </div>
              <div>
                  <h3>{allPost[4].title}</h3>
                  <h2>{allPost[4].body}</h2>
              </div>
              <div>
                  <h3>{allPost[5].title}</h3>
                  <h2>{allPost[5].body}</h2>
              </div>
              <div>
                  <h3>{allPost[6].title}</h3>
                  <h2>{allPost[6].body}</h2>
              </div>
              <div>
                  <h3>{allPost[7].title}</h3>
                  <h2>{allPost[7].body}</h2>
              </div>
              <div>
                  <h3>{allPost[8].title}</h3>
                  <h2>{allPost[8].body}</h2>
              </div>
              <div>
                  <h3>{allPost[9].title}</h3>
                  <h2>{allPost[9].body}</h2>
              </div>
          </div>}
      </>
  )
}

export default App
