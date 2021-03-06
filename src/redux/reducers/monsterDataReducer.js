
const monsterDataReducer = (state = [], action) => {
  switch (action.type) {
    case "DMG_MONSTER":
      return state.map(monster => {
        if (monster.id === action.monsterId){
          return{
            ...monster,
            hp: action.payload
          }
        } else {
          return monster
        }
      })
    case "MOVE_MONSTER":
      return state.map(monster => {
        if(monster.id === action.monsterId){
          return {
            ...monster,
            x: action.payload.x,
            y: action.payload.y
          }
        } else {
          return monster
        }
      })
    case "KILL_MONSTER":
      return action.newMonsters
    case "FETCHED_MONSTERS":
      return action.monsters
    default:
      return state;
  }
}

export default monsterDataReducer


// case "MOVE_MONSTERX":
//   return state.map(monster => {
//     if(monster.id === action.monsterId){
//       return {
//         ...monster,
//         x: action.payload.x,
//       }
//     } else {
//       return monster
//     }
//   })
// case "MOVE_MONSTERY":
//   return state.map(monster => {
//     if(monster.id === action.monsterId){
//       return {
//         ...monster,
//         y: action.payload.y
//       }
//     } else {
//       return monster
//     }
//   })
