import Head from 'next/head'
import React from 'react'
import { Navbar } from '../ui';

interface Props{
    children: JSX.Element | JSX.Element[];
    title?: string;
}

const origin = typeof window === "undefined" ? '' : window.location.origin;

export const Layout = ({children, title}: Props) => {
  return (
    <>
        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name='Author' content='Brando Martínez'/>
            <meta name='description' content='Información sobre el pokemon XXXX'/>
            <meta name='keywords' content='XXXX, pokemon, pokedex'/>
            <meta property="og:title" content={`Información sobre ${title}`} />
            <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
            <meta property="og:image" content={`${origin}/img/banner.png`} />
        </Head>
        <Navbar/>
        <main style={{
          padding:'0px 20px'
        }}>
            {children}
        </main>
    </>
  )
}
