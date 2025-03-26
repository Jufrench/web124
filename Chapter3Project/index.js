// Julian French
// 3/25/2025

const fullName = 'Julian French';
console.log('%cfullName:', 'color:tomato', fullName);

let desiredSalary = 150000;
console.log('desiredSalary:', desiredSalary);

const isVeteran = false;
console.log('isVeteran:', isVeteran);

const friends = ['Mike', 'Brad', 'Henry'];
console.group('friends:');
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.groupEnd();

const friendsDesiredSalary = [200000, 125000, 100000];
console.group('friendsDesiredSalary:')
console.log(friendsDesiredSalary[0]);
console.log(friendsDesiredSalary[1]);
console.log(friendsDesiredSalary[2]);
console.groupEnd()

const anotherFriend = {
  firstName: 'Codorna',
  lastName: 'Samuel',
  desiredSalary: 215000
};
console.table(anotherFriend)