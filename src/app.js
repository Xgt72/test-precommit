const express = require('express');

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.get('/api/foo', (req, res) => {
  res.json({ foo: 'bar' });
});

app.get("/api/test", (req, res) => {
  res.json({test: "Test"});
})

module.exports = app;
