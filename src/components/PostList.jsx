import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/posts/postsSlice';

function PostList() {
  const dispatch = useDispatch();
  const { posts, isLoading, error } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts('popular'));
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>👍 {post.ups} | 💬 {post.num_comments}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;