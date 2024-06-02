import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { ThemeSliceActions } from '@/app/store/slices';

const AllActions = {
  ...ThemeSliceActions,
};

export const useActions = () => bindActionCreators(AllActions, useDispatch());