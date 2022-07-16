/* eslint-disable camelcase */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */
import React from 'react'
import s from './News.module.css'
import { NewsProps } from '../../types/types'

const News: React.FC<NewsProps> = ({ news, label }) => {
    if (!news || news.length === 0) {
        return null
    }

    return (
        <div>
            <h2>{`${label}:`}</h2>
            <ul className={s.news_list}>
                {news.map(
                    ({
                        objectID,
                        url,
                        title,
                        points,
                        num_comments,
                        created_at,
                        author,
                    }) => (
                        <li key={objectID} className={s.news}>
                            <div className={s.description}>
                                <a href={url} className={s.news_title}>
                                    {title || 'No title'}
                                </a>
                                <span className={s.text}>{`${
                                    points || 0
                                } points`}</span>
                                <span className={s.comments}>{`${
                                    num_comments || 0
                                } comments`}</span>
                                <span className={s.date}>
                                    {new Date(created_at).toLocaleDateString()}
                                </span>
                                <span className={s.author}>
                                    {author || 'no author'}
                                </span>
                            </div>
                        </li>
                    )
                )}
            </ul>
        </div>
    )
}

export default News
