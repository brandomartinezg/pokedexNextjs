
const toggleFavorite = (id: number) => {
    
    let favorites:number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    if(favorites.includes(id)){
        favorites = favorites.filter(pokeid => pokeid !== id)
    }
    else{
        favorites.push(id);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

const existInFavorites = (id: number): boolean => {
    if(typeof window === 'undefined') return false;
    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.includes(id);
}

const pokemons = ():number[] => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

const exportDefault = {
    toggleFavorite,
    existInFavorites,
    pokemons
}

export default exportDefault;