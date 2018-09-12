<template>
	<div class="tabs-comp">
		<fieldset>
			<legend>控件展示</legend>
			<neo-checkbox-tag-group v-model="cbList">
				<neo-checkbox-tag v-for="item in itemList" :key="item.key" :item="item"></neo-checkbox-tag>
				<neo-checkbox-tag :item="item" disabled></neo-checkbox-tag>
			</neo-checkbox-tag-group>
		</fieldset>
		<fieldset>
			<legend>控件代码</legend>
			<textarea readonly>
					<neo-checkbox-tag-group v-model="cbList">
						<neo-checkbox-tag v-for="item in itemList" :key="item.key" :item="item"></neo-checkbox-tag>
						<neo-checkbox-tag :item="item" disabled></neo-checkbox-tag>
					</neo-checkbox-tag-group>
				</textarea>
		</fieldset>
		<fieldset>
			<legend>属性说明</legend>
			<textarea readonly>
				cbList:[1,2],
				itemList: [{
					key:1,
					value: "大大促销",
				}, {
					key:2,
					value: "小促销",
				}, {
					key:3,
					value: "大中促销",
				}],
				item: {
					key:4,
					value: "大大促销",
				},
			</textarea>
		</fieldset>
	</div>
</template>

<script>
	export default {
		name: 'CheckboxGroupComp',
		data() {
			return {
				cbList:[1,2],
				itemList: [{
					key:1,
					value: "大大促销",
				}, {
					key:2,
					value: "小促销",
				}, {
					key:3,
					value: "大中促销",
				}],
				item: {
					key:4,
					value: "大大促销",
				},
			}
		},
		methods: {},
		watch:{}
	}
</script>