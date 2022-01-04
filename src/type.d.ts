import images768 from "./images/768"
import images1080 from "./images/1080"

interface IArticle {
    id: number
    title: string
    body: string
}

type ArticleState = {
    articles: IArticle[]
}

type ArticleAction = {
    type: string
    article: IArticle
}

type DispatchType = (args: ArticleAction) => ArticleAction

interface iProjectProps {
    title: string
    desc: string
    image: keyof typeof images1080 | keyof typeof images768
    list: string[]
    url: string
    delay?: number
}
