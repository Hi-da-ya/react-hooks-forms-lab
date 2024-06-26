import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [itemName, setItemName] = useState("")
  const [itemCategory, setItemCategory] = useState("Produce")

  const newItem = {
    id: uuid(),
    name: itemName,
    category: itemCategory,
  };

  //function that handles input change for name

  function handleNameChange(event){
    setItemName(event.target.value)
  };

  //function that handles input change for category
  function handleCategoryChange(event){
    setItemCategory(event.target.value)
  };

  //function that handles form submission
  function handleSubmit(event){
    event.preventDefault()
   onItemFormSubmit(newItem)
  };
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
