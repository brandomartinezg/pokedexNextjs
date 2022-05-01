import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts'
import { NoFavorites } from '../../components/ui'
import { FavoritePokemon } from '../../components/ui';
import { localFavorites } from '../../utils';

const FavoritesPage = () => {
  const [favoritesPokemon, setfavoritesPokemon] = useState<number[]>([]);
  useEffect(() => {
    setfavoritesPokemon(localFavorites.pokemons);
  }, [])
  
  return (
    <Layout title='pokemon favoritos'>
      {
        favoritesPokemon.length === 0 ?
        <NoFavorites/> :
        <FavoritePokemon favoritesPokemon={favoritesPokemon}/>
      }
    </Layout>
  )
}

export default FavoritesPage