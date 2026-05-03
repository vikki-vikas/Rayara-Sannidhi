export const BASE_PATH = '/Rayara-Sannidhi';

export const asset = (path: string) =>
  `${BASE_PATH}${path.startsWith('/') ? path : `/${path}`}`;
