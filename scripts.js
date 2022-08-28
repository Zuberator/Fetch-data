// FETCH DATA FROM INTERNET

fetch('https://reqres.in/api/users')
.then(res => {
  if (res.ok) {
    console.log('OK')
  } else {
    console.log('error')
  } 
  return res.json()
})
.then(data => console.log(data))
.catch(err => console.error('error'))

// ADD USER WITH JSON

// fetch('https://reqres.in/api/users', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     name: 'Przemek'
//   })
// }).then(res => {
//   return res.json()
// })
// .then(data => console.log(data))
// .catch(err => console.error('error'))