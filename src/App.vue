<template>
    <v-app>
        <v-app-bar app dark>
            <router-link class="mr-4" to="/">Home</router-link>
            <router-link class="mr-4" to="/audit">Audit</router-link>
            <router-link class="mr-4" to="/login">login</router-link>
            <router-link class="mr-4" to="/schedule">schedule</router-link>
            <router-link class="mr-4" to="/subject">subject</router-link>
            <router-link to="/register">register</router-link>
        </v-app-bar>
        <v-main>
            <v-container fluid fill-height pa-0>
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: 'App',

    data: () => ({
        //
    })
}
</script>
