import React, { Fragment } from "react";



const Pagination = ({ totalPages, pageIndex, onClickPage, onClickPrevNext }) => {

  let startPoint = Math.sign(pageIndex - 10) === -1 ? 1 : pageIndex - 10; // Decide pagination start index
  let endPoint = pageIndex + 10 > totalPages ? totalPages : pageIndex + 10;  // Decide pagination end index

  // Creating array to display pagination indexing on basis of current page index
  const fillArr = (start, end) =>{
    let arr=[];
    for(let i = start; i <= end; i++){
      arr.push(i);    
    }
    return arr;
  }

  let paginationIndexArr = fillArr(startPoint, endPoint);

  // Render Previous button
  const renderPrevButton = () => (
    <Fragment>
      {
        pageIndex === 1 ?
          <li className="page-item disabled">
            <span className="page-link">Previous</span>
          </li>
        :
          <li onClick={() => onClickPrevNext("prev")} className="page-item">
            <span className="page-link">Previous</span>
          </li>  
      }      
    </Fragment>      
  )

  // Render Next button
  const renderNextButton = () => (
    <Fragment>
      {
        pageIndex === totalPages ?
          <li className="page-item disabled">
            <span className="page-link">Next</span>
          </li>
        :
          <li onClick={() => onClickPrevNext("next")} className="page-item">
            <span className="page-link">Next</span>
          </li>  
      }      
    </Fragment>      
  )

  return(
    <nav>
      <ul className="pagination">
        {renderPrevButton()}
        {
          paginationIndexArr.map(item => {
            return(
              <li 
                key={item} 
                className={pageIndex === item ? "page-item active" : "page-item"}
                onClick={() => onClickPage(item)}>
                  <span className="page-link">
                    {item}
                  </span>
              </li>
            )
          })
        }
        {renderNextButton()}
      </ul>
    </nav>
  )
}

export default Pagination;