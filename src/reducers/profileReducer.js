import { FETCH_PROFILE, FETCH_REQUEST} from '../actions/types'

const initialState = {
    //items: [] for a lot of items
    item: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_REQUEST:
        return {
            ...state,
            profile: action.payload,
            loading: true 
        }
        case FETCH_PROFILE:
        console.log('reducer');
        return {
            ...state,
            profile: action.payload,
            loading: false
        }
        default:
            return state;
    }
}