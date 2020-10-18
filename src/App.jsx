import React, { useEffect, useState } from 'react';
import './App.css';

import If from './If';
import Tmdb from './Tmdb';
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';
import GroupMoviesRow from './components/GroupMoviesRow/GroupMoviesRow';
import Header from './components/Header/Header';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    loadAll();
  // eslint-disable-next-line
  }, [])

  //Pegando a lista TOTAL
  const loadAll = async() => {
    let list = await Tmdb.getHomeList();
    setMovieList(list);

    await getFeaturedMovie(list);
  }

  const getFeaturedMovie = async (list) => {
    let originals = list.filter( movie => movie.slug === 'originals' );
    let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
    let chosen = originals[0].items.results[randomChosen];
    let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
    setFeaturedData(chosenInfo);
  }

  return (
    <div className="page">
      <Header/>

        <If test={featuredData}>
          <FeaturedMovie item={featuredData} />
        </If>

      <GroupMoviesRow movieList={movieList}/>

      <footer>
        Feito com <span role="img" aria-label="coração">❤</span> pelo Harry<br/>
        Direitos de imagem para Netflix<br/>
        Dados pegos do site Themoviedb.org
      </footer>
    </div>
  );
}

export default App;
