import React, {useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
// import loading from "../Components/Fidget-spinner.gif";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props)=> {
 const [articles, setArticles] = useState([])
 const [loading, setLoading] = useState(true)
 const [page, setPage] = useState(1)
 const [totalResults, setTotalResults] = useState(0)

//  const capitalizeFirstLetter = (string) =>{
//   return string.chart(0).toUpperCase() + string.slice(1);
//  }
  

  const updateNews = async()=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=business&category=
      ${props.category}&apiKey=311cc676f65a497696501027cf6c04e9&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);

    let parseData = await data.json();
    props.setProgress(70);
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false)
   
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
  },[])
  
    

//   const handlePrevClick = async () => {
//     setPage(page - 1);
//     updateNews();
//   };

//  const  handleNextClick = async () => {
//     setPage(page + 1);
//     updateNews();
//   };

const fetchMoreData = async() =>{
    setPage(page+1)
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=business&category=
  ${props.category}&apiKey=311cc676f65a497696501027cf6c04e9&page=${page+1}&pageSize=${props.pageSize}`;
setPage(page+1)
  let data = await fetch(url);
let parseData = await data.json()
setArticles(articles.concat(parseData.articles))
setTotalResults(parseData.totalResults)};

    return (
      <>
        <h1 className="text-center" style={{ margin: "35px 0px", marginTop:"90px" }}>
          NewsMonkey-Top Headlines
        </h1>
        {loading && <Spinner/>}
        {/* {capitalizeFirstLetter(props.category)} */}
       

<InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={ <Spinner/>
            // <div className="text-center my-3">
            //   <img src={loading} alt="" />
            // </div>
          }>

        <div className="container">
          
        
        <div className="row">
          {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItems
                    title={element.title? element.title : ""}
                    description={element.description? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        </div>
        </InfiniteScroll>
        </>

        // bellow is the previous next buttons
      //   <div className="container d-flex justify-content-between">
      //   <button
      //     disabled={this.state.page <= 1}
      //     type="button"
      //     className="btn btn-dark"
      //     onClick={this.handlePrevClick}
      //   >
      //     {" "}
      //     &larr; Previous
      //   </button>
      //   <button
      //     disabled={
      //       this.state.page + 1 >
      //       Math.ceil(this.state.totalResults / props.pageSize)
      //     }
      //     type="button"
      //     className="btn btn-dark"
      //     onClick={this.handleNextClick}
      //   >
      //     Next &rarr;
      //   </button>
      // </div>
    
    );
  
}

News.defaultProps = {
  country: "us",
  pageSize: 6,
  category: "general",
};
News.propsType = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
