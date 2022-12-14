import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AddCommentFormSchema } from '../types/AddCommentFormSchema';

const initialState: AddCommentFormSchema = {
  text: '',
};

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, { payload }: PayloadAction<string>) => {
      state.text = payload;
    },
  },
});

export const {
  reducer: addCommentFormReducer,
  actions: addCommentFormActions,
  name: addCommentFormName,
} = addCommentFormSlice;
