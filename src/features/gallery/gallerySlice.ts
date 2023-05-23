import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchImages } from './galleryAPI';
import { ImageItem } from '../../components/ImageCard/types';

export interface ImagesListState {
  imagesList: ImageItem[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ImagesListState = {
  imagesList: [],
  status: 'idle',
};

export const fetchImagesAsync = createAsyncThunk(
  'images/fetchImages',
  async (amount: number) => {
    const response = await fetchImages(amount);
    return response;
  }
);

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    updateImagesList: (state, action: PayloadAction<ImageItem[]>) => {
      state.imagesList = action.payload;
    },
  },
});

export const { updateImagesList } = imagesSlice.actions;
export const selectImagesList = (state: RootState) => state.images.imagesList;

export default imagesSlice.reducer;
