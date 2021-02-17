<template>
  <v-container >
    <v-row >
      <v-col cols="12" class="mt-5 mb-16">
        <div class="d-flex">
        <div>
          <h2>Welcome</h2>
        </div>
        <v-spacer></v-spacer>
        <div>
         <span class="subtitle"> {{loginDate}} </span>
        </div>
        </div>
      </v-col>
      </v-row>

      <v-row class="mt-16 text-center" > 
        <v-col cols="8" offset="2">
          <v-row>
            <v-col cols="12" md="6">
              <v-btn  block large color="#03476e" dark elevation="2" rounded>Withdrawals</v-btn>
              </v-col>
              <v-col cols="12" md="6">
               <v-btn  block large color="#c89523" dark elevation="2" rounded>Deposits</v-btn>
              </v-col>
            </v-row>
         
        </v-col>
        
          
  </v-row>

  
  </v-container>
</template>

<script>
  export default {

    data: () => ({
      
    }),

    computed: {
      loginDate(){
        let today = new Date()
        let day = today.getDate()
        let month = today.getMonth()
        let year = today.getFullYear()
        //let time = today.getTime()
        let loginDateandTime = `${day} : ${month + 1} : ${year}`

        return loginDateandTime
       
        
      }
    },
  }
</script>
