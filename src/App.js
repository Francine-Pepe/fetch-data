import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          "https:jsonplaceholder.typicode.com/posts"
        );

        setData(response.data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    setLoading(true);

    fetchPosts();
  }, []);

  return (
    <>
      {loading && "Loading---"}

      {error && "Oops, could not fetch posts, please try again later"}

      {data &&
        data.map((post) => {
          const { id, title, body } = post;

          return (
            <article key={id}>
              <p>{title}</p>
              <p>{id}</p>
              <p>{body}</p>
            </article>
          );
        })}
    </>
  );
}

export default App;
