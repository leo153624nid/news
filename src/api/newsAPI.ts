import { NewsType } from '../types/types'
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://hn.algolia.com/api/v1/search',
})

export const getLatestNews = async (searchQuery: string) => {
    const request = (await axiosInstance
        .get(`?query=${searchQuery}&tags=story&hitsPerPage=10&page=1`)
        .then((response) => response.data.hits)) as NewsType[]
    return await request
}
