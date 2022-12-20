// export const setAuthToken = (user) => {
//   const currentUser = {
//     email: user.email
//   }

//   // get jwt token
//   fetch('https://cloud-kitchen-assignment-server.vercel.app/jwt', {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json'
//     },
//     body: JSON.stringify(currentUser)
//   })
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//       // save token to local storage
//       localStorage.setItem('authToken', data.token);
//     });
// };

// create access token
export const saveUserWithToken = (user) => {
  // create user data
  const currentUser = {
    name: user.displayName,
    email: user.email
  };

  fetch(`https://cloud-kitchen-assignment-server.vercel.app/users/${user?.email}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(currentUser)
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);

      // save user to localStorage
      localStorage.setItem('kitchen-token', data.token);
    }).catch(error => {
      console.error(error);
    })
}