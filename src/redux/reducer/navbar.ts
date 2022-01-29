import { GET_NAV_ITEMS } from "../actionTypes"

interface INavItem {
    url: string
    label: string
}

interface NavItemState {
    items: INavItem[]
}

interface NavItemAction {
    type: string
    payload: {
        items?: INavItem[]
    }
}

const initialState: NavItemState = {
    items: [],
}

const navItemReducer = (
    // eslint-disable-next-line default-param-last
    state: NavItemState = initialState,
    action: NavItemAction
) => {
    switch (action.type) {
        case GET_NAV_ITEMS:
            return {
                ...state,
                items: action.payload.items,
            }
        default:
            return state
    }
}

export default navItemReducer
