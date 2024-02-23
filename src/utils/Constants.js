export const AUTHTOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTI0ODNmODE3MTA3ZDFmZDYyYTk2NzBmMTAwMjhiYSIsInN1YiI6IjY1ZDRhMzRlMjNkMjc4MDE3Y2Y0Yzk5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NMp9vedRYPPMpLFyTqWHXgLS2g1Fq-oLaZhOoVQdTgw';
export const MOVIELIST = {'Now Playing' : 'now_playing', 'Popular' : 'popular', 'Top Rated' : 'top_rated', 'Upcoming': 'upcoming' };
export const TMDBURL = 'https://api.themoviedb.org/3';
export const TMDBIMAGEBASEPATH = 'https://image.tmdb.org/t/p/w500/';
export const OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: AUTHTOKEN
    }
  };

