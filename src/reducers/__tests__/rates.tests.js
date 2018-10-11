import ratesReducer from '../ratesReducer'
import { FETCH_RATES } from '../../actions/types'

it('handles actions of type FETCH_RATES', () => {
  const action = {
    type: FETCH_RATES,
    payload: {rate: []}
  }

  const newState = ratesReducer(null, action)

  expect(newState).toEqual({rate: []})
})

it('handles actions of unknown type', () => {
  const newState = ratesReducer(null, { type: 'SODIFJ'} )

  expect(newState).toEqual(null)
})
