<template>
    <div class="row">
        <div class="col-md-12">
        Estos son nuestros servicios
    </div>
   </div>


  <div class="m-5 vh-80 row justify-content-center align-items-center">
    <div class="card co-auto bg-light p-5 text-center">
      <div class="card-body">       
        <form @submit.prevent = "addTask" class="border p-3 form">
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
                            <input type="text" v-model = "task.destino" placeholder="Service to" class="form-control">
                        <br>
                             </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group cold-md-6">
                            <input type="text" v-model = "task.distancia" placeholder="Distance km 00.00" class="form-control" id="floput" oninput="changeComaPoint();">
                        <br>
                            <input type="text" v-model = "task.precio" placeholder="Price (€) 00.00" class="form-control">
                            </div>
                        <br>
                        </div>
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary d-md-block">Save Service</button>
                        </div>
                    </form>
            </div>
        </div>
    </div>          
  </template>

<script>
class Task{
    constructor(destino, distancia, precio){
        this.destino = destino;
        this.distancia = distancia;
        this.precio = precio;
    }
}
    export default{
        data(){
            return{
                task: new Task()
            }
        },
        methods:{
            addTask(){
                fetch('/api/tasks',
                {
                    method: 'POST',
                    body: JSON.stringify(this.task),
                    headers:{
                        'Accept':'application/json',
                        'Content-type': 'application/json'
                    }
                })
                .then(res=> res.json())
                .then(data => console.log(data))
                this.task = new Task();
            },

            changeComaPoint() {
            var ele = document.getElementById("floput");
            ele.value = ele.value.replace(",", ".");

        }
      }
    }

                
</script>

