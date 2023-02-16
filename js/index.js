import movies from './movies.js';

const $movieList = document.querySelector('.movie-list');
const $guestBook = document.querySelector('.guest-book');
const $registerButton = document.querySelector('.register-button');

function App() {
  this.init = () => {
    randerMovie();
    randerGuestBook();
  };

  const randerMovie = () => {
    $movieList.innerHTML = movies
      .map((movie, idx) => {
        return `<div class="movie">
      <div class="movie-title">${idx + 1}순위 - ${movie.title}</div>
      <img src=${movie.imageUrl} />
      <div>
        <a href=${movie.naverLink}>
          👉 네이버 영화 바로가기
        </a>
      </div>
    </div>`;
      })
      .join('');
  };

  const randerGuestBook = () => {
    $guestBook.innerHTML = movies
      .map((movie) => {
        return `<label><input class="taste-input" type="checkbox" name="taste"/>${movie.title}</label>`;
      })
      .join('');
  };

  const clickRegisterButton = () => {
    const $tasteInput = document.querySelectorAll('.taste-input');
    const $nameInput = document.querySelector('.name-input');

    const name = $nameInput.value;
    const checkedCount = [...$tasteInput].reduce((acc, cur) => {
      if (cur.checked) return (acc += 1);
      return acc;
    }, 0);

    if (!name) return;
    window.alert(`${name}님, 저와 ${checkedCount}개의 취향이 같으시네요!`);
  };

  $registerButton.addEventListener('click', clickRegisterButton);
}
const app = new App();
app.init();
