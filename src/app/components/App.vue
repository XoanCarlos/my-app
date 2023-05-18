<template>
    <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="collpase navbar-collapse">
            <router-link to="/" class="navbar-brand">
            <img src="img/taxi.svg" alt="" width="50" height="40" class="d-inline-block align-text-top">    
            </router-link>    
            <router-link to = "/" class="navbar-brand nav-link active">Home</router-link>
            <router-link to = "/servicesitem" class="navbar-brand">Services</router-link>
            <router-link to="/taxifleet" class="navbar-brand">Fleet</router-link>
            <router-link to="/aboutus" class="navbar-brand">About</router-link>

            <router-link to = "/HomeUs" class="navbar-brand">
            <img src="img/taxi.svg" alt="" width="50" height="40" class="d-inline-block align-text-top">    
            </router-link>    
            <router-link to = "/" class="navbar-brand nav-link active">Home</router-link>
            <router-link to = "/ServicesItem" class="navbar-brand">Services</router-link>
            <router-link to = "/TaxiFleet" class="navbar-brand">Fleet</router-link>
            <router-link to = "/AboutUs" class="navbar-brand">About</router-link>

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
