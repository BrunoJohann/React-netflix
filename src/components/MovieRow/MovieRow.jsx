import React, { useRef, useReducer } from 'react';
import './MovieRow.css';

import If from '../../If';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

const useForceRerender = () => useReducer(state => !state, false)[1];

export default ({ title, items: { results } }) => {

    const scrollXRef = useRef();
    const forceRender = useForceRerender();

    const callScrollX = () => window.innerWidth - 200;
    const scrollLeft = () => !!scrollXRef?.current?.scrollLeft;
    const scrollRight = () => scrollXRef?.current?.scrollLeft !== (scrollXRef?.current?.scrollWidth - scrollXRef?.current?.offsetWidth)

    const leftClickScroll = () => {
        const movieList = scrollXRef.current;
        movieList.scrollLeft -= callScrollX();
    }

    const rightClickScroll = () => {
        const movieList = scrollXRef.current;
        movieList.scrollLeft += callScrollX();
    }

    return (
        <If test={results.length}>
            <div className="movieRow">
                <h2>{title}</h2>
                    <div className="movieRow--left" style={{ opacity: scrollLeft() ? 1 : 0 } } onClick={leftClickScroll}>
                        <MdNavigateBefore style={{ fontSize: 50 }} />
                    </div>
                    <div className="movieRow--right" style={{ opacity: scrollRight() ? 1 : 0 } } onClick={rightClickScroll}>
                        <MdNavigateNext style={{ fontSize: 50 }} />
                    </div>
                <div className="movieRow--listarea">
                    <div className="movieRow--list" ref={scrollXRef} onScroll={forceRender}>
                        {results.map((item, key) => (
                            <div key={key} className="movieRow--item">
                                <img src={`http://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </If>
    );
}