const initialState = {
    sidebar: true,
}

export const Action = {
    Types: {
        UPDATE_STATE: 'APP/UPDATE_STATE',
        HANDLE_SIDEBAR: 'APP/HANDLE_SIDEBAR'
    },
    Creators: {
        updateState: (props) => ({
            type: Action.Types.UPDATE_STATE,
            props
        }),
        handleSidebar: (props) => ({
            type: Action.Types.HANDLE_SIDEBAR,
            props
        })
    }

};


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
        case Action.Types.HANDLE_SIDEBAR: {
            return {
                ...state,
                sidebar:action.props
            }
        }
    }
};

export default reducer;