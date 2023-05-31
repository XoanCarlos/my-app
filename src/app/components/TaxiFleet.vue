<template>
    <div class="row">
        <div class="col-md-12">
        Esta es nuestra flota
    </div>
   </div>


  <div class="m-5 vh-80 row justify-content-center align-items-center">
    <div class="card co-auto bg-light p-5 text-center">
      <div class="card-body">       
        <form @submit.prevent = "addCab" class="border p-3 form">
               <!--         <div class="form-row">
                            <div class="form-group col-md-6">
                                <select id="taxi" placeholder="Taxi" >
                                    <option value = "">Choose a Cab</option>
                                </select>
                            </div>
                            <br> 
                        </div>-->
                        <div class="form-row">
                            <div class="form-group col-md-6">
                            <input type="text" v-model = "cab.target" placeholder="Cab target" class="form-control">
                        <br>
                             </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group cold-md-6">
                            <input type="text" v-model = "cab.price" placeholder="Price 00000.00" class="form-control" id="floput" oninput="changeComaPoint();">
                        <br>
                            <input type="text" v-model = "cab.driver" placeholder="Driver" class="form-control">
                            </div>
                        <br>
                        </div>
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary d-md-block">Save Cab</button>
                        </div>
                    </form>
            </div>
        </div>
    </div>
    <br>
    <div class="container">
        <div class="col-md-7">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Target</th>
                        <th>Price</th>
                        <th>Driver</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="cab of cabs" :key="cab._id">
                    <td>{{ cab.target }}</td>
                    <td>{{ cab.price }}</td>
                    <td> {{ cab.driver }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>          
  </template>





<script>
class Cab{
    constructor(target, price, driver){
        this.target = target;
        this.price = price;
        this.driver = driver;
    }
}
    export default{
        data(){
            return{
                cab: new Cab()
            }
        },
        methods:{
            addCab(){
                fetch('/api/cabs',
                {
                    method: 'POST',
                    body: JSON.stringify(this.cab),
                    headers:{
                        'Accept':'application/json',
                        'Content-type': 'application/json'
                    }
                })
                .then(res=> res.json())
                .then(data => console.log(data))
                this.cab = new Cab();
            },

            
            listCabs() {
                fetch ('api/cabs')
                .then(res => res.json())
                .then(data => {
                    this.cabs = data;
                    console.log(this.cabs)
                });
            },


            changeComaPoint() {
            var ele = document.getElementById("floput");
            ele.value = ele.value.replace(",", ".");

        }
      }
    }

                
</script>

