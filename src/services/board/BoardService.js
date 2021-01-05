import axios from 'axios';

const BOARD_API_BASE_URL = "http://localhost:8080/api/v1/boards";

class BoardService {

    getBoards() {
        return axios.get(BOARD_API_BASE_URL);
    }

    getBoardById(boardId) {
        return axios.get(BOARD_API_BASE_URL + '/' + boardId);
    }


}

export default new BoardService()