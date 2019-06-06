<template>
  <div >
     <div id="upperMenuID" class="uppermenu">
        <ul id="menu">
            <li class="upper-menu-list"  v-for="(item,index) in $store.state.upperMenuList" :key="index">
               <nuxt-link to="/">{{item}}</nuxt-link>
            </li>
         </ul>  
     </div>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <a class="navbar-brand brand" href="#">SHOWCASE</a>
         <div>
            <form class="form-inline ">
               <input class="form-control m-lg-2 " type="search" placeholder="Search" aria-label="Search">
            </form>
         </div>
      </nav>
      <div id="lowerMenuNav" class="lower-menu-nav-color hide-lower-at-first">
         <ul id="lower-menu-in-nav">
            <nuxt-link to="/" class="lower-menu-list-nav" style="margin-right:200px;">Category</nuxt-link>
            <nuxt-link to="/" class="lower-menu-list-nav">Shopping Mall</nuxt-link>
            <nuxt-link to="/" class="lower-menu-list-nav">Every Collection</nuxt-link>
            <nuxt-link to="/" class="lower-menu-list-nav">Collections</nuxt-link>
            <nuxt-link to="/" class="lower-menu-list-nav">Vouchers</nuxt-link>
            <nuxt-link to="/" class="lower-menu-list-nav">Groceries</nuxt-link>
         </ul> 
      </div>
  </div>
</template>
<script>

export default {
   data(){
      return{
      }
   },
   // props : {
   //    showTopMenu : {
   //       type: Boolean
   //    }
   // },
   mounted() {
   }
};
</script>

<style>

</style>