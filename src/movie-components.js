import React from 'react';

import Comment from './movie-comment-container';
import Container from './components/container';

import Shrek2 from './components/movies/shrek-2'
import TheAvengers from './components/movies/the-avengers'
import TheDoS from './components/movies/the-death-of-stalin'


let e = React.createElement;

export default class MovieComponents extends React.Component {
    render() {

        return(
            <div className='card w-75'>

                <div className="card-header bg-primary text-white">
                    Movie Review
                </div>
                <div className="card-body">
                    <Shrek2 />
                </div>
                <div className='card-footer'>
                    <Container />
                    <Comment />
                </div>

                <br></br>

                <div className="card-header bg-primary text-white">
                    Movie Review
                </div>
                <div className="card-body">
                    <TheAvengers />
                </div>
                <div className='card-footer'>
                    <Container />
                    <Comment />
                </div>

                <br></br>

                <div className="card-header bg-primary text-white">
                    Movie Review
                </div>
                <div className="card-body">
                    <TheDoS />
                </div>
                <div className='card-footer'>
                    <Container />
                    <Comment />
                </div>

            </div>

            
        )
    }
}