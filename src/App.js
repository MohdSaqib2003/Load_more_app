import React from "react";
import './App.css';
import { useState, useEffect } from 'react';
import ArticlesList from './API/Article';
import { Pagination } from 'antd';
import 'antd/dist/antd.css';

const PAGE_NUMBER = 1;

const App = () => {

    const [list, setList] = useState([]);
    const [page, setPage] = useState(PAGE_NUMBER);
    const [status, setStatus] = useState(false);

    useEffect(async () => {
        ArticlesList.get('', {
            params: { page: page }
        })
            .then(response => {
                setList([...list, ...response.data]);
                if (response.status === 200) {
                    setStatus(true);
                }
                // console.log(response.status);
            })
            .catch(error => {
                console.log(error);
            });
        // console.log(list, page);
    }, [page])


    const scrollToEnd = () => {
        setPage(page + 1);
    }


    //   window.addEventListener('scroll', () => {
    //     if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {

    //     //   console.log("window.innerHeight : ", window.innerHeight);
    //     //   console.log("document.documentElement.scrollTop : ", document.documentElement.scrollTop);
    //     //   console.log("document.documentElement.offsetHeight : ", document.documentElement.offsetHeight);

    // }
    // })


    const renderedList = list.map((el, i) => {
        return (
            <div key={i} className='container' style={{ border: '1px solid black', margin: '10px' }}>
                <h1> Name : {el.channel} </h1>
                <h3> NID : {el.nid} </h3>
            </div>)
    })

    return (
        <div style={{ textAlign: 'center' }}>
            {renderedList}

            {status ? <button onClick={scrollToEnd}> Add more </button> : ""}
            <div>
            </div>
        </div>
    );

}
export default App;