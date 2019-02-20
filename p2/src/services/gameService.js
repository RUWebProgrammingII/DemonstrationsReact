import { games } from '../../resources/games.json';

const getGames = () => games.sort((a, b) => a.place > b.place);

export default { getGames };
