import { NewsType } from './../redux/reducers/newsReducer'
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://hn.algolia.com/api/v1/search',
})

export const getLatestNews = async () => {
    const request = (await axiosInstance
        .get(`?query=react&tags=story&hitsPerPage=10&page=1`)
        .then((response) => response.data.hits)) as NewsType[]
    return await request
}
