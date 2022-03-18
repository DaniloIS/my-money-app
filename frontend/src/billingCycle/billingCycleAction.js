import axios from 'axios';
import { toastr } from 'react-redux-toastr';

const BASE_URL = 'http://localhost:3003/api';

export function getList(){
    const req = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLE_FETCHED',
        payload: req
    }
}

export function create(values) {
    axios.post(`${BASE_URL}/billingCycles`, values)
        .then(res => {
            toastr.success('Sucesso', 'Operação realizada com sucesso.')
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Erro', error))
        })
    return {
        type: 'TEMP'
    }
}