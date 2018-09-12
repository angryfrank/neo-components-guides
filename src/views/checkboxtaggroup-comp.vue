<template>
	<div class="tabs-comp">
		<fieldset>
			<legend>控件展示</legend>
			<neo-checkbox-tag-group v-model="cbList">
				<neo-checkbox-tag v-for="item in itemList" :key="item.label" :label="item.label" @click="handleClick(item.label, item.value,$event)">{{item.value}}</neo-checkbox-tag>
				<neo-checkbox-tag :label="item.label" disabled>{{item.value}}</neo-checkbox-tag>
			</neo-checkbox-tag-group>
		</fieldset>
		<fieldset>
			<legend>控件代码</legend>
			<textarea readonly>
//中括号请使用花括号替换
<neo-checkbox-tag-group v-model="cbList">
	<neo-checkbox-tag v-for="item in itemList" :key="item.label" :label="item.label" @click="handleClick(item.label, item.value,$event)">[[item.value]]</neo-checkbox-tag>
	<neo-checkbox-tag :label="item.label" disabled>[[item.value]]</neo-checkbox-tag>
</neo-checkbox-tag-group>
			</textarea>
		</fieldset>
		<fieldset>
			<legend>属性说明</legend>
			<textarea readonly>
//label值支持String
cbList: ["1", "2"],
itemList: [{
	label: "1",
	value: "大大促销",
}, {
	label: "2",
	value: "小促销",
}, {
	label: "3",
	value: "大中促销",
}],
item: {
	label: "4",
	value: "大大促销",
},

function handleClick(label, value, evt) {
	console.log("label", label);
	console.log("value", value);
	console.log("evt", evt);//返回的选中状态,true/false
}
			</textarea>
		</fieldset>
	</div>
</template>

<script>
	export default {
		name: 'CheckboxGroupComp',
		data() {
			return {
				cbList: ["1", "2"],
				itemList: [{
					label: "1",
					value: "大大促销",
				}, {
					label: "2",
					value: "小促销",
				}, {
					label: "3",
					value: "大中促销",
				}],
				item: {
					label: "4",
					value: "大大促销",
				},
			}
		},
		methods: {
			handleClick
		},
	}

	function handleClick(label, value, evt) {
		console.log("label", label);
		console.log("value", value);
		console.log("evt", evt);
	}
</script>