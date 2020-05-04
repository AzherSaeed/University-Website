import * as ActionType from './ActionType';
import { baseUrl } from '../shared/baseUrl'

export const addComment = (dishId , rating , author , comment) => ({
    type : ActionType.ADD_COMMENT,
    payload : {
        dishId : dishId,
        rating : rating,
        author : author ,
        comment : comment
    }
})

                 // there is a dishes area

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
}

export const dishesLoading = () => ({
    type : ActionType.DISHES_LOADING
})

export const dishesFailed = (errmess) => ({
    type : ActionType.DISHES_FAILED,
    payload : errmess
})

export const addDishes = (dishes) => ({
    type : ActionType.ADD_DISHES,
    payload : dishes
});


                        // there is a comment area


export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
};
export const commentsFailed = (errmess) => ({
    type : ActionType.COMMENTS_FAILED,
    payload : errmess
})

export const addComments = (comments) => ({
    type : ActionType.ADD_COMMENT,
    payload : comments
});

                            // there is a promos area

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
}

export const promosLoading = () => ({
    type : ActionType.PROMOS_LOADING
})

export const promosFailed = (errmess) => ({
    type : ActionType.PROMOS_FAILED, 
    payload : errmess
})

export const addPromos = (promos) => ({
    type : ActionType.ADD_PROMOS,
    payload : promos
});


                            // there is a leaders area

export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading(true));

    return fetch(baseUrl + 'leaders')
    .then(response => response.json())
    .then(leaders => dispatch(addLeaders(leaders)))
}

export const leadersLoading = () => ({
    type : ActionType.LEADERS_LOADING
})

export const leadersFailed = (errmess) => ({
    type : ActionType.LEADERS_FAILED, 
    payload : errmess
})

export const addLeaders = (leaders) => ({
    type : ActionType.ADD_LEADERS,
    payload : leaders
});