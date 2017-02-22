import ListReducer from './List/List.reducer';
import EditReducer from './Edit/Edit.reducer';

const reducers = new Map();
reducers.set('heroes', ListReducer);
reducers.set('hero', EditReducer)

export default reducers;