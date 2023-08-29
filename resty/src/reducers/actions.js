export const initState = {
    data: {headers: null, results: null},
    requestParams: {},
    loading: false,
};

export const actionType = {
    LOADING: "LOADING",
    REQUEST_PARAMS: "REQUEST_PARAMS",
    DATA: "DATA",
};


export const formInitState = {
    method: "GET",
    url: " ",
};

export const formActionType = {
    METHOD: "METHOD",
    URL: "URL",
};


export function reducer(state, action) {
    switch (action.type) {
        case actionType.LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        case actionType.REQUEST_PARAMS:
            return {
                ...state,
                requestParams: action.payload,
            };
        case actionType.DATA:
            return {
                ...state,
                data: action.payload,
            };
        case formActionType.METHOD:
            return {
                ...state,
                method: action.payload,
            };
        case formActionType.URL:
            return {
                ...state,
                url: action.payload,
            };
        default:
            return state;
    }
}
