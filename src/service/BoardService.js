import axios from 'axios';

const getBoardList = async (body) => {

    const { pageNumber = 1, pageSize = 10 } = body

    return await axios.get(`http://localhost:8080/board/list?pageNumber=${pageNumber}&pageSize=${pageSize}`).then(res => {
        if (res.data.success === "true") {
            return res;
        } else {
            throw new Error(res.data.message);
        }
    })
        .catch(err => {
            console.log(err);
            window.alert("호출 에러")
        })


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
