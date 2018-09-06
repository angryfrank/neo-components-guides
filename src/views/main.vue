<template>
    <el-container style="height: 100%;">
        <el-header height="80px">
            <h1>Neo公共样式控件</h1>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <left-menu></left-menu>
            </el-aside>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import LeftMenu from '../components/LeftMenu.vue'
    export default {
        name: 'Main',
        components: {
            LeftMenu,
        },
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    .el-header {
        background-color: #FA7622;
        color: #FFF;
    }

    fieldset {
        padding: 20px 10px;
        margin-bottom: 30px;
        border: 1px #e6e6e6 solid;
        min-height: 100px;
        legend {
            font-size: 20px;
            font-weight: bold;
            padding: 0 10px;
        }
        textarea {
            width: 100%;
            height: 20vh;
            font-size: 18px;
            text-align: start;
            border: none;
            color: #252525;
        }
    }
</style>