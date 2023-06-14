
// Here we will define all the aciton types to be used in reducers

export const AddUserToStore = "USER.ADDUSERTOSTORE"
export const AddUser2ToStore = "USER.ADDUSER2TOSTORE"

export const AddTrainerToStore = "TRAINER.ADDTRAINERTOSTORE"

export const AddProductToStore = "PRODUCT.ADDPRODUCTTOSTORE"

// action types for cart operations
export const ADD_ITEM = "CART.ADD_ITEM";
export const REMOVE_ITEM = "CART.REMOVE_ITEM";
export const UPDATE_ITEM = "CART.UPDATE_ITEM";
export const EMPTY_CART = "CART.EMPTY_CART";

// action types for checkout operations
export const GENERATE_COUPON = "COUPON.GENERATE_COUPON";

// action types for saving/fetching recent recent orders
// GET_RECENT_ORDERS called upon Make Payment from Checkout (Make Payment triggers saveOrderToDB then fetchRecentOrders from DB)
// Also from log in (trainerActions.saveTrainerToDB)
export const GET_RECENT_ORDERS = "ORDER.GET_RECENT_ORDERS";
export const GET_CANCELED_ORDERS = "ORDER.GET_CANCELED_ORDERS"  // called upon log-in and successful order cancelation
export const CANCEL_ORDER = "ORDER.CANCEL_ORDER";

// action types for hobby
export const GET_HOBBYLIST = "HOBBY.GET_HOBBYLIST";
