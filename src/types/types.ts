export type NewsType = {
    author: string
    comment_text: string | null
    created_at: string
    created_at_i: number
    num_comments: number
    objectID: string
    parent_id: string | null
    points: number
    story_id: string | null
    story_text: string | null
    story_title: string | null
    story_url: string | null
    title: string
    url: string
    _highlightResult: object | null
    _tags: object[] | null
}

export type NewsState = { latestNews: NewsType[] }

export interface NewsProps {
    news: NewsType[]
    label: string
}
