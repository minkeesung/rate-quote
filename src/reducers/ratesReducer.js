import { FETCH_RATES, ERROR } from '../actions/types'


export default function(state = null, action){
  switch ( action.type ){
      case FETCH_RATES:
        return action.payload
      default:
        return state;
  }

}
