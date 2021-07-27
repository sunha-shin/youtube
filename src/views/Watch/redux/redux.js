const initialState = {
    videoItem: [],
    commentsItem: {}
}

export const Action = {
    Types: {
        UPDATE_STATE: 'WATCH/UPDATE_STATE',
        GET_VIDEO_BY_ID: 'WATCH/GET_VIDEO_BY_ID',
        SET_VIDEO_BY_ID: 'WATCH/SET_VIDEO_BY_ID',
        GET_COMMENTS:'WATCH/GET_COMMENTS',
        SET_COMMENTS:'WATCH/SET_COMMENTS',
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
        }),
        getComments: (payload) => ({
            type: Action.Types.GET_COMMENTS,
            payload
        }),
        setComments: (payload) => ({
            type: Action.Types.SET_COMMENTS,
            payload
        }),
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
        case Action.Types.SET_COMMENTS :{
            return {
                ...state,
                commentsItem:action.payload
            }
        }
    }
};

export default reducer;