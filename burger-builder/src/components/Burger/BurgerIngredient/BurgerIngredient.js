import React, {Component} from 'react' 
import classes from './BurgerIngredient.module.css'
import PropTypes from 'prop-types'

class BurgerIngredient extends Component {

    render () {
        let ingredient = null; 
        console.log("Props type: " + this.props.type)
        switch (this.props.type) {

            case ('bread-bottom'): 
                console.log("In bread-bottom")
                ingredient = <div className={classes.BreadBottom}></div>; 
            break;

            case ('bread-top'): 
            console.log("In bread-top")
                ingredient = <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>; 
            break;

            case ('meat'): 
                console.log("In meat")
                ingredient = <div className={classes.Meat}></div>;
            break;

            case ('cheese'): 
                console.log("In cheese")
                ingredient = <div className={classes.Cheese}></div>;
            break;

            case ('salad'): 
                console.log("In salad")
                ingredient = <div className={classes.Salad}></div>;
            break;

            case ('bacon'): 
                console.log("In bacon")
                ingredient = <div className={classes.Bacon}></div>; 
            break;

            default: 
                ingredient = null; 

        }
        console.log("Ingredient: " + ingredient)
        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}; 

export default BurgerIngredient; 