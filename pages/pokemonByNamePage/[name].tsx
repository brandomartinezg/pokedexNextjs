import { Grid, Card, Button, Container, Text } from '@nextui-org/react';
import confetti from 'canvas-confetti';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image';
import React, { useState } from 'react'
import { pokeApi } from '../../api'
import { Layout } from '../../components/layouts';
import { Pokemon, PokemonRequest } from '../../interfaces'
import { localFavorites } from '../../utils';
import { getPokemonInfo } from '../../utils/getPokemonInfo';

interface Props{
    pokemon: PokemonRequest;
}

const PokemonByNamePage:NextPage<Props>  = ({pokemon}) => {
    const [isInFavorites, setIsInFavorites] = useState(localFavorites.existInFavorites(pokemon.id));

    const onToggleFavorite = () => {
        localFavorites.toggleFavorite(pokemon.id);
        setIsInFavorites(!isInFavorites);
        if(!isInFavorites){
            confetti({
                zIndex: 999,
                particleCount:100,
                spread:160,
                angle:-100,
                origin:{
                    y:0,
                    x:1
                }
            })
        }
    }
    return (
        <Layout title={`${pokemon.name}`}>
            <Grid.Container css={{marginTop:'5px'}} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card hoverable css={{padding:'30px'}}>
                        <Card.Body>
                            <Card.Image
                                src={pokemon.sprites.other?.dream_world.front_default || './no-image.png'}
                                alt='pokemonname'
                                width={'100%'}
                                height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid sm={8} xs={12}>
                    <Card>
                        <Card.Header css={{display:'flex', justifyContent:'space-between'}}>
                            <Text h1 transform='capitalize'>{pokemon.name}</Text>
                            <Button
                                color={'gradient'}
                                ghost={!isInFavorites}
                                onClick={onToggleFavorite}
                            >
                                {isInFavorites ?'En favoritos' : 'Guardar en favoritos'}
                            </Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites:</Text>
                            <Container display='flex'>
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt='front-default'
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt='front-default'
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt='front-default'
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt='front-default'
                                    width={100}
                                    height={100}
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const pokemon = await pokeApi.get<Pokemon>('/pokemon?limit=151');
    const pokemons151 = pokemon.data.results.map((val) => `${val.name}`)
    return {
        paths: pokemons151.map(name => ({
            params:{
                name
            }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { params } = ctx;
    const { name } = params as { name: string};

    return {
        props: {
            pokemon: await getPokemonInfo(name)
        }
    }
}
export default PokemonByNamePage;
