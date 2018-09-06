<template>
	<div class="button-comp">
		<fieldset>
			<legend>控件展示</legend>
			<neo-timeline :itemList="itemList"></neo-timeline>
		</fieldset>
		<fieldset>
			<legend>控件代码</legend>
			<textarea readonly>
				<neo-timeline :itemList="itemList"></neo-timeline>
			</textarea>
		</fieldset>
		<fieldset>
			<legend>属性说明</legend>
			<textarea readonly>
					itemList: [{
						timestamp: '2018-09-05 19:45:48',
						content: '顶顶顶顶sdfhjsdhf将决定是否'
					}, {
						timestamp: '2018-09-05 19:45:49',
						content: '顶顶顶顶撒打发时间快点恢复和哈桑的房岁的妇女马上到麻烦你们,吗买单反马上年代末间阿三酱豆腐就会加快速度加快分解啊速度加快'
					}, {
						timestamp: '2018-09-05 19:45:50',
						content: '顶顶顶顶但是发射点机房环境'
					}, {
						timestamp: '2018-09-05 19:45:51',
						content: '顶顶顶顶'
					}],
			</textarea>
		</fieldset>
	</div>
</template>

<script>
	export default {
		name: 'ButtonComp',
		data() {
			return {
				itemList: [{
					timestamp: '2018-09-05 19:45:48',
					content: '顶顶顶顶sdfhjsdhf将决定是否'
				}, {
					timestamp: '2018-09-05 19:45:49',
					content: '顶顶顶顶撒打发时间快点恢复和哈桑的房岁的妇女马上到麻烦你们,吗买单反马上年代末间阿三酱豆腐就会加快速度加快分解啊速度加快'
				}, {
					timestamp: '2018-09-05 19:45:50',
					content: '顶顶顶顶但是发射点机房环境'
				}, {
					timestamp: '2018-09-05 19:45:51',
					content: '顶顶顶顶'
				}],
			}
		},
		methods: {}
	}
</script>