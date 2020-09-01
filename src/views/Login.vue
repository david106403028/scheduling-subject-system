<template>
    <div class="login d-flex justify-center align-center">
        <v-card color="red lighten-3">
            <v-card-text class="pa-6">
                <v-text-field
                    v-model="account"
                    class="mt-7"
                    background-color="white"
                    outlined
                    hide-details
                    label="帳號"
                ></v-text-field>
                <v-text-field
                    v-model="password"
                    class="mt-7"
                    type="password"
                    background-color="white"
                    outlined
                    hide-details
                    label="密碼"
                ></v-text-field>
            </v-card-text>
            <v-card-actions class="pa-6 d-flex">
                <v-btn class="flex-grow-1" color="error" x-large :ripple="false" @click="login">登入</v-btn>
                <v-btn class="flex-grow-1" color="primary" x-large :ripple="false" @click="$router.push('/register')">
                    註冊
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import axios from '@/plugins/axios'
export default {
    data: () => ({
        account: '',
        password: ''
    }),
    methods: {
        login() {
            axios.post('/login', { account: this.account, password: this.password })
        }
    }
}
</script>

<style lang="scss" scoped>
.login {
    height: 100%;
    width: 100%;
}
::v-deep .v-card {
    height: 400px;
    width: 800px;
    &__text {
        height: 70%;
    }
    &__actions {
        height: 30%;
    }
}
</style>
