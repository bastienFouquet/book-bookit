module.exports = {
  friendlyName: 'Trigger quantity',
  description: 'Calculate and modify quantity about book when operation is created',
  inputs: {
    book: {
      type: 'string',
      required: true
    },
    quantity: {
      type: 'number',
      required: true
    },
    type: {
      type: 'string',
      required: true,
    }
  },
  exits: {
    success: {
      description: 'All done.',
    },
    error: {
      description: 'An error occured',
    }
  },


  fn: async function (inputs, exits) {
    try {
      const type = await Type.findOne({id: inputs.type});
      const book = await Book.findOne({id: inputs.book});
      let newQuantity;
      switch (type.value) {
        case 'Entrée':
          newQuantity = book.quantity + inputs.quantity;
          break;
        case 'Sortie':
          newQuantity = book.quantity - inputs.quantity;
          break;
      }
      const updated = await Book.updateOne({
        id: book.id
      }).set({quantity: newQuantity});
      return exits.success(updated);
    } catch (e) {
      console.error(e);
      return exits.error(e);
    }
  }
};

