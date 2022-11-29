import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDYuSSVh0ghlOmoLBJeXkvTEAQr45t1Xwc",
  authDomain: "expensify-552bb.firebaseapp.com",
  databaseURL: "https://expensify-552bb.firebaseio.com",
  projectId: "expensify-552bb",
  storageBucket: "expensify-552bb.appspot.com",
  messagingSenderId: "45056519243",
  appId: "1:45056519243:web:efbe36e4fcb88ec3d631ce",
  measurementId: "G-N9QEWV2VSS"
}

firebase.initializeApp(firebaseConfig)
const database = firebase.database()

// Fetches data initially and when it updates/chages
database.ref().on('value', (snapshot) => {
  const val = snapshot.val()
  console.log(val)
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
})

// setTimeout(() => {
//   database.ref('job/title').set('Manager')
// }, 3500)

// Fetches data one time (once)
// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e)
//   })

// database.ref().set({
//   name: 'Chuck Holmes',
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Atlanta',
//     country: 'US'
//   },
//   age: 30,
//   stressLevel: 6
// }).then(() => {
//   console.log('Data is saved!')
// }).catch((error) => {
//   console.log('this failed', error)
// })


// To update nested objects
// database.ref().update({
//   job: 'Manager',
//   'location/city': 'Boston'
// })

// database.ref().update({
//   'job/company': 'Amazon',
//   'location/city': 'Seattle',
//   stressLevel: 9
// })

// database.ref('isSingle')
//   .remove()
//   .then(() => { console.log('Deleted!') })
//   .catch((e) => {
//     console.log('Action failed!', e)
//   })
