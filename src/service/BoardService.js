import axios from 'axios';

const getBoardList = (board) => {

}

const getBaordDetail = async (body, cb, errCb) => {
    return await axios.post("", body).then(res => {
        if (cb) {
            cb();
        }
        return res;

    })
        .catch(err => {
            if (errCb) {
                errCb();
            }
            return err
        })
}

const saveBoard = async (body) => {
    return await axios.post("http://localhost:8080/board/save", body)
}


export const BoardSerivce = {
    getBoardList,
    getBaordDetail,
    saveBoard
}
