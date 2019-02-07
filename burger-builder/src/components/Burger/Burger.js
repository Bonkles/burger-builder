import React from 'react'; 
import classes from './Burger.module.css'; 
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'; 

const burger = (props) => {
 
    console.log("props: " + props)

    let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
        console.log('ingredient: ' + ingredientKey)
        return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
            return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
        });
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, [])
    console.log(transformedIngredients)
    
    if (transformedIngredients.length){
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    return (        
      <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
        
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom"/>
      </div>  
    );
}; 

export default burger; 