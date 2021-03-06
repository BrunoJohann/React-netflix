import React from 'react';
import './FeaturedMovie.css';

import { AiFillCaretRight } from 'react-icons/ai';

export default ({ item }) => {

    let firstDate = new Date(item.first_air_date);
    let genres = item.genres.map(gen => gen.name).join(', ');

    const style = {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    };

    return (
        <section className="featured" style={style}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{ item.original_name }</div>
                    <div className="featured--info">
                        <div className="featured--points">{ item.vote_average } pontos</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{ item.number_of_seasons } temporada{ item.number_of_seasons !== 1 ? 's' : '' }</div>
                    </div>
                    <div className="featured--description">{ item.overview }</div>
                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className="featured--watchbutton"><AiFillCaretRight/> Assistir</a>
                        <a href={`/list/add/${item.id}`} className="featured--addbutton">+ Minha Lista</a>
                    </div>
                    <div className="featured--genres"><strong>Gêneros:</strong> { genres }</div>
                </div>
            </div>
        </section>
    );
}
