
import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from 'react-paginate';

export default function SeePosts() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 4;
  
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then((response) => {
          setData(response.data);
          setTotalPages(Math.ceil(response.data.length / itemsPerPage));
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const subset = data.slice(startIndex, endIndex);
  
    const handlePageChange = (selectedPage) => {
      setCurrentPage(selectedPage.selected);
    };
  
   
  return (
    <div>
      <div>
          {subset.map((item) => (
            <div key={item.id}>{item.title}</div>
          ))}
          <ReactPaginate
            pageCount={totalPages}
            onPageChange={handlePageChange}
            forcePage={currentPage}
          />
        </div>
    </div>
  )
}
