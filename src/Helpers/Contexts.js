import { createContext } from "react";

const Gamestarted =createContext('');

const Playerturn = createContext('')
const Opponentturn= createContext('')
const GameData = createContext('')

export {Gamestarted,Playerturn,Opponentturn,GameData};
