<template>
	<div class="button-comp">
		<fieldset>
			<legend>控件展示</legend>
			<neo-gallery :homeBanner="imgUrls"></neo-gallery>
		</fieldset>
		<fieldset>
			<legend>控件代码</legend>
			<textarea readonly>
<neo-gallery :homeBanner="imgUrls"></neo-gallery>
			</textarea>
		</fieldset>
		<fieldset>
			<legend>属性说明</legend>
			<textarea readonly>
imgUrls: [
	"https://sinotransdev.oss-cn-shanghai.aliyuncs.com/sino/dev/img/user/5zNTPx8hZ6.png",
	"https://sinotransdev.oss-cn-shanghai.aliyuncs.com/sino/dev/img/user/iXSW3Ezm83.png",
	"https://sinotransdev.oss-cn-shanghai.aliyuncs.com/sino/dev/img/user/5zNTPx8hZ6.png",
	"https://sinotransdev.oss-cn-shanghai.aliyuncs.com/sino/dev/img/user/iXSW3Ezm83.png",
	"https://sinotransdev.oss-cn-shanghai.aliyuncs.com/sino/dev/img/user/5zNTPx8hZ6.png",
	"https://sinotransdev.oss-cn-shanghai.aliyuncs.com/sino/dev/img/user/iXSW3Ezm83.png",
	"https://sinotransdev.oss-cn-shanghai.aliyuncs.com/sino/dev/img/user/5zNTPx8hZ6.png",
	"https://sinotransdev.oss-cn-shanghai.aliyuncs.com/sino/dev/img/user/iXSW3Ezm83.png",
]
			</textarea>
		</fieldset>
	</div>
</template>

<script>
	export default {
		name: 'GalleryComp',
		data() {
			return {
				imgUrls: [
					"https://sinotransdev.oss-cn-shanghai.aliyuncs.com/sino/dev/img/user/5zNTPx8hZ6.png",
					"https://sinotransdev.oss-cn-shanghai.aliyuncs.com/sino/dev/img/user/iXSW3Ezm83.png",
					"https://sinotransdev.oss-cn-shanghai.aliyuncs.com/sino/dev/img/user/5zNTPx8hZ6.png",
					"https://sinotransdev.oss-cn-shanghai.aliyuncs.com/sino/dev/img/user/iXSW3Ezm83.png",
					"https://sinotransdev.oss-cn-shanghai.aliyuncs.com/sino/dev/img/user/5zNTPx8hZ6.png",
					"https://sinotransdev.oss-cn-shanghai.aliyuncs.com/sino/dev/img/user/iXSW3Ezm83.png",
					"https://sinotransdev.oss-cn-shanghai.aliyuncs.com/sino/dev/img/user/5zNTPx8hZ6.png",
					"https://sinotransdev.oss-cn-shanghai.aliyuncs.com/sino/dev/img/user/iXSW3Ezm83.png",
				]
			}
		},
	}
</script>