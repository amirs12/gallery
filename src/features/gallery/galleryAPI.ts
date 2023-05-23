import { ImageItem } from '../../components/ImageCard/types';
import { formatImages } from '../../components/imageListLib';

export const fetchImages = async (pageNum?: number) => {
  const page = pageNum && pageNum > 1 ? `?page=${pageNum}` : '';
  let imagesList: ImageItem[] = [];

  await fetch(`https://picsum.photos/v2/list${page}`)
  .then(response => {        
    return response.json();
  })
  .then(data => {
    imagesList = formatImages(data);
  })
  .catch(err => console.log('Fetch Error', err))
  
  return imagesList;
}