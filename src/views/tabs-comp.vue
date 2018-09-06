<template>
	<div class="tabs-comp">
		<fieldset>
			<legend>控件展示</legend>
			<neo-tabs v-model="activeName" type="card" @tab-click="handleTabClick">
				<neo-tab-pane label="用户管理" name="first">用户管理</neo-tab-pane>
				<neo-tab-pane label="配置管理" name="second">配置管理</neo-tab-pane>
				<neo-tab-pane label="角色管理" name="third">角色管理</neo-tab-pane>
				<neo-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</neo-tab-pane>
			</neo-tabs>
			<br>
			<neo-tabs v-model="activeName" @tab-click="handleTabClick">
				<neo-tab-pane label="用户管理" name="first">用户管理</neo-tab-pane>
				<neo-tab-pane label="配置管理" name="second">配置管理</neo-tab-pane>
				<neo-tab-pane label="角色管理" name="third">角色管理</neo-tab-pane>
				<neo-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</neo-tab-pane>
			</neo-tabs>
			<br>
			<neo-tabs v-model="activeName" type="card" editable @tab-click="handleTabClick">
				<neo-tab-pane label="用户管理" name="first">用户管理</neo-tab-pane>
				<neo-tab-pane label="配置管理" name="second">配置管理</neo-tab-pane>
				<neo-tab-pane label="角色管理" name="third">角色管理</neo-tab-pane>
				<neo-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</neo-tab-pane>
			</neo-tabs>
		</fieldset>
		<fieldset>
			<legend>控件代码</legend>
			<!-- <textarea readonly>{{code}}</textarea> -->
			<textarea readonly>
				<neo-tabs v-model="activeName" type="card" @tab-click="handleTabClick">
					<neo-tab-pane label="用户管理" name="first">用户管理</neo-tab-pane>
					<neo-tab-pane label="配置管理" name="second">配置管理</neo-tab-pane>
					<neo-tab-pane label="角色管理" name="third">角色管理</neo-tab-pane>
					<neo-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</neo-tab-pane>
				</neo-tabs>
				<neo-tabs v-model="activeName" @tab-click="handleTabClick">
					<neo-tab-pane label="用户管理" name="first">用户管理</neo-tab-pane>
					<neo-tab-pane label="配置管理" name="second">配置管理</neo-tab-pane>
					<neo-tab-pane label="角色管理" name="third">角色管理</neo-tab-pane>
					<neo-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</neo-tab-pane>
				</neo-tabs>
				<neo-tabs v-model="activeName" type="card" editable @tab-click="handleTabClick">
					<neo-tab-pane label="用户管理" name="first">用户管理</neo-tab-pane>
					<neo-tab-pane label="配置管理" name="second">配置管理</neo-tab-pane>
					<neo-tab-pane label="角色管理" name="third">角色管理</neo-tab-pane>
					<neo-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</neo-tab-pane>
				</neo-tabs>
			</textarea>
		</fieldset>
		<fieldset>
			<legend>属性说明</legend>
			<textarea readonly>
					data() {
						return {
							activeName: 'second',
						}
					},
					function handleTabClick(tab, event){
						console.log(this.activeName);
						console.log("tab",tab);
						console.log("event",event);
					}
			</textarea>
		</fieldset>
	</div>
</template>

<script>
	import { translateCodeToStr } from '../utils/index.js'
	export default {
		name: 'TabsComp',
		data() {
			return {
				code: "",
				activeName: 'second',
			}
		},
		methods: {
			init,
			handleTabClick,
		},
		created() {
			this.init();
		},
	}

	function init() {
		let code = '';
		this.code = translateCodeToStr(code);
	}

	function handleTabClick(tab, event){
		console.log(this.activeName);
		console.log("tab",tab);
		console.log("event",event);
	}
</script>