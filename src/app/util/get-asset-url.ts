import { AssetsUrl, BackdropSize, PosterSize } from '../data/assets_url';

export function getPosterUrl(
  path: string,
  size: PosterSize = PosterSize.w154
): string {
  return `${AssetsUrl.BASE_URL}/${size}${path}`;
}

export function getBackdropUrl(
  path: string,
  size: BackdropSize = BackdropSize.w780
): string {
  return `${AssetsUrl.BASE_URL}/${size}${path}`;
}
