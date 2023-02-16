import movies from './movies.js';

const $movieList = document.querySelector('.movie-list');

function App() {
  this.init = () => {
    randerMovie();
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
}
const app = new App();
app.init();

{
  /* <div>
  <div>1순위 - 악마를 보았다.</div>
  <img src="https://movie-phinf.pstatic.net/20111223_41/1324620268521WGqqX_JPEG/movie_image.jpg?type=m203_290_2" />
  <div>
    <a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=72408">
      👉 네이버 영화 바로가기
    </a>
  </div>
</div>; */
}
