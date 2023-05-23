import React, { useEffect, useState } from 'react';
import { fetchImages } from '../../features/gallery/galleryAPI';
import { ImageCard } from '../ImageCard/ImageCard';
import { ImageItem } from '../ImageCard/types';
import { Space, theme } from 'antd';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectImagesList, updateImagesList } from '../../features/gallery/gallerySlice';
import './ImagesList.css';

export const ImagesList: React.FC = () => {
  const [images, setImages] = useState([] as ImageItem[]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchImages().then(res => {
      const newList = [...images, ...res].filter((element, index) => {
        return [...images, ...res].indexOf(element) === index;
      });
      dispatch(updateImagesList(newList));
      setImages(newList);
    });
  },[]);

  const imagesList = useAppSelector(selectImagesList);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className='images-list'>
      <div style={{ padding: 24, minHeight: 380, background: colorBgContainer }}>
        <h1 className='gallery-title'>My Gallery</h1>
        <Space size={[20, 20]} wrap>
          {
            imagesList.slice(10).map((image, index) => 
              <ImageCard
                description={image.description}
                id={image.id}
                isFavorite={image.isFavorite}
                key={`img-${index}`}
                url={image.download_url}
              />
            )
          }
        </Space>
      </div>
    </div>
  )
}