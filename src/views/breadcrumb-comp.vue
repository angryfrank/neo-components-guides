<template>
	<div class="button-comp">
		<fieldset>
			<legend>控件展示</legend>
			<neo-breadcrumb>
				<neo-breadcrumb-item v-for="item in breadcrumbList" :key="item.label" :to="item.to">{{item.label}}</neo-breadcrumb-item>
			</neo-breadcrumb>
		</fieldset>
		<fieldset>
			<legend>控件代码</legend>
			<textarea readonly>
					<neo-breadcrumb>
						<neo-breadcrumb-item to="{ path: '/' }">首页</neo-breadcrumb-item>
					</neo-breadcrumb>
					<neo-breadcrumb>
						<neo-breadcrumb-item to="{ path: '/aa' }">活动管理</neo-breadcrumb-item>
					</neo-breadcrumb>
					<neo-breadcrumb>
						<neo-breadcrumb-item>活动详情</neo-breadcrumb-item>
					</neo-breadcrumb>
			</textarea>
		</fieldset>
		<fieldset>
			<legend>属性说明</legend>
			<p>暂无</p>
		</fieldset>
	</div>
</template>

<script>
	export default {
		name: 'BreadcrumbComp',
		data() {
			return {
				breadcrumbList: [{
					to: {
						path: '/'
					},
					label: '首页'
				}, {
					to: {
						path: '/aa'
					},
					label: '活动管理'
				}, {
					label: '活动详情'
				}]
			}
		},
		methods: {},
	}
</script>