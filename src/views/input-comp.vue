<template>
	<div class="button-comp">
		<fieldset>
			<legend>控件展示</legend>
			<h4>基础用法</h4>
			<neo-input v-model="input" placeholder="请输入内容"></neo-input>
			<h4>禁用状态</h4>
			<neo-input placeholder="请输入内容" v-model="input1" :disabled="true">
			</neo-input>
			<h4>可清空</h4>
			<neo-input placeholder="请输入内容" v-model="input10" clearable>
			</neo-input>
			<h4>文本域</h4>
			<neo-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
			</neo-input>
			<h4>可自适应文本高度的文本域</h4>
			<neo-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="textarea3">
			</neo-input>
			<h4>复合型输入框</h4>
			<neo-input placeholder="请输入内容" v-model="input3">
				<template slot="prepend">Http://</template>
			</neo-input>
			<neo-input placeholder="请输入内容" v-model="input4">
				<template slot="append">.com</template>
			</neo-input>
			<h4>尺寸</h4>
			<neo-input placeholder="请输入内容" v-model="input6">
			</neo-input>
			<neo-input size="medium" placeholder="请输入内容" v-model="input7">
			</neo-input>
			<neo-input size="small" placeholder="请输入内容" v-model="input8">
			</neo-input>
			<neo-input size="mini" placeholder="请输入内容" v-model="input9">
			</neo-input>
		</fieldset>
		<fieldset>
			<legend>控件代码</legend>
			<textarea readonly>
<h4>基础用法</h4>
<neo-input v-model="input" placeholder="请输入内容"></neo-input>
<h4>禁用状态</h4>
<neo-input placeholder="请输入内容" v-model="input1" :disabled="true">
</neo-input>
<h4>可清空</h4>
<neo-input placeholder="请输入内容" v-model="input10" clearable>
</neo-input>
<h4>文本域</h4>
<neo-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
</neo-input>
<h4>可自适应文本高度的文本域</h4>
<neo-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="textarea3">
</neo-input>
<h4>复合型输入框</h4>
<neo-input placeholder="请输入内容" v-model="input3">
<template slot="prepend">Http://</template>
</neo-input>
<neo-input placeholder="请输入内容" v-model="input4">
<template slot="append">.com</template>
</neo-input>
<h4>尺寸</h4>
<neo-input placeholder="请输入内容" v-model="input6">
</neo-input>
<neo-input size="medium" placeholder="请输入内容" v-model="input7">
</neo-input>
<neo-input size="small" placeholder="请输入内容" v-model="input8">
</neo-input>
<neo-input size="mini" placeholder="请输入内容" v-model="input9">
</neo-input>
			</textarea>
		</fieldset>
		<fieldset>
			<legend>属性说明</legend>
			<textarea readonly>
data() {
	return {
		input: '',
		input1: '不可操作文案，14px #DFDFDF',
		input3: '',
		input4: '',
		input6: '',
		input7: '',
		input8: '',
		input9: '',
		input10: '',
		textarea: '',
		textarea3: '',
	}
},
			</textarea>
		</fieldset>
	</div>
</template>

<script>
	export default {
		name: 'InputComp',
		data() {
			return {
				input: '',
				input1: '不可操作文案，14px #DFDFDF',
				input3: '',
				input4: '',
				input6: '',
				input7: '',
				input8: '',
				input9: '',
				input10: '',
				textarea: '',
				textarea3: '',
			}
		},
		methods: {},
	}
</script>