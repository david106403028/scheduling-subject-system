<template>
    <div class="register d-flex justify-center align-center">
        <v-card color="red lighten-3">
            <v-card-text class="pa-6">
                <v-text-field class="mt-7" background-color="white" outlined hide-details label="Email"></v-text-field>
                <v-text-field class="mt-7" background-color="white" outlined hide-details label="帳號"></v-text-field>
                <v-text-field class="mt-7" background-color="white" outlined hide-details label="密碼"></v-text-field>
                <v-text-field
                    class="mt-7"
                    background-color="white"
                    outlined
                    hide-details
                    label="確認密碼"
                ></v-text-field>
            </v-card-text>
            <v-card-actions class="pa-6 d-flex">
                <v-btn class="flex-grow-1" color="primary" x-large :ripple="false" @click="$router.push('/login')">
                    註冊
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {}
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
