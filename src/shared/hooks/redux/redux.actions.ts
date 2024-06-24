import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { PaginationSliceActions, ThemeSliceActions } from '@/app/store/slices'

const AllActions = {
  ...PaginationSliceActions,
  ...ThemeSliceActions,
};

export const useActions = () => bindActionCreators(AllActions, useDispatch());