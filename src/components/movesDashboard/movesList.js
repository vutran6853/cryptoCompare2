import React, { Component } from 'react';
import css from './movies.css';

class MoviesDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    render() {
        console.log(`this.props`, this.props)
        return (
            <div className='box1'>
                <p>Movies Components</p>
            </div>
        );
    }
}

export default MoviesDashboard;