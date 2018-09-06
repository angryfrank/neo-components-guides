<template>
	<div class="button-comp">
		<fieldset>
			<legend>控件展示</legend>
			<neo-button size="large" style="width: 300px;" @click="handleClick">默认</neo-button>
			<neo-button type="primary" @click="handleClick" icon="&#xe6c6;">默认</neo-button>
			<neo-button type="success" @click="handleClick">默认</neo-button>
			<neo-button type="warning" @click="handleClick">默认</neo-button>
			<neo-button type="danger" size="small" @click="handleClick">默认</neo-button>
			<neo-button type="stroke" size="small">默认</neo-button>
			<neo-button type="stroke" size="small" disabled>默认</neo-button>
			<neo-button type="primary" disabled @click="handleClick">默认</neo-button>
			<neo-button size="large" disabled @click="handleClick">默认</neo-button>
		</fieldset>
		<fieldset>
			<legend>控件代码</legend>
			<textarea readonly>
				<neo-button size="large" style="width: 300px;" @click="handleClick">默认</neo-button>
				<neo-button type="primary" @click="handleClick" icon="&#xe6c6;">默认</neo-button>
				<neo-button type="success" @click="handleClick">默认</neo-button>
				<neo-button type="warning" @click="handleClick">默认</neo-button>
				<neo-button type="danger" size="small" @click="handleClick">默认</neo-button>
				<neo-button type="stroke" size="small">默认</neo-button>
				<neo-button type="stroke" size="small" disabled>默认</neo-button>
				<neo-button type="primary" disabled @click="handleClick">默认</neo-button>
				<neo-button size="large" disabled @click="handleClick">默认</neo-button>
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