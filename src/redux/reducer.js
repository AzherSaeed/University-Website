import {DISHES} from '../shared/Dishes'
import {COMMENTS} from '../shared/Comments'
import {LEADERS} from '../shared/Leaders'
import {PROMOTIONS} from '../shared/Promotions'

export const InitialState = {
    dishes : DISHES,
    comments : COMMENTS,
    leaders : LEADERS,
    promotions : PROMOTIONS
}

export const Reducer = (state = InitialState , astion) => {
    return state
}