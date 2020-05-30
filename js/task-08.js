import users from './users.js';

// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) =>
  users.reduce((acc, user) => {
    if (user.friends[0] === friendName) {
      acc.push(user.name);
    }

    if (user.friends[1] === friendName) {
      acc.push(user.name);
    }

    return acc;
  }, []);

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
