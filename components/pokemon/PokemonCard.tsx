import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import React from 'react'
import { SmallPokemon } from '../../interfaces'

interface Props{
    children?: JSX.Element | JSX.Element[];
    pokemon: SmallPokemon;
}

export const PokemonCard = ({pokemon}:Props) => {
    const { id, name, img} = pokemon;
    const router = useRouter();
    const onPokemonClick = () => {
        router.push(`/pokemonByNamePage/${name}`)
    }
    return (
        <Grid xs={6} sm={3} md={2} xl={1} key={id}>
            <Card 
                hoverable 
                clickable
                onClick={onPokemonClick}
            >
                <Card.Body css={{padding:1}}>
                <Card.Image
                    src={img}
                    width="100%"
                    height={140}
                />
                </Card.Body>
                <Card.Footer>
                <Row justify='space-between'>
                    <Text transform='capitalize'>
                        {name}
                    </Text>
                    <Text >
                        #{id}
                    </Text>
                </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )
}
