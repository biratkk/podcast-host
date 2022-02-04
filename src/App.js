import React, { useState } from 'react';
import './App.css'


const episodeArr = [
    {
        name:"Episode 1 - Who am I?",
        file:require('./Podcasts/Episode 1 - Who am I.mp3'),
        episode:1
    }
];


export default function App(){
    return (
        <div>
            <h2>
            All episodes
            </h2>
            {
                episodeArr.map(episode => {
                    return (
                        <div className='episode-container'>
                            <audio src={episode.file} controls={true} />
                            {episode.name}
                        </div>
                    )
                })
            }
        </div>
    );
}