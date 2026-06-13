import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css'
import App from './App.jsx'
import Myapp from './L1/Myapp.jsx'
import Myapp1 from './L2/Myapp.jsx'
import StudentCard from './L2/Questions/q1/StudentCard.jsx'
import MyProfile from './L2/Questions/q2/MyProfile.jsx'
import Map from './L2/Filter & Map/Map/q1/Map.jsx'
import Q1 from './L2/Filter & Map/Filter/q1/Q1.jsx'
import Q2 from './L2/Filter & Map/Filter/q2/Q2.jsx'
import Q3 from './L2/Filter & Map/Filter/q3/Q3.jsx'
import List from "./L2/Filter & Map/List.jsx";
import Props from "./L2/Props/question/Q1/Props1.jsx";
import PropsExample from "./L2/Props/question/Q2/Example.jsx";
import Product from "./L2/Props/question/Q3/Productlist.jsx";
import OnclickEvent from "./L2/Events/Question/q1/Onclick.jsx";
import OnChangeEvent from "./L2/Events/Question/q2/Event2.jsx";
import OnSubmitEvent from "./L2/Events/Question/q3/Event3.jsx";
import AllEvent from "./L2/Events/Question/q4/Event.jsx";
import My from "./Rect Routing/1/My.jsx";
import Myreact from "./Rect Routing/2/Myreact.jsx";
import Hospital from './L2/Questions/q3/Hospital.jsx'


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Myapp/>
    <Myapp1/>
    <StudentCard />
    <MyProfile />
    <Map />
    <Q1 />
    <Q2 />
    <Q3 />
    <List />
    <Props />
    <PropsExample />
    <Product />
    <OnclickEvent />
    <OnChangeEvent />
    <OnSubmitEvent />
    <AllEvent />
    <My />
    <Myreact />
    <Hospital />
  </StrictMode>,
);
