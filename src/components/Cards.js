import React, { useEffect, useContext } from "react";
import { AppContext } from '../contextAPI/AppContext';
import "./Cards.css";

const Cards = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      dispatch({ type: 'SET_POSTS', payload: data });
    };

    fetchData();
  }, [dispatch]);

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_POST', payload: id });
  };

  const handlePageChange = (pageNumber) => {
    dispatch({ type: 'SET_PAGE', payload: pageNumber });
  };

  const postsPerPage = 6;
  const startIndex = (state.currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = state.posts.slice(startIndex, endIndex);

  return (
    <>
      <h1 className="text-center">Cards</h1>
      <div className="cards row">
        {currentPosts.map((post) => (
          <div key={post.id} className="col-md-2 card">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button className="btn btn-danger" onClick={() => handleRemove(post.id)}>X</button>
          </div>
        ))}
      </div>
      <nav className="text-center" aria-label="Page navigation example">
        <ul className="pagination">
          <li className={`page-item ${state.currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(state.currentPage - 1)}>Previous</button>
          </li>
          {[...Array(Math.ceil(state.posts.length / postsPerPage)).keys()].map(number => (
            <li key={number + 1} className={`page-item ${state.currentPage === number + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(number + 1)}>
                {number + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${state.currentPage === Math.ceil(state.posts.length / postsPerPage) ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(state.currentPage + 1)}>Next</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Cards;
