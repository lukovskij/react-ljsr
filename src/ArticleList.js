import React from 'react'
import Article from './Article'

export default function ArticleList ({articles}) {
    let articlesEl = articles.map( item => {
       return <li key={ item.id }> <Article article = {item}/></li>
    })
    return (
       <ul>
           {articlesEl}
       </ul>
    )
}