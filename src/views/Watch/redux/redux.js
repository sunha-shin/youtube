const initialState = {
    videoItem: []
}

export const Action = {
    Types: {
        UPDATE_STATE: 'WATCH/UPDATE_STATE',
        GET_VIDEO_BY_ID: 'WATCH/GET_VIDEO_BY_ID',
        SET_VIDEO_BY_ID: 'WATCH/SET_VIDEO_BY_ID',
    },
    Creators: {
        updateState: (props) => ({
           type:Action.Types.UPDATE_STATE,
           props
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

const reducer = (state=initialState, action) => {
    switch(action.type) {
        default:
            return state;
        case Action.Types.UPDATE_STATE :{
            return {
                ...state,
                ...action.props
            }
        }
        case Action.Types.SET_VIDEO_BY_ID : {
            return {
                ...state,
                videoItem:action.payload
            }
        }
    }
};

export default reducer;