import { Card, Grid } from '@nextui-org/react'
import React from 'react'
import { useRouter } from 'next/router';

interface Props {
    idPokemon: number
}

export const FavoriteCardPokemon = ({idPokemon}:Props) => {
  const router = useRouter()
  const onFavoriteClicked = () => {
    router.push(`/pokemon/${idPokemon}`)
  }
  return (
    <>
        <Grid xs={6} sm={3} xl={1} key={idPokemon}>
            <Card hoverable clickable css={{padding:'10'}} onClick={onFavoriteClicked}>
                <Card.Image 
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idPokemon}.svg`}
                  width={'100%'}
                  height={140}
                />

            </Card>
        </Grid>
    </>
  )
}
