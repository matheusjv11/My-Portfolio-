import { SecondTitle } from '@/styles/base'

// Component 
type ParagraphType = {
    title: string,
    children: string | JSX.Element | JSX.Element[],
    className?: string
}


export default function Paragraph ({title,  children, className}: ParagraphType) {
    return (
        <div className={className} >
            <SecondTitle>{ title }</SecondTitle>
            { children }
        </div>
    )
}