import { SecondTitle } from '@/pages/components/Base/style'

// Component 
type ParagraphType = {
    title: string,
    children: string | JSX.Element | JSX.Element[],
    className?: string
}


export function Paragraph ({title,  children, className}: ParagraphType) {
    return (
        <div className={className} >
            <SecondTitle>{ title }</SecondTitle>
            { children }
        </div>
    )
}