const initialState = {
    videoList: {}
}

export const Action = {
    Types: {
        UPDATE_STATE: 'HOME/UPDATE_STATE',
        GET_VIDEO: 'HOME/GET_VIDEO',
        SET_VIDEO: 'HOME/SET_VIDEO',
        GET_CHANNEL_IMAGE:'HOME/GET_CHANNEL_IMAGE',
        SET_CHANNEL_IMAGE:'HOME/SET_CHANNEL_IMAGE',
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
        }),
        getChannelImage: (payload) => ({
            type:Action.Types.GET_CHANNEL_IMAGE,
            payload
        }),
        setChannelImage:(payload) => ({
            type:Action.Types.SET_CHANNEL_IMAGE,
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