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
    },
    Creators: {
        updateState: (props) => ({
            type: Action.Types.UPDATE_STATE,
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
        getRecommendVideos: (payload) => ({
            type: Action.Types.GET_RECOMMEND_VIDEOS,
            payload
        }),
        setRecommendVideos: (payload) => ({
            type: Action.Types.SET_RECOMMEND_VIDEOS,
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
                videoItem: action.payload
            }
        }
        case Action.Types.SET_COMMENTS : {
            return {
                ...state,
                commentsItem: action.payload
            }
        }
        case Action.Types.SET_RECOMMEND_VIDEOS : {
            return {
                ...state,
                recommendVideos: action.payload
            }
        }
    }
};

export default reducer;