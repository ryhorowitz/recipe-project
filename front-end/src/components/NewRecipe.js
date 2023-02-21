import React from "react";

function NewRecipe() {

  return (
    <div>
      <form>
        <label>
          Name:
        <input type="text" name="name"/>
        </label>
        <label> Image:
        <input type="text" name="image"/>
        </label>
      </form>
    </div>
  )
}

export default NewRecipe