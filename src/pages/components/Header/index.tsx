import { List } from './style'

export default function Header() {
    return (
        <>
            <List>
                <li><a href="#initialPage">Home</a></li>
                <li><a href="#about">About me</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </List>
        </>
    )
}