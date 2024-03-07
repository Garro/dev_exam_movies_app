export class ApiEndpoint {
  /**
   * Guest sessions are a special kind of session that give you some of the functionality of an
   * account, but not all. For example, some of the things you can do with a guest session are;
   * maintain a rated list, a watchlist and a favourite list.
   *
   * Guest sessions will automatically be deleted if they are not used within 60 minutes of it
   * being issued.
   * @link https://developer.themoviedb.org/reference/authentication-create-guest-session
   */
  static newGuestSession(): string {
    return 'authentication/guest_session/new';
  }

  static authenticate(requestToken: string): string {
    return `https://www.themoviedb.org/authenticate/${requestToken}`;
  }

  /**
   * Get the list of official genres for movies.
   * @param language Sets a specific Language param.
   * @link https://developer.themoviedb.org/reference/genre-movie-list
   */
  static genreMovieList(language?: Language): string {
    const url = 'genre/movie/list';
    return language ? url.concat(`?language=${language}`) : url;
  }
}

export const enum Language {
  English = 'en',
  Spanish = 'es',
  French = 'fr',
}
