import Vuex from 'vuex'

export const strict = false
export const state = () => ({
   upperMenuList: [
      "save more on app",
      "sell on daraz",
      "customer care",
      "track my order",
      "login",
      "sign up",
      "translate",
   ],
   bannerMenuList: [
      "Electronics devices",
      "Men and Women clothing",
      "Health and Beauty",
      "Computer parts",
      "Groceries and pets",
      "Home and Lifestyle",
      "Women's Fashion",
      "Men's Fashion",
      "Sports and Outdoors",
      "Automobiles and Moterbikes",
      "Laptops and Mobile devices",
      "Babies and Toys"
   ]
})
export const mutations = {

}
export const actions = {
   async nuxtServerInit({ state, commit }, { req, redirect }) {

   }
}
