import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
    const [article, setArticle] = useState([]);
    const [loding, setLoding] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResult, setTotalResult] = useState(0)
    // const [queryVal, setQueryVal] = useState('')

    const update = async (page) => {
        props.setprogress(30);
        setLoding(true);
        let q = (props.query === '') ? '' : '&q=' + props.query;
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page}&pageSize=${props.pageSize}${q}`;
        let par = await fetch(url);
        props.setprogress(50);
        let data = await par.json();
        props.setprogress(80);
        console.log(data)
        setTotalResult(data.totalResults);
        setArticle(data.articles);
        setLoding(false);
        props.setprogress(100);
    }
    useEffect(() => {
        update(page);
        // props
    }, [props.query])

    const fetchMoreData = async () => {
        let q = (props.query === '') ? '' : '&q=' + props.query;
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page+1}&pageSize=${props.pageSize}${q}`;
        let par = await fetch(url);
        let data = await par.json();
        console.log(data.articles);
        setArticle(article.concat(data.articles));
        setPage(page + 1);
    }
    const capitlize = (val) => {
        return val.charAt(0).toUpperCase() + val.slice(1);
    }
    return (
        <>
            <h1 className='text-center' style={{marginTop: '100px'}}>News Awesome - {capitlize(props.category)} News</h1>
            {loding && <Spinner />}
            {!loding && <InfiniteScroll
            dataLength={article.length}
            next={fetchMoreData}
            hasMore={article.length !== totalResult}
            loader=
            {<h1 className='text-center'>loding...</h1>}>
            <div className="container">
                <div className="row">
                    {!loding && article.map((ele) => {
                        return <div className="col-md-4 my-3" key={ele.url}>
                            <NewsItem title={ele.title} description={ele.description} imageUrl={ele.urlToImage} url={ele.url} author={ele.author} date={ele.publishedAt} source={ele.source.name} />
                        </div>
                    })}
                </div>
            </div>
            </InfiniteScroll>}
        </>
    )
}
News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
}
News.prototype = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}