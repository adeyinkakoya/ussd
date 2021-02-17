<template>
<nav>
  <v-app>
    <v-app-bar
      app
      color="#03476e"
      height="100"
      dark
    >
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
      <v-img
       src="/images/f.png"
       height="80"
       >
        </v-img>
       
      </div>
      <v-toolbar-title>USSD Portal</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn
        href="#"
        text
      >
        <span class="mr-2">LogOut</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>

    <v-navigation-drawer app dark v-model="drawer" color="#c89523">
      <v-list nav>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
           <h1>Adeyinka Ogunkoya</h1>
          </v-list-item-title>
          <v-list-item-subtitle>
        <span class="bold">Teller 1</span>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list
        nav
        class="poppins"
      >
        <v-list-item 
        link>

          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

         <v-list-item
          link
        >
          <v-list-item-icon>
            <v-icon>mdi-cash</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Withdrawals</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

         <v-list-item
          link
        >
          <v-list-item-icon>
            <v-icon>mdi-cash-multiple</v-icon>
          </v-list-item-icon>
          
          <v-list-item-content>
            <v-list-item-title> Deposits</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

          <v-list-item
          link
        >
          <v-list-item-icon>
            <v-icon>mdi-book-open-variant</v-icon>
          </v-list-item-icon>
          
          <v-list-item-content>
            <v-list-item-title> Transactions</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
</nav>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer:true
    //
  }),
};
</script>
<style >
.bold {
  font-weight: bold;
}

  
</style>
