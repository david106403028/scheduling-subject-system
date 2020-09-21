<template>
    <v-app>
        <v-app-bar app dark>
            <router-link class="mr-4" to="/home">主頁面</router-link>
            <!-- <router-link class="mr-4" to="/audit">畢審</router-link> -->
            <router-link class="mr-4" to="/login">登入</router-link>
            <!-- <router-link class="mr-4" to="/schedule">排程</router-link> -->
            <!-- <router-link class="mr-4" to="/subject">課程</router-link> -->
            <router-link to="/register">註冊</router-link>
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
