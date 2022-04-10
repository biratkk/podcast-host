import React, { useState } from 'react';
import Logo from './Logo.png'
import './App.css'


const episodeArr = [
    {
        name:"Episode 1 - Who am I?",
        file:require('./Podcasts/Episode 1 - Who am I.mp3'),
        episode:1
    },
    {
        name:"Episode 2 - Technology, Uni Life and Saving the Planet",
        file:require('./Podcasts/Episode 2 - Friends and Co.mp3'),
        episode:2
    },
    {
        name:"Episode 3 - Education, Purpose and Success",
        file:require('./Podcasts/Episode 3 - Education, Purpose and Success.mp3'),
        episode:3
    }
];


export default function App(){
    return (
        <div>
            <img src = {Logo}/>
            <h2>
            All episodes
            </h2>
            {
                episodeArr.map(episode => {
                    return (
                        <div className='episode-container'>
                            {episode.name}
                            <audio src={episode.file} controls={true} />
                        </div>
                    )
                })
            }
        </div>
    );
}