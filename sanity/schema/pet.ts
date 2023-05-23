/* eslint-disable import/no-anonymous-default-export */
// schemas/pet.js
const pet = {
  name: 'pet',
  type: 'document',
	title: 'Pet',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    }
  ]
}

export default pet;