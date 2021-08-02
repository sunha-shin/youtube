const initialState = {

}

export const Action = {
    Types: {
        UPDATE_STATE: 'VIDEOS/UPDATE_STATE',
        GET_RECOMMEND_VIDEOS: 'VIDEOS/GET_RECOMMEND_VIDEOS',
        SET_RECOMMEND_VIDEOS: 'VIDEOS/SET_RECOMMEND_VIDEOS',
    },
    Creators: {
        updateState: (props) => ({
            type: Action.Types.UPDATE_STATE,
            props
        }),
        getRecommendVideos: (id, props) => ({
            type: Action.Types.GET_RECOMMEND_VIDEOS,
            id, props
        }),
        setRecommendVideos: (id, props) => ({
            type: Action.Types.SET_RECOMMEND_VIDEOS,
            id, props
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
        case Action.Types.SET_RECOMMEND_VIDEOS : {
            return {
                ...state,
                recommendVideo : {
                    ...state[action.id],
                    [action.id]:action.props
                }
            }
        }
    }
};

export default reducer;