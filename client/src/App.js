import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./components/route";
import { ProvideAuth } from "./components/auth";
import { LoginPage, CountriesPage } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Currency Exchange</p>
      </header>
      <main>
        <ProvideAuth>
          <Router>
            <div>
              <Switch>
                <Route path="/login">
                  <LoginPage />
                </Route>
                <PrivateRoute path="/" exact>
                  <CountriesPage />
                </PrivateRoute>
              </Switch>
            </div>
          </Router>
        </ProvideAuth>
      </main>
    </div>
  );
}

export default App;
