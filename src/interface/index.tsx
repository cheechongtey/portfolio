import images1080 from "../images/1080"
import images768 from "../images/768"

export interface iProjectProps {
    title: string
    desc: string
    image: keyof typeof images1080 | keyof typeof images768
    list: string[]
    url: string
    delay?: number
}
