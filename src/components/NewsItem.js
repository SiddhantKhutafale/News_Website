import React from 'react'

const NewsItem = (props) => {


  let { title, description, imageUrl, newsUrl, author, publishedAt } = props;
  return (
    <div className='my-3'>
      <div className="card">
        <img src={!imageUrl ? "https://images.livemint.com/img/2022/07/03/1140x641/vitolda-klein-unsplash_1656844127371_1656844127565.jpg" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p class="card-text"><small class="text-muted">By {!author ? "Unknown" : author} at {new Date(publishedAt).toGMTString()}</small></p>
          <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )

}

export default NewsItem