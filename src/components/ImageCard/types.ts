export type ImageCardProps = {
  description: string;
  id: number;
  isFavorite: boolean;
  url: string;
}

export type ImageItem = {
  author?: string;
  description: string;
  download_url: string;
  height?: number;
  id: number;
  isFavorite: boolean;
  url?: string;
  width?: number;
}