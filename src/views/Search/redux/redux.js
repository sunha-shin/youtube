const initialState = {
    searchResult:{}
}

export const Action = {
    Types:{
        UPDATE_STATE:'SEARCH/UPDATE_STATE',
        GET_SEARCH_RESULT:'SEARCH/GET_SEARCH_RESULT',
        SET_SEARCH_RESULT:'SEARCH/SET_SEARCH_RESULT',
    },
    Creators: {
        updateState:(props) => ({
            type:Action.Types.UPDATE_STATE,
            props
        }),
        getSearchResult:(payload) => ({
            type:Action.Types.GET_SEARCH_RESULT,
            payload
        }),
        setSearchResult:(payload) => ({
            type:Action.Types.SET_SEARCH_RESULT,
            payload
        }),
    }
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        default: return state;
        case Action.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.props
            }
        }
        case Action.Types.SET_SEARCH_RESULT: {
            return {
                ...state,
                searchResult: action.payload
            }
        }
    }
};

export default reducer;