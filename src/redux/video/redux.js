const initialState = {
    videoList: {},
    videoItem: []
}

export const Action = {
    Types: {
        UPDATE_STATE: 'VIDEO/UPDATE_STATE',
        GET_VIDEO: 'VIDEO/GET_VIDEO',
        SET_VIDEO: 'VIDEO/SET_VIDEO',
        GET_VIDEO_BY_ID: 'VIDEO/GET_VIDEO_BY_ID',
        SET_VIDEO_BY_ID: 'VIDEO/SET_VIDEO_BY_ID',
    },
    Creators: {
        updateState: (props) => ({
            type: Action.Types.UPDATE_STATE,
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
        getVideoById: (payload) => ({
            type: Action.Types.GET_VIDEO_BY_ID,
            payload
        }),
        setVideoById: (payload) => ({
            type: Action.Types.SET_VIDEO_BY_ID,
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
        case Action.Types.SET_VIDEO_BY_ID: {
            return {
                ...state,
                videoItem: action.payload
            }

        }
    }
};

export default reducer;