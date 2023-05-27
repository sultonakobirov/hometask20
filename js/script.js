let input = prompt('Number!')
fetch(`http://numbersapi.com/${input}?json`)
  .then(response => response.json())
  .then(data => {
    // Обработка полученных данных
    document.querySelector('p').textContent = data.text
    console.log(data);
  })
  .catch(error => {
    // Обработка ошибок
    console.error('Ошибка:', error);
  });

  fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(json => console.log(json))