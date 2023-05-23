import React, { useState } from 'react';
import { Button } from 'antd';
import { fetchImages } from '../../features/gallery/galleryAPI';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectImagesList, updateImagesList } from '../../features/gallery/gallerySlice';

export const ViewMoreBtn: React.FC = () => {
  const [pageNum, setPageNum] = useState(2);
  const imagesList = useAppSelector(selectImagesList);
  const dispatch = useAppDispatch();

  const fetchMoreImages = () => {
    fetchImages(pageNum).then(res => {
      const newList = [...imagesList, ...res].filter((element, index) => {
        return [...imagesList, ...res].indexOf(element) === index;
      });
      dispatch(updateImagesList(newList));
      setPageNum(prevPageNum => prevPageNum + 1);
    });
  }

  return (
    <Button type="primary" onClick={fetchMoreImages} >View More</Button>
  );
}
