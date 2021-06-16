import React from 'react';
import MovieComponents from './movie-components';

let e = React.createElement;

export default class MovieContainer extends React.Component {
    render() {

        return(
            <div className='container'>
                <MovieComponents />
            </div>
        )
    }
}