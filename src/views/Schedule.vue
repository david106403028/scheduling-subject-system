<template>
    <div class="schedule d-flex flex-row">
        <div class="left d-flex flex-column w-50 flex-grow-1 mr-4">
            <table class="subject">
                <thead>
                    <tr>
                        <th></th>
                        <th>一</th>
                        <th>二</th>
                        <th>三</th>
                        <th>四</th>
                        <th>五</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(date, index) in scheduleCalanders" :key="index">
                        <template v-if="index === 4">
                            <td class="h-30"></td>
                            <td class="spacer h-30" colspan="5">午休</td>
                        </template>
                        <template v-else>
                            <td class="sub" v-for="item in date" :key="item.subId" :id="item.subId">
                                {{ item.subId }}
                            </td>
                        </template>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="right w-50 flex-grow-1"></div>
    </div>
</template>

<script>
export default {
    data: () => ({}),
    computed: {
        scheduleCalanders() {
            let result = [1, 2, 3, 4, 9, 5, 6, 7, 8].map(value => {
                let arr = new Array(6)
                    .fill({ value })
                    .map((cur, index) => ({ subId: `${cur.value}${!index ? '' : `-${index}`}` }))
                return arr
            })
            return result
        }
    }
}
</script>

<style lang="scss" scoped>
.schedule {
    height: 100%;
}
.subject {
    width: 100%;
    height: 100%;
    border: 1px solid #c0c0c0;
    border-collapse: collapse;
    padding: 9px;
    th {
        border: 1px solid #c0c0c0;
        padding: 20px;
        background: #f0f0f0;
    }
    td {
        text-align: center;
        border: 1px solid #c0c0c0;
        padding: 10px;
    }
}
.w-50 {
    width: 50%;
}
</style>
