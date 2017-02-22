import { generator, EVENTS } from './List.config';

export default (state = generator(), action) => {
  switch (action.type) {
    case EVENTS.LIST:
      return Object.assign([], action.payload);
    default:
      return state;
  }
}