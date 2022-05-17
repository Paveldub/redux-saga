import { useDispatch } from 'react-redux';
import './App.css';
import { USER_POSTS_FETCH_REQUESTED } from './store/actionTypes';

function App() {
  const dispatch = useDispatch();

  const getPosts = () => {
    dispatch({
      type: USER_POSTS_FETCH_REQUESTED,
      payload: {
        userId: 2
      }
    })
  }

  return (
    <>
      <button onClick={getPosts}>Get Posts</button>
    </>
  );
}

export default App;
