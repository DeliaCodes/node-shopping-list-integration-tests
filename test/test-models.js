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
      const items = {};
      const createdRecipe = Recipes.create('coffee', 'coffee', items);
      //const getNewRecipe = Recipes.get();
      const newRecipe = {
        id: createdRecipe.id,
        name: 'Milk'
      };
      const UpdatedRecipe = Recipes.update(newRecipe, items);

      expect(Recipes.find(createdRecipe.id, items).name).to.equal('Milk');
    });

    it('successfully deletes a recipe', () => {
      const newRecipe = Recipes.create('coffee', 'coffee');
      const getRecipeToDelete = Recipes.get();
      const idToDelete = getRecipeToDelete.id;
      Recipes.delete(idToDelete);
      const didRecipeDelete = Recipes.get();
      expect(didRecipeDelete.id).to.be.equal(idToDelete);
    });

    //Recipes.create('Milk', );
    //What is your expectations?
    // expect(res of Recipes.get()) to.contain {'boiled white rice', 'milkshake'}

  });

  //it('#Recipes.delete', ()) 
  //it update


});
