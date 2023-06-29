//Завдання 1

/*function sendRequest() {
   fetch('http://localhost:3000')
     .then(function(response) {
       if (response.ok) {
         return response.text();
       }
       throw new Error('Network fale.');
     })
     .then(function(data) {
       let currentDate = new Date().toLocaleDateString();
       let updatedContent = "Your vote is accepted: " + currentDate;
       document.getElementById('button').innerHTML = updatedContent;
     })
     .catch(function(error) {
       console.log('Error:', error.message);
     });
 }*/
 

 //Завдання 2

 /*function fetchAuthors() {
   fetch('books.json')
     .then(function(response) {
       if (response.ok) {
         return response.json();
       }
       throw new Error('Network fake.');
     })
     .then(function(data) {
       let authorList = document.getElementById('authorList');
       authorList.innerHTML = '';
 
       data.forEach(function(book) {
         const authorItem = document.createElement('li');
         authorItem.textContent = book.author;
         authorList.appendChild(authorItem);
       });
     })
     .catch(function(error) {
       console.log('Error:', error.message);
     });
 }*/


 // Завдання 3

 function fetchUser() {
   fetch('https://randomuser.me/api/')
     .then(function(response) {
       if (response.ok) {
         return response.json();
       }
       throw new Error('Network fake.');
     })
     .then(function(data) {
       let user = data.results[0];
 
       let userContainer = document.getElementById('userContainer');
       userContainer.innerHTML = '';
 
       let avatar = document.createElement('img');
       avatar.src = user.picture.large;
       userContainer.appendChild(avatar);
 
       let name = document.createElement('h2');
       name.textContent = user.name.first + ' ' + user.name.last;
       userContainer.appendChild(name);
 
      let age = document.createElement('p');
       age.textContent = 'Age: ' + user.dob.age;
       userContainer.appendChild(age);
 
       let gender = document.createElement('p');
       gender.textContent = 'Gender: ' + user.gender;
       userContainer.appendChild(gender);
 
        country = document.createElement('p');
       country.textContent = 'Country: ' + user.location.country;
       userContainer.appendChild(country);
 
       let login = document.createElement('p');
       login.textContent = 'Login: ' + user.login.username;
       userContainer.appendChild(login);
 
       let password = document.createElement('p');
       password.textContent = 'Password: ' + user.login.password;
       userContainer.appendChild(password);
 
       let email = document.createElement('p');
       email.textContent = 'Email: ' + user.email;
       userContainer.appendChild(email);
     })
     .catch(function(error) {
       console.log('Error:', error.message);
     });
 }
 
 