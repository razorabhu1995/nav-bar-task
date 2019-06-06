<template>
   <div class="body">
      <div id="header" class="nav-bar-shadow">
         <app-nav :showTopMenu="showTopMenu" :showLowerMenu="showLowerMenu"></app-nav>
      </div>
      <div class="row banner-image">
         <div class="banner-menu">
            <div>
               <p
                  class="banner-menu-list"
                  v-for="(item,index) in $store.state.bannerMenuList"
                  :key="index"
               >
                  <nuxt-link to="/">{{item}}</nuxt-link>
               </p>
            </div>
         </div>
      </div>

      <div id="lowerMenuID" class="row lowermenu">
         <nuxt-link to="/" class="col lower-menu-item"><i class="fa fa-building" aria-hidden="true"></i>&nbsp;Shopping Mall</nuxt-link>
         <nuxt-link to="/" class="col lower-menu-item"><i class="fa fa-globe" aria-hidden="true"></i>&nbsp;Every Collection</nuxt-link>
         <nuxt-link to="/" class="col lower-menu-item"><i class="fa fa-windows" aria-hidden="true"></i>&nbsp;Collections</nuxt-link>
         <nuxt-link to="/" class="col lower-menu-item"><i class="fa fa-ticket" aria-hidden="true"></i>&nbsp;Vouchers</nuxt-link>
         <nuxt-link to="/" class="col lower-menu-item"><i class="fa fa-shopping-basket" aria-hidden="true"></i>&nbsp;Groceries</nuxt-link>
      </div>

      <div class="row lowermenu">
         <div class="col-4" style="margin-bottom:10px;" v-for="(n,index) in 12" :key="index">
            <div class="card" style="width: 18rem;">
               <img class="card-img-top" src="https://via.placeholder.com/150" alt="Card image cap">
               <div class="card-body">
                  <h5 class="card-title">Dell 5566</h5>
                  <p class="card-text">Superb laptop which has not be designed yet.</p>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import Nav from "~/components/Nav.vue";

export default {
   components: {
      "app-nav": Nav
   },
   data(){
      return{
         showTopMenu : true,
         showLowerMenu : false
      }
   },
   methods:{
      headerScroll : function(){
         
      }
   },
   created(){
   },
   mounted() {
      
      window.onscroll = function() {
         scrollFunc();
      };

      var header = document.getElementById("header");
      // var upperMenuID = document.getElementById("upperMenuID");
      // var lowerMenuNav = document.getElementById("lowerMenuNav");
      var lowerMenuID = document.getElementById("lowerMenuID");
      var sticktotop = header.offsetTop;
      var lowerMenuPos = lowerMenuID.offsetTop;


      /** This function checks the scroll
       *  to display and hide the nav bar menus 
       *    and also display navbar always at top
       */
      self = this;
      function scrollFunc() {
         if (window.pageYOffset > sticktotop) {
            header.classList.add("sticktotop");
         } else {
            header.classList.remove("sticktotop");
         }
         if(window.pageYOffset > lowerMenuPos){
            // upperMenuID.classList.add("hide-Upper-Menu");
            self.showTopMenu = false;
            console.log(self.showTopMenu);
            
         }else{
            self.showTopMenu=true;
            // upperMenuID.classList.remove("hide-Upper-Menu");
         }
         if(window.pageYOffset > lowerMenuPos){
            // lowerMenuNav.classList.remove("hide-lower-at-first");
            self.showLowerMenu = true;
         }
         else{
            // lowerMenuNav.classList.add("hide-lower-at-first");
            self.showLowerMenu = false;
         }
      }
   }
};
</script>

<style>
.hide-Upper-Menu{
   display: none;
   transition: visibility 0s linear 0.33s, opacity 0.33s linear;
}


</style>
