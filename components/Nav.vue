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
         <a class="navbar-brand brand" href="#"><i class="fa fa-shopping-bag" aria-hidden="true"></i>&nbsp;SHOWCASE</a>
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
               <nuxt-link to="/" class="lower-menu-list-nav" style="margin-right:200px;">Category&nbsp; <i class="fa fa-chevron-circle-down" aria-hidden="true"></i></nuxt-link>
               <nuxt-link to="/" class="lower-menu-list-nav"><i class="fa fa-building" aria-hidden="true"></i>&nbsp;Shopping Mall</nuxt-link>
               <nuxt-link to="/" class="lower-menu-list-nav"><i class="fa fa-globe" aria-hidden="true"></i>&nbsp;Every Collection</nuxt-link>
               <nuxt-link to="/" class="lower-menu-list-nav"><i class="fa fa-windows" aria-hidden="true"></i>&nbsp;Collections</nuxt-link>
               <nuxt-link to="/" class="lower-menu-list-nav"><i class="fa fa-ticket" aria-hidden="true"></i>&nbsp;Vouchers</nuxt-link>
               <nuxt-link to="/" class="lower-menu-list-nav"><i class="fa fa-shopping-basket" aria-hidden="true"></i>&nbsp;Groceries</nuxt-link>
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

</style>