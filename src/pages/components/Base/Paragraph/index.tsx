// Component 
type ParagraphType = {
    title: string,
    children: string | JSX.Element | JSX.Element[],
    className?: string
}


export function Paragraph ({title,  children, className}: ParagraphType) {
    return (
        <div className={className} >
            <h3>{ title }</h3>
            { children }
        </div>
    )
}