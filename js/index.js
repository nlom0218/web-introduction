import movies from './movies.js';

const $movieList = document.querySelector('.movie-list');
const $guestBook = document.querySelector('.guest-book');

function App() {
  this.init = () => {
    randerMovie();
    randerGuestBook();
  };

  const randerMovie = () => {
    $movieList.innerHTML = movies
      .map((movie, idx) => {
        return `<div>
      <div>${idx + 1}순위 - ${movie.title}</div>
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
        return `<label><input type="checkbox" name="taste" value=${movie.title}/>${movie.title}</label>`;
      })
      .join('');
  };
}
const app = new App();
app.init();
