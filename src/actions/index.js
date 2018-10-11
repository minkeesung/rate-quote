import qs from 'qs'
import { FETCH_RATES } from './types'

const API_URL = 'https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/quotes?'


export const fetchRates = (loanSize, creditScore, propertyType, occupancy) => dispatch => {
    let h = new Headers();

    // insert auth token as the second argument in append function
    h.append('Authorization', )

    const query = qs.stringify({loanSize, creditScore, propertyType, occupancy})
    const API_QUERY_URL = `${API_URL}${query}`

    fetch(API_QUERY_URL, {
       method: 'GET',
       headers: h,
    })
      .then(response => response.json())
      .then( data => { dispatch ({type: FETCH_RATES, payload: data })
    } )
}
