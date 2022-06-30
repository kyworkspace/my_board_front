import { MOVE_MENU } from "redux/types";

export function locationMenu(path) {

    return {
        type: MOVE_MENU,
        payload: path
    }

}