import { useState, useEffect } from 'react'
import { List } from '@/styles/header'

export default function Header() {
    let lastScroll = 0
    const [ isHidden, setHiddenHeader] = useState(false)
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScroll ) {
                setHiddenHeader(true)
            } else {
                setHiddenHeader(false)
            }

            lastScroll = window.scrollY
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <>
            <List hidden={isHidden} >
                <li><a href="#initialPage">Home</a></li>
                <li><a href="#about">About me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </List>
        </>
    )
}