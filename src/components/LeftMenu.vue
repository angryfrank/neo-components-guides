<template>
    <div class='left-menu'>
        <el-menu default-active="0-0" class="el-menu-vertical-demo">
            <el-submenu v-for="(item1,index1) in menuList" :key="index1" :index="index1.toString()">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>{{item1.menuValue}}</span>
                </template>
                <template v-if="item1.children && item1.children.length > 0">
                    <el-menu-item v-for="(item2,index2) in item1.children" :key="index1+'-'+index2" :index="index1+'-'+index2"
                        @click="handleMenuClick(item2.menuKey)">{{item2.menuValue}}</el-menu-item>
                </template>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: 'LeftMenu',
        data() {
            return {
                menuList: [{
                    menuValue: '基础',
                    children: [{
                        menuKey: 'button',
                        menuValue: '按钮（button）'
                    }]
                }, {
                    menuValue: '导航',
                    children: [{
                        menuKey: 'breadcrumb',
                        menuValue: '面包屑（breadcrumb）'
                    }, {
                        menuKey: 'tabs',
                        menuValue: '标签页（tabs）'
                    }, {
                        menuKey: 'steps',
                        menuValue: '步骤条（steps）'
                    }]
                }, {
                    menuValue: '其他',
                    children: [{
                        menuKey: 'dividingline',
                        menuValue: '分割线（dividingline）'
                    }, {
                        menuKey: 'timeline',
                        menuValue: '时间线（timeline）'
                    }]
                }]
            }
        },
        methods: {
            handleMenuClick,
        }
    }

    function handleMenuClick(menuKey) {
        this.$router.push({
            path: `/components/${menuKey}`
        });
    }
</script>

<style>
</style>