import { combineReducers } from 'redux';
import playerMovementReducer from './playerMovementReducer';
import monstMovementReducer from './monstMovementReducer';
import playerSpriteReducer from './playerSpriteReducer';
import monsterDataReducer from './monsterDataReducer';
import playerDataReducer from './playerDataReducer';
import currentOpponentReducer from './currentOpponentReducer'

// import indexReducer from './indexReducer'

const rootReducer = combineReducers({
  player: combineReducers({
    position: playerMovementReducer,
    spritepx: playerSpriteReducer,
    data: playerDataReducer,
    opponent: currentOpponentReducer,
  }),
  monsters: combineReducers({
    data: monsterDataReducer,
    // position: monstMovementReducer
  })
})

export default rootReducer
