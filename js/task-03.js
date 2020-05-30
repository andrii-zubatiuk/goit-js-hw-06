import users from './users.js';

// Написал на Тернарнике

const getUsersWithGender = (users, gender) =>
  users.map(user => (user.gender === gender ? user.name : null));

// Написал на классическом if

// const getUsersWithGender = (users, gender) =>
//   users.map(user => {
//     if (user.gender === gender) {
//       return user.name;
//     }
//   });

// Написал на reduce (в видосе 15:36)

// const getUsersWithGender = (users, gender) =>
//   users.reduce((acc, user) => {
//     if (user.gender === gender) {
//       acc.push(user.name);
//       return acc;
//     }
//   }, []);

console.log(getUsersWithGender(users, 'male'));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
