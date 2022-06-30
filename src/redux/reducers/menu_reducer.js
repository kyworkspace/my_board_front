import { RoutePath } from "config/Enums";
import produce from "immer";
import { MOVE_MENU } from "redux/types";


const initialState = {
    location: RoutePath.MAIN
}

export default function (state = initialState, action) {
    switch (action.type) {
        case MOVE_MENU:
            return produce(state, (draft) => {
                draft.location = action.payload
            });

        default: return state;
    }
}