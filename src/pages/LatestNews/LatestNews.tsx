/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/hooks/hooks'
import News from '../../components/News/News'

function LatestNews() {
    const latestNews = useAppSelector((store) => store?.news?.latestNews || [])
    const latestNewsError = useAppSelector(
        (store) => store?.errors.latestNewsError || ''
    )
    const dispatch = useAppDispatch()

    return (
        <div>
            <News
                news={latestNews}
                error={latestNewsError}
                label="Latest News"
            />
        </div>
    )
}

export default LatestNews
