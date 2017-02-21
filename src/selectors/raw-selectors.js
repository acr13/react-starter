import R from 'ramda';

// counter
export const getCounterValue = R.path(['counter', 'value']);

// random
export const getRandomValue = R.path(['randomNum', 'value']);

// routes
export const getRoutes = R.prop(['routes']);

// users
export const getUsers = R.prop(['users']);

// saga
export const getFetchedUser = R.path(['sagas', 'fetchedUser']);
