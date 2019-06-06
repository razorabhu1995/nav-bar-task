<template>
  <div style="background-color : azure;">
      <transition name="fade">
         <!-- upperMenuID  was used here as ID -->
         <div  v-show="showTopMenu" class="uppermenu">
               <ul id="menu">
                     <li class="upper-menu-list"  v-for="(item,index) in $store.state.upperMenuList" :key="index">
                        <nuxt-link to="/">{{item}}</nuxt-link>
                     </li>
                  </ul>  
         </div>
      </transition>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <a class="navbar-brand brand" href="#">SHOWCASE</a>
         <div>
            <form class="form-inline ">
               <input class="form-control m-lg-2 " type="search" placeholder="Search" aria-label="Search">
            </form>
         </div>
      </nav>
      <transition name="fade">
         <!-- hide-lower-at-first  was used here in class -->
         <div v-show="showLowerMenu" class="lower-menu-nav-color ">
            <ul id="lower-menu-in-nav">
               <nuxt-link to="/" class="lower-menu-list-nav" style="margin-right:200px;">Category</nuxt-link>
               <nuxt-link to="/" class="lower-menu-list-nav">Shopping Mall</nuxt-link>
               <nuxt-link to="/" class="lower-menu-list-nav">Every Collection</nuxt-link>
               <nuxt-link to="/" class="lower-menu-list-nav">Collections</nuxt-link>
               <nuxt-link to="/" class="lower-menu-list-nav">Vouchers</nuxt-link>
               <nuxt-link to="/" class="lower-menu-list-nav">Groceries</nuxt-link>
            </ul> 
         </div>
      </transition>
  </div>
</template>
<script>

export default {
   data(){
      return{
      }
   },
   props : {
      showTopMenu : {
         type: Boolean
      },
      showLowerMenu : {
         type: Boolean
      }
   },
   mounted() {
   }
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>