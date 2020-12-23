import React, { Component } from 'react'
import BoardService from '../../services/board/BoardService'
import { Container, Table } from 'react-bootstrap'




class ListBoardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            boards: []
        }
    }

    componentDidMount() {
        BoardService.getBoards().then((res) => {
            this.setState({ boards: res.data });
        });
    }

    viewBoard(id) {
        this.props.history.push(`/view-board/${id}`);
    }

    render() {
        return (
            <Container>
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성일</th>
                            <th>작업</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.boards.map(
                                board =>
                                    <tr key={board.id}>
                                        <td> {board.id} </td>
                                        <td onClick={() => this.viewBoard(board.id)} > {board.title} </td>
                                        <td> {board.createdDate}</td>
                                        <td>
                                            <button style={{ marginLeft: "10px" }} onClick={() => this.viewBoard(board.id)} className="btn btn-info">View </button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </Table>
            </Container>

        )
    }
}

export default ListBoardComponent