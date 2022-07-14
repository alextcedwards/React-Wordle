import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

app.use(express.static(__dirname));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)