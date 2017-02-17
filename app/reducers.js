export default (state = { users: [], user: { name: '', email: '' } }, action) => {
  switch (action.type) {
    case 'INIT':
      return { users: action.users };
    case 'UPDATE_USER':
      let oldUsers = state.users;
      let newUsers = Object.assign([], oldUsers);
      if (!isNaN(action.user.id)) {
        newUsers[action.user.id] = {
          name: action.user.name,
          email:action.user.email
        }
      } else {
        newUsers.push(action.user);
      };
      
      return { users: newUsers };
    case 'SELECT_USER':
      let selectedUser = Object.assign({}, action.user);
      return { users: state.users, user: selectedUser };
    default:
      return state;
  }
}