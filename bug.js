const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database interaction to fetch user details ...
  if (!user) {
    return res.status(404).send('User not found'); // Error handling
  }
  res.send(user); // Sending the user data
});

// ... other routes and middleware ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});