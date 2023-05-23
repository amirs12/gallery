import { ImageItem } from './ImageCard/types';

export const formatImages = (imagesList: ImageItem[]) => {
  return imagesList.map(image => {
    image.isFavorite = false;
    image.description = '';
    return image;
  })
}