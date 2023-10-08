import React from 'react'

export default function NewsItem(props){
        let { title, description, imageUrl, url, author, date, source } = props;
        let d = new Date(date);
        return (
            <div className='my-3'>
                <div className="card">
                    <div>
                        <span className="badge rounded-pill bg-success" style={{ position: 'absolute', display: 'flex', justifyContent: 'flex-end', right: 0 }}>{source}</span>
                    </div>
                    <img className="card-img-top" src={(imageUrl) ? imageUrl : 'https://www.theforage.com/blog/wp-content/uploads/2022/09/tech-companies.jpg'} alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">{(title) ? title.slice(0, 45) : 'abhishek sahu is good boy'}...</h5>
                        <p className="card-text">{(description) ? description.slice(0, 88) : 'unknow'}...</p>
                        <p className="card-text"><small className="text-body-secondary">By {(author)?author:'Unknown'} • {d.toGMTString()}</small></p>
                        <a href={url} className="btn btn-primary" target='_blank'>Read More 👈</a>
                    </div>
                </div>
            </div>
        )
}
