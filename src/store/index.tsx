import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from './slices/formSlice';
import { ModalReducer } from './slices/modalSlice';

const store = configureStore({
  reducer: {
    formData: formReducer,
    modalAction: ModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export { store };