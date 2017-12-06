<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <router-link to="/HelloWorld"><el-menu-item index="1">处理中心</el-menu-item></router-link>
            <router-link to="/frist"><el-menu-item index="2">我的工作台</el-menu-item></router-link>
            <router-link to="/second"><el-menu-item index="3">订单管理</el-menu-item></router-link>
        </el-menu>
        <router-view/>
    </div>
</template>

<script>
    import axs from '../axios.service.js'
    export default {
        name: 'mainPage',
        data() {
            return {
                activeIndex:'1'
            }
        },
        methods:{
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
