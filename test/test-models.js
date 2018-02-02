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

    it('successfully updates a recipe', () => {
      const createRecipe = Recipes.create();
      const getNewRecipe = Recipes.get();
      const newRecipeName = {
        id: getNewRecipe.id,
        name: 'Milk'
      };
      const updatedRecipe = Recipes.update(newRecipeName);
      const getUpdatedRecipe = Recipes.get();
      expect(getUpdatedRecipe.name).to.be('Milk');
    });

    //Recipes.create('Milk', );
    //What is your expectations?
    // expect(res of Recipes.get()) to.contain {'boiled white rice', 'milkshake'}

  });

  //it('#Recipes.delete', ()) 
  //it update


});
