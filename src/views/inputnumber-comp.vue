<template>
	<div class="button-comp">
		<fieldset>
			<legend>控件展示</legend>
			<h4>基础用法</h4>
			<neo-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></neo-input-number>
			<h4>禁用状态</h4>
			<neo-input-number v-model="num2" :disabled="true"></neo-input-number>
			<h4>步数</h4>
			<neo-input-number v-model="num3" :step="2"></neo-input-number>
			<h4>精度</h4>
			<neo-input-number v-model="num9" :precision="2" :step="0.1" :max="10"></neo-input-number>
			<h4>尺寸</h4>
			<neo-input-number v-model="num4"></neo-input-number>
			<neo-input-number size="medium" v-model="num5"></neo-input-number>
			<neo-input-number size="small" v-model="num6"></neo-input-number>
			<neo-input-number size="mini" v-model="num7"></neo-input-number>
			<h4>按钮位置</h4>
			<neo-input-number v-model="num8" controls-position="right" @change="handleChange" :min="1" :max="10"></neo-input-number>
		</fieldset>
		<fieldset>
			<legend>控件代码</legend>
			<textarea readonly>
<h4>基础用法</h4>
<neo-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></neo-input-number>
<h4>禁用状态</h4>
<neo-input-number v-model="num2" :disabled="true"></neo-input-number>
<h4>步数</h4>
<neo-input-number v-model="num3" :step="2"></neo-input-number>
<h4>精度</h4>
<neo-input-number v-model="num9" :precision="2" :step="0.1" :max="10"></neo-input-number>
<h4>尺寸</h4>
<neo-input-number v-model="num4"></neo-input-number>
<neo-input-number size="medium" v-model="num5"></neo-input-number>
<neo-input-number size="small" v-model="num6"></neo-input-number>
<neo-input-number size="mini" v-model="num7"></neo-input-number>
<h4>按钮位置</h4>
<neo-input-number v-model="num8" controls-position="right" @change="handleChange" :min="1" :max="10"></neo-input-number>
			</textarea>
		</fieldset>
		<fieldset>
			<legend>属性说明</legend>
			<textarea readonly>
data() {
	return {
		num1: 1,
		num2: 1,
		num3: 5,
		num4: 1,
		num5: 1,
		num6: 1,
		num7: 1,
		num8: 1,
		num9: 1
	}
},
methods: {
	handleChange(value) {
		console.log(value);
	}
},
			</textarea>
		</fieldset>
	</div>
</template>

<script>
	export default {
		name: 'InputNumberComp',
		data() {
			return {
				num1: 1,
				num2: 1,
				num3: 5,
				num4: 1,
				num5: 1,
				num6: 1,
				num7: 1,
				num8: 1,
				num9: 1
			}
		},
		methods: {
			handleChange(value) {
				console.log(value);
			}
		},
	}
</script>