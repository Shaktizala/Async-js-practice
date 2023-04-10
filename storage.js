// cookies vs local storage vs session storage
// all are stored on the user browser
// session storage removed when tab closed
// local storage stays until use deletes or developer
// cookies we've to set expiration date

// localStorage.setItem('name', 'shakti')
// console.log(localStorage.getItem('name')); // null if it is'nt exists
// localStorage.removeItem('name')

// session storage
// sessionStorage.setItem('team', 'devempire')
// console.log(sessionStorage.getItem('team'));
// sessionStorage.removeItem('name')

// cookie storage
document.cookie = 'name=chintan; expires=' + new Date(2023, 3, 9).toUTCString()

// ? cookie never overwritten it we execute same twice it will create two identical cookies

// view cookie
console.log(document.cookie);
