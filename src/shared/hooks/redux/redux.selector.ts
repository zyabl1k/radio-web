import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { TypedRootState } from '@/app/store/store.ts';

export const useTypedSelector: TypedUseSelectorHook<TypedRootState> =
    useSelector;