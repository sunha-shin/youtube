const initialState = {
    videoItem: [],
    commentsItem: {},
    recommendVideos: {}
}

export const Action = {
    Types: {
        UPDATE_STATE: 'WATCH/UPDATE_STATE',
        GET_VIDEO_BY_ID: 'WATCH/GET_VIDEO_BY_ID',
        SET_VIDEO_BY_ID: 'WATCH/SET_VIDEO_BY_ID',
        GET_COMMENTS: 'WATCH/GET_COMMENTS',
        SET_COMMENTS: 'WATCH/SET_COMMENTS',
        GET_RECOMMEND_VIDEOS: 'WATCH/GET_RECOMMEND_VIDEO',
        SET_RECOMMEND_VIDEOS: 'WATCH/SET_RECOMMEND_VIDEO',
        GET_VIDEO_DETAIL:'WATCH/GET_VIDEO_DETAIL',
        SET_VIDEO_DETAIL:'WATCH/SET_VIDEO_DETAIL',
    },
    Creators: {
        updateState: (props) => ({
            type: Action.Types.UPDATE_STATE,
            props
        }),
        getVideoById: (id, payload) => ({
            type: Action.Types.GET_VIDEO_BY_ID,
            id, payload
        }),
        setVideoById: (id, payload) => ({
            type: Action.Types.SET_VIDEO_BY_ID,
            id, payload
        }),
        getComments: (id, payload) => ({
            type: Action.Types.GET_COMMENTS,
            id, payload
        }),
        setComments: (id, payload) => ({
            type: Action.Types.SET_COMMENTS,
            id, payload
        }),
        getRecommendVideos: (payload) => ({
            type: Action.Types.GET_RECOMMEND_VIDEOS,
            payload
        }),
        setRecommendVideos: (payload) => ({
            type: Action.Types.SET_RECOMMEND_VIDEOS,
            payload
        }),
        getVideoDetail:(payload) => ({
            type:Action.Types.GET_VIDEO_DETAIL,
            payload
        }),
        setVideoDetail:(id, payload) => ({
            type:Action.Types.SET_VIDEO_DETAIL,
            id,
            payload
        })
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case Action.Types.UPDATE_STATE : {
            return {
                ...state,
                ...action.props
            }
        }
        case Action.Types.SET_VIDEO_BY_ID : {
            return {
                ...state,
                [action.id]: action.payload
            }
        }
        case Action.Types.SET_COMMENTS : {
            return {
                ...state,
                [action.id]: action.payload
            }
        }
        // case Action.Types.SET_RECOMMEND_VIDEOS : {
        //     return {
        //         ...state,
        //         [action.id]: action.payload
        //     }
        // }
        // case Action.Types.SET_VIDEO_DETAIL : {
        //     return {
        //         ...state,
        //         [action.id] : action.payload
        //     }
        // }
    }
};

export default reducer;