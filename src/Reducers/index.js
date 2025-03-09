import { combineReducers } from "redux";
import PlayeroneReducer from "./Playerone";
import PlayertwoReducer from "./Playertwo";

const reducer = combineReducers({
    playerone: PlayeroneReducer,
    playertwo: PlayertwoReducer
})

export default reducer