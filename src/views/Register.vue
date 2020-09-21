<template>
    <div class="register d-flex justify-center align-center">
        <v-card color="red lighten-3">
            <v-card-text class="pa-6">
                <v-text-field
                    v-modal="email"
                    class="mt-7"
                    background-color="white"
                    outlined
                    hide-details
                    label="Email"
                ></v-text-field>
                <v-text-field
                    v-modal="account"
                    class="mt-7"
                    background-color="white"
                    outlined
                    hide-details
                    label="帳號"
                ></v-text-field>
                <v-text-field
                    v-modal="password"
                    class="mt-7"
                    background-color="white"
                    outlined
                    hide-details
                    label="密碼"
                ></v-text-field>
                <v-text-field
                    class="mt-7"
                    v-modal="confirmPassword"
                    background-color="white"
                    outlined
                    hide-details
                    label="確認密碼"
                ></v-text-field>
            </v-card-text>
            <v-card-actions class="pa-6 d-flex">
                <v-btn class="flex-grow-1" color="primary" x-large :ripple="false" @click="register">
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
        email: '',
        account: '',
        password: '',
        confirmPassword: ''
    }),
    methods: {
        register() {
            const route = '/register' //這個是你們後端定義的路徑
            axios
                .post(route, { account: this.account, password: this.password }) // 這會是登入需要帶的參數, 也是由後端定義
                .then(() => {
                    // 成功之後在這裡要做成功後要做的事情
                    this.$router.push('/login')
                })
                .catch(error => {
                    // 失敗之後在這裡要做失敗後要做的事情
                    throw error
                })
        }
    }
}
</script>

<style lang="scss" scoped>
.register {
    height: 100%;
    width: 100%;
}
::v-deep .v-card {
    height: 500px;
    width: 800px;
    &__text {
        height: 70%;
    }
    &__actions {
        height: 30%;
    }
}
</style>
