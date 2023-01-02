import React from "react";


const NewsItems = (props)=> {
    let { title, description, imageUrl, newsUrl,author,date, source } = props;
    return (
      <div className="my-3">
        <div className="card" >
          <div style={{display:"flex",justifyContent:"flex-end",right:"0",position:'absolute'}}>
          <span className="badge rounded-pill bg-danger" style={{left:"90%",zIndex:"1"}}>
           {source}</span>
        
          </div>
         <img src={!imageUrl?"https://www.nasaspaceflight.com/wp-content/uploads/2022/12/20221216-1V9A1212.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"> <small className="text-muted"> By {!author?"Unknown":author} on {new Date (date).toGMTString()}</small></p>
            <a rel="noreferance" href={newsUrl} className="btn btn-sm btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItems;
