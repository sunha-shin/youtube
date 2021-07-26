const initialState = {
    videoList: {}
}

export const Action = {
    Types: {
        UPDATE_STATE: 'HOME/UPDATE_STATE',
        GET_VIDEO: 'HOME/GET_VIDEO',
        SET_VIDEO: 'HOME/SET_VIDEO',
    },
    Creators: {
        updateState:(props) => ({
            type:Action.Types.UPDATE_STATE,
            props
        }),
        getVideo: (payload) => ({
            type: Action.Types.GET_VIDEO,
            payload
        }),
        setVideo: (payload) => ({
            type: Action.Types.SET_VIDEO,
            payload
        })
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case Action.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.props
            }
        }
        case Action.Types.SET_VIDEO: {
            return {
                ...state,
                videoList: action.payload
            }
        }
    }
};

export default reducer;