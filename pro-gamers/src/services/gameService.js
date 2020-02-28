import { games } from '../resources/games.json';

export const getGames = () => games.sort((a, b) => a.place > b.place);
