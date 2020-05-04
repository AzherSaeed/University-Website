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
                //if we change the location like 'dishess' then dishes not fetched and show error
    return fetch(baseUrl + 'dishes')
    .then(response => {
        if (response.ok) {
          return response;
        } 
        else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));

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


                        // there is a comments area


export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
    .then(response => {
        if (response.ok) {
          return response;
        } 
        else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
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
    .then(response => {
        if (response.ok) {
          return response;
        } 
        else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
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
    .then(response => {
        if (response.ok) {
          return response;
        } 
        else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(leaders => dispatch(addLeaders(leaders)))
    .catch(error => dispatch(leadersFailed(error.message)));
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