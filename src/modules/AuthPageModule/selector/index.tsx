import { RootState } from '@store'

export const selectGetProfile = (state: RootState) => state.auth.profile
