/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/hooks/hooks'
import News from '../../components/News/News'
import actions from '../../redux/actions/actionCreator'

function LatestNews() {
    const latestNews = useAppSelector((store) => store?.news?.latestNews || [])
    const latestNewsError = useAppSelector(
        (store) => store?.errors.latestNewsError || ''
    )
    const isLoading = useAppSelector((store) => store?.loader?.isLoading)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(actions.getLatestNews())
    }, [dispatch])

    return (
        <div>
            {isLoading ? (
                <h3>Loading...</h3>
            ) : (
                <News
                    news={latestNews}
                    error={latestNewsError}
                    label="Latest News"
                />
            )}
        </div>
    )
}

export default LatestNews
