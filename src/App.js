import { RoutePath } from "config/Enums";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Board from "routes/Board";
import Detail from "routes/Detail";
import Login from "routes/Login";
import Main from "routes/Main";
import Upload from "routes/Upload";

function App() {




  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutePath.MAIN} element={<Main />}>
          <Route path={RoutePath.LOGIN} element={<Login />} />
          <Route path={RoutePath.BOARD_MAIN}>
            <Route path={RoutePath.BOARD.LIST} element={<Board />} />
            <Route path={RoutePath.BOARD.UPLOAD} element={<Board />} />
            <Route path={RoutePath.BOARD.DETAIL} element={<Board />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
