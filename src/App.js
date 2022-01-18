import * as React from "react";
import { Routes, Route, Outlet, Link, useParams } from "react-router-dom";
import GameInfoPage from "./GameInfoPage/GameInfoPage";
import GameLogin from "./GameLogin/GameLogin";

export default function App() {




  return (
    <div>
      <GameLogin></GameLogin>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<GameLogin />} />
          
          <Route path="/blog/:slug" element = {<BlogPost/>}/>
          <Route path="/game/:game" element = {<GameInfoPage />}/>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}


function BlogPost() {
  let { slug } = useParams();
  return <div>Now showing post {slug}</div>;
}

function Layout() {
  return (
    <div>


      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
