import qs from 'qs'
import { FETCH_RATES, ERROR } from './types'

const API_URL = 'https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/quotes?'


export const fetchRates = (loanSize, creditScore, propertyType, occupancy) => dispatch => {
    let h = new Headers();
    h.append('Authorization', 'RG-AUTH 98f0f281-7f45-4421-afd8-549c621c58cb')

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
