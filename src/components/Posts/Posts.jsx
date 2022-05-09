import React from 'react';
import axios from 'axios';

function Posts() {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [currPost, setCurrPost] = React.useState(1);

  React.useEffect(() => {
    const fetchPosts = () => {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(({ data }) => {
          setPosts(data);
        })
        .catch(err => {
          console.log(err);
        })
        .finally(setTimeout(() => setLoading(false), 1500));
    };

    fetchPosts();
  }, []);

  return <div>Posts</div>;
}

export default Posts;
