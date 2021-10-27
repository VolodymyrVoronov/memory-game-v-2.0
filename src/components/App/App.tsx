import { ReactElement, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import { initGame, shuffleCards } from "../../store/gameSlice/gameSlice";

import Paths from "../../utils/paths";

import Levels from "../Levels/Levels";
import Game from "../Game/Game";

const App = (): ReactElement => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initGame());
    dispatch(shuffleCards());
  }, []);

  return (
    <Switch>
      <Redirect exact path={Paths.Root} to={Paths.Levels}>
        <Levels />
      </Redirect>

      <Route exact path={Paths.Levels}>
        <Levels />
      </Route>

      <Route exact path={Paths.Game}>
        <Game />
      </Route>
    </Switch>
  );
};

export default App;
