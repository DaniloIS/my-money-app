import axios from 'axios';

const BASE_URL = 'http://localhost:3003/api'

export function getList(){
    const req = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLE_FETCHED',
        payload: req
    }
}

export function create(values) {
    axios.post(`${BASE_URL}/billingCycles`, values)
    return {
        type: 'TEMP'
    }
}