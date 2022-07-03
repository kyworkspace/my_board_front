import Auth from "component/Auth";
import { RoutePath } from "config/Enums";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Board from "routes/Board";
import Login from "routes/Login";
import Main from "routes/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutePath.MAIN} element={<Main />}>
          <Route path={RoutePath.LOGIN} element={<Login />} />
          <Route path={RoutePath.BOARD_MAIN}>
            <Route path={RoutePath.BOARD.LIST} element={<Auth ChildComponent={Board} noAuth={true} />} />
            <Route path={RoutePath.BOARD.UPLOAD} element={<Auth ChildComponent={Board} noAuth={false} />} />
            <Route path={RoutePath.BOARD.DETAIL} element={<Auth ChildComponent={Board} noAuth={true} />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
