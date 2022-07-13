import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://hn.algolia.com/api/v1/search',
})

export const getLatestNews = async () => {
    const request = await axiosInstance
        .get(`?query=react&tags=story&hitsPerPage=10&page=0`)
        .then((response) => console.dir(response))
    return await request.json
}
