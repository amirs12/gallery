import React, { useState } from 'react';
import { Button, Checkbox, Modal, Input } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectImagesList, updateImagesList } from '../../features/gallery/gallerySlice';
import './AddImage.css';

export const AddImage: React.FC = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [addImageIsFavorite, setAddImageIsFavorite] = useState(false);
  const [addImageDescription, setAddImageDescription] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const imagesList = useAppSelector(selectImagesList);
  const dispatch = useAppDispatch();
  const { TextArea } = Input;

  const applyModalChanges = () => {
    const newList = [...imagesList, { description: addImageDescription, download_url: imageUrl, id: Math.floor(Math.random() * 1000), isFavorite: addImageIsFavorite }];    
    dispatch(updateImagesList(newList));
  }

  const resetForm = () => {
    setImageUrl('');
    setAddImageIsFavorite(false);
    setAddImageDescription('');
    setIsModalOpen(false);
  }

  const handleOk = () => {
    applyModalChanges();
    resetForm();
  };

  const handleCancel = () => {
    resetForm();
  };

  return (
    <div className='add-image-container'>
      <Button
        icon={<PlusSquareOutlined />}
        onClick={() => setIsModalOpen(true)}
        style={{ backgroundColor: '#e6f4fd' }}
        type="default"
      >
        <span className='add-image-text'>Add Image</span>
      </Button>

      <Modal
        okText="Save"
        onCancel={handleCancel}
        onOk={handleOk}
        open={isModalOpen}
        title="Add Image"
      >
        <TextArea
          allowClear={true}
          autoSize
          maxLength={100}
          onChange={(event) => setImageUrl(event.target.value)}
          placeholder="Please enter a URL"
          value={imageUrl}
        />
        <TextArea
          allowClear={true}
          value={addImageDescription}
          maxLength={100}
          onChange={(event) => setAddImageDescription(event.target.value)}
          placeholder="Enter a description"
          rows={4}
          showCount
          style={{ height: 120, marginBottom: 24, marginTop: 24 }}
        />
        <Checkbox
          checked={addImageIsFavorite}
          onChange={(event) => setAddImageIsFavorite(event.target.checked)}
        >
          Set as Favorite
        </Checkbox>
      </Modal>
    </div>
  );
}
