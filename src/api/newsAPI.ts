/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import axios from 'axios'
import { NewsType } from '../types/types'

const axiosInstance = axios.create({
    baseURL: 'https://hn.algolia.com/api/v1/search',
})

export const getNews = async (searchQuery: string) => {
    const request = (await axiosInstance
        .get(`?query=${searchQuery}&tags=story&hitsPerPage=10&page=1`)
        .then((response) => response.data.hits)) as NewsType[]
    return request
}

export const getPopularNews = async () => {
    const request = (await axiosInstance
        .get(`?query=&tags=story&hitsPerPage=10&page=1`)
        .then((response) => response.data.hits)) as NewsType[]
    return request
}
