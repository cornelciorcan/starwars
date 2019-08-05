import React from 'react';
import Card from './Card';

const CardList = ({ films }) => {
        
          films.map((film, i) => {
            return (
              <Card
                key={film.title}
                id={film.episode_id}
                title={film.title}
                release={film.release_date}
                producer={film.producer}
                />
            );
          })
        
      
    
  }
  export default CardList;