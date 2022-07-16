/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/hooks/hooks'
import News from '../../components/News/News'
import actions from '../../redux/actions/actionCreator'

function PopularNews() {
    const popularNews = useAppSelector((store) => store?.news.popularNews || [])
    const popularNewsError = useAppSelector(
        (store) => store?.errors.popularNewsError || ''
    )

    const isLoading = useAppSelector((store) => store?.loader.isLoading)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(actions.getPopularNews())
    }, [dispatch])

    return (
        <div>
            {isLoading ? (
                <h3>Loading...</h3>
            ) : (
                <News
                    news={popularNews}
                    error={popularNewsError}
                    label="Popular News"
                />
            )}
        </div>
    )
}

export default PopularNews
