import {  Project } from "@/types/Project"

export const Projects: Array<Project> = [
    {
        title: 'Spotify Playlist Clone',
        description: 'I tried to re-created a simple playlist dashboard from Spotify. I was focused on understanding how audio process worked in a JavaScript enviroment.',
        link: 'https://music-playlist-psi.vercel.app/',
        github: 'https://github.com/matheusjv11/Spotify-clone',
        tech: [
            'Vue',
            'HTML/CSS',
            'JavaScript'
        ],
        banner: 'images/project-spotify.gif'
    },
    {
        title: 'Table Tennis Game',
        description: 'Focused on learning how to use the Canvas, I started developing a table tennis game. Still in progress, I intend to use WebSocket to integrate players.',
        link: '',
        github: 'https://github.com/matheusjv11/table-tennis-show',
        tech: [
            'Canvas',
            'HTML/CSS',
            'TypeScript'
        ],
        banner: 'images/project-tennis.gif'
    },
    {
        title: 'Simple Netflix Clone',
        description: 'In order to learn React, I made this project in a course in the middle of 2020. The goal was just study how the components on React where structured.',
        link: 'https://californiaflix.vercel.app/',
        github: 'https://github.com/matheusjv11/californiaflix',
        tech: [
            'React',
            'HTML/CSS',
            'JavaScript'
        ],
        banner: 'images/project-netflix.gif'
    }
]


