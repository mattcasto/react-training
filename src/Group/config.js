const URI = 'https://ce3rt0e0yl.execute-api.us-east-1.amazonaws.com/prod/abbHeroGroups',
  EVENTS = {
    LIST: 'LIST_GROUP',
    SELECT: 'SELECT_GROUP',
    MODIFY: 'MODIFY_GROUP'
  },
  _groups = [],
  _group = {  
      'uuid':'avengers',
      'location':'New York, New York',
      'description':'They are Earth\'s mightiest heroes, formed to fight the foes no single hero could withstand.',
      'name':'Avengers',
      's3ImageUrl':'None'
   };

function defaultGroup() { return Object.assign({}, _group); }
function defaultGroups() { return Object.assign([], _groups); }

export { URI, EVENTS, defaultGroup, defaultGroups };