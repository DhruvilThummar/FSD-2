import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css'
import App from './App.jsx'
import US from './Hooks in React/Question/q1/US'
import US1 from './Hooks in React/Question/q2/US1'
import US2 from './Hooks in React/Question/q3/US2'
import US3 from './Hooks in React/Question/q4/US3'
import USMy from './Hooks in React/Question/q4/USmy'
import Ans5 from './Hooks in React/Question/q5/Ans.jsx';
import Ans6 from './Hooks in React/Question/q6/Ans.jsx';
import UR from './Hooks in React/Question/q7/UR.jsx';
import UR1 from './Hooks in React/Question/q8/UR1.jsx';
import UR2 from './Hooks in React/Question/q9/UR2.jsx';
import PC from './Hooks in React/Question/q10/PC.jsx';
import CP from './Hooks in React/Question/q11/CP.jsx';
import Comp1 from './Hooks in React/Question/q12/Comp1.jsx';
import UE1 from './Hooks in React/Question/q13/UE1.jsx';
import Clock from './Hooks in React/Question/q14/Clock.jsx';
import Axios from './axios/Axios.jsx';
import Axios1 from './axios/Axios1.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <US />
    <US1 />
    <US2 />
    <US3 />
    <USMy />
    < Ans5 />
    < Ans6 />
    < UR />
    < UR1 />
    < UR2 />
    < PC />
    < CP />
    < Comp1 />
    < UE1 />
    < Axios />
    < Axios1 />
  </StrictMode> 
);
