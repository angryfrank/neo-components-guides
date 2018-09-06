<template>
	<div class="tabs-comp">
		<fieldset>
			<legend>控件展示</legend>
			<neo-steps :active="active">
				<neo-step title="步骤 1"></neo-step>
				<neo-step title="步骤 2"></neo-step>
				<neo-step title="步骤 3"></neo-step>
				<neo-step title="步骤 4"></neo-step>
			</neo-steps>
		</fieldset>
		<fieldset>
			<legend>控件代码</legend>
			<textarea readonly>
					<neo-steps :active="active">
						<neo-step title="步骤 1"></neo-step>
						<neo-step title="步骤 2"></neo-step>
						<neo-step title="步骤 3"></neo-step>
						<neo-step title="步骤 4"></neo-step>
					</neo-steps>
				</textarea>
		</fieldset>
		<fieldset>
			<legend>属性说明</legend>
			<textarea readonly>
						data() {
							return {
								active: 2
							}
						}
				</textarea>
		</fieldset>
	</div>
</template>

<script>
	export default {
		name: 'StepsComp',
		data() {
			return {
				active:2,
			}
		},
		methods: {},
	}
</script>