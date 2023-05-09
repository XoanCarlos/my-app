<template>
    <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="collpase navbar-collapse">
            <router-link :to = " { name: 'HomeUS' } " class="navbar-brand">
            <img src="img/taxi.svg" alt="" width="50" height="40" class="d-inline-block align-text-top">    
            </router-link>    
            <router-link :to = " { name: 'HomeUs' } " class="navbar-brand nav-link active">Home</router-link>
            <router-link :to = " { name: 'ServicesItem' } " class="navbar-brand">Services</router-link>
            <router-link :to = " { name: 'TaxiFleet' } " class="navbar-brand">Fleet</router-link>
            <router-link :to = " { name: 'AboutUs' } " class="navbar-brand">About</router-link>
            <div class="container">
                <form class="d-flex">
                  <input class="col-xs-3" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>          
          </div>
        </nav>
        <body>
          <div class="container">
            <thead>
            <tr>
              <router-view/>
            </tr>
          </thead>
        </div>
        </body>
     </div> 
</template>
