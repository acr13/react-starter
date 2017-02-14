import R from 'ramda';

// routes
export const getRoutes = R.prop(['routes']);

// users
export const getUsers = R.prop(['users']);

// saga
export const getFetchedUser = R.path(['sagas', 'fetchedUser']);
