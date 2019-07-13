export const loadUsersRequest = () => {
  return {
    type: UserTypes.LOAD_REQUEST
  }
}

export const UserTypes = {
  'LOAD_REQUEST': 'users/LOAD_REQUEST',
  'LOAD_SUCCESS': 'users/LOAD_SUCCESS',
  'LOAD_FAIL': 'users/LOAD_FAIL',
}