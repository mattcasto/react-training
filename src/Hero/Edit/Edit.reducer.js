import { generator, EVENTS } from './Edit.config';

export default (state = generator(), action) => {
  switch (action.type) {
    case EVENTS.SELECT:
      return Object.assign({}, action.payload);
    default:
      return state;
  }
}