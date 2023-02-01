// Component 
type ParagraphType = {
    title: string,
    children: string | JSX.Element | JSX.Element[]
}


export function Paragraph ({title,  children}: ParagraphType) {
    return (
        <div>
            <h3>{ title }</h3>
            { children }
        </div>
    )
}