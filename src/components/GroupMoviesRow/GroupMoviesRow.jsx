import React from 'react';
import './GroupMoviesRow.css';
import MovieRow from '../MovieRow/MovieRow';

const moviesRows = (movieList) => (
    movieList.map((item, key) => (
        <MovieRow key={key} title={item.title} items={item.items} />
    ))
);

export default ({ movieList }) => {
    return (
        <section className="lists">
            {moviesRows(movieList)}
        </section>
    );
}