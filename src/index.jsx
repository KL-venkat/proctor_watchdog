// import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import 'bulma/css/bulma.min.css';
import 'semantic-ui-css/semantic.min.css';
import { createRoot } from 'react-dom/client';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const container = document.getElementById('root');
const Root = createRoot(container); 
Root.render(<App/>);



