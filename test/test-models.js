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
      Recipes.create({
        name: 'coffee'
      });
      const getNewRecipe = Recipes.get();
      const newRecipeName = {
        id: getNewRecipe.id,
        name: 'Milk'
      };
      Recipes.update(newRecipeName);
      const getUpdatedRecipe = Recipes.get();
      expect(getUpdatedRecipe.name).to.be('Milk');
    });

    /*  it('successfully deletes a recipe', () => {
       const newRecipe = Recipes.create();
       const getRecipeToDelete = Recipes.get();
       Recipes.delete(getRecipeToDelete.id);

       expect(getRecipeToDelete)
     }); */

    //Recipes.create('Milk', );
    //What is your expectations?
    // expect(res of Recipes.get()) to.contain {'boiled white rice', 'milkshake'}

  });

  //it('#Recipes.delete', ()) 
  //it update


});
