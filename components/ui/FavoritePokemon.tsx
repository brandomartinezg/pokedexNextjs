import { Grid } from '@nextui-org/react'
import React from 'react'
import { FavoriteCardPokemon } from './FavoriteCardPokemon'

interface Props {
    favoritesPokemon: number[]
}

export const FavoritePokemon = ({favoritesPokemon}: Props) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
        {
            favoritesPokemon.map(id => (
                <FavoriteCardPokemon idPokemon={id} key={id}/>
            ))
        }
    </Grid.Container>
  )
}
