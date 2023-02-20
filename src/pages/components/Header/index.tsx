import { List } from './style'

export default function Header() {
    return (
        <>
            <List>
                <li><a href="#initialPage">Home</a></li>
                <li><a href="#about">About me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </List>
        </>
    )
}