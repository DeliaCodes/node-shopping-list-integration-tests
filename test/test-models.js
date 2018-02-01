const chai = require('chai');

const expect = chai.expect;

const {
  Recipes
} = require('../models');


describe('Models', function () {

  //what am I testing here?
  describe.only('#Recipes.create', () => {
    it('successfully adds a recipe', () => {
      const newItem = Recipes.create();
      const items = Recipes.get();
      expect(items).to.include.keys(newItem.id);
    });

    //Recipes.create('Milk', );
    //What is your expectations?
    // expect(res of Recipes.get()) to.contain {'boiled white rice', 'milkshake'}

  });

  //it('#Recipes.delete', ()) 
  //it update


});
