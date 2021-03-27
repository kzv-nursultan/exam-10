import { GET_DATA_FAILURE, GET_DATA_SUCCESS, GET_DATA_REQUEST, GET_ONE_DATA_SUCCESS,
    POST_DATA_FAILURE, POST_DATA_SUCCESS, POST_DATA_REQUEST } from "../actions/actions";

const initialState = {
    loading:false,
    value:[],
    news:{},
    error:false
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_DATA_REQUEST:
            return {...state, loading:true};
        case POST_DATA_SUCCESS:
            return {...state, loading: false};
        case POST_DATA_FAILURE:
            return {...state, error:true, loading:false};
        case GET_DATA_REQUEST:
            return {...state, loading:true};
        case GET_DATA_SUCCESS:
            return {...state, value:action.value, loading: false};
        case GET_ONE_DATA_SUCCESS:
            return {...state, news: action.value}
        case GET_DATA_FAILURE:
            return {...state, error:true, loading:false};
        default :
            return state;
    };
};