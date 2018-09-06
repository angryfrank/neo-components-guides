<template>
	<div class="button-comp">
		<fieldset>
			<legend>控件展示</legend>
			<neo-dividing-line></neo-dividing-line>
		<neo-dividing-line type="dotted"></neo-dividing-line>
		<neo-dividing-line type="dashed" color="red" style="margin: 10px 0;"></neo-dividing-line>
		<neo-dividing-line type="dashed" :size="3" color="#BABABA" style="margin: 10px 0;"></neo-dividing-line>
		</fieldset>
		<fieldset>
			<legend>控件代码</legend>
			<textarea readonly>
					<neo-dividing-line></neo-dividing-line>
					<neo-dividing-line type="dotted"></neo-dividing-line>
					<neo-dividing-line type="dashed" color="red" style="margin: 10px 0;"></neo-dividing-line>
					<neo-dividing-line type="dashed" :size="3" color="#BABABA" style="margin: 10px 0;"></neo-dividing-line>
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
		name: 'ButtonComp',
		data() {
			return {}
		},
		methods: {
			handleClick,
		}
	}

	function handleClick() {
		console.log("点击");
	}
</script>