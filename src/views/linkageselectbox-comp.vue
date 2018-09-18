<template>
    <div class="linkageselectbox-comp">
        <fieldset>
            <legend>控件展示</legend>
            <div>
                <neo-linkage-selectbox v-model="skuList1" :selectOptions="selectOptions1" :addCartFlag="addCartFlag"></neo-linkage-selectbox>
                <!-- <linkage-selectbox v-model="skuList1" :selectOptions="selectOptions1" :addCartFlag="addCartFlag"></linkage-selectbox> -->
                <neo-button @click="handleClick(1)">加入采购单</neo-button>
                <p>提交数据：{{skuList1}}</p>
            </div>
            <neo-dividing-line type="dashed" :size="3"></neo-dividing-line>
            <div>
                <neo-linkage-selectbox v-model="skuList2" :selectOptions="selectOptions2" :addCartFlag="addCartFlag"></neo-linkage-selectbox>
                <!-- <linkage-selectbox v-model="skuList2" :selectOptions="selectOptions2" :addCartFlag="addCartFlag"></linkage-selectbox> -->
                <neo-button @click="handleClick(2)">加入采购单</neo-button>
                <p>提交数据：{{skuList2}}</p>
            </div>
            <neo-dividing-line type="dashed" :size="3"></neo-dividing-line>
            <div>
                <neo-linkage-selectbox v-model="skuList3" :selectOptions="selectOptions3" :addCartFlag="addCartFlag"></neo-linkage-selectbox>
                <!-- <linkage-selectbox v-model="skuList3" :selectOptions="selectOptions3" :addCartFlag="addCartFlag"></linkage-selectbox> -->
                <neo-button @click="handleClick(3)">加入采购单</neo-button>
                <p>提交数据：{{skuList3}}</p>
            </div>
        </fieldset>
        <fieldset>
            <legend>控件代码</legend>
            <textarea style="height: 40vh;" readonly>
<div>
    <neo-linkage-selectbox v-model="skuList1" :selectOptions="selectOptions1"></neo-linkage-selectbox>
    <neo-button @click="handleClick(1)">加入采购单</neo-button>
    <p>提交数据：[[skuList1]]</p>
</div>
<neo-dividing-line type="dashed" :size="3"></neo-dividing-line>
<div>
    <neo-linkage-selectbox v-model="skuList2" :selectOptions="selectOptions2"></neo-linkage-selectbox>
    <neo-button @click="handleClick(2)">加入采购单</neo-button>
    <p>提交数据：[[skuList2]]</p>
</div>
<neo-dividing-line type="dashed" :size="3"></neo-dividing-line>
<div>
    <neo-linkage-selectbox v-model="skuList3" :selectOptions="selectOptions3"></neo-linkage-selectbox>
    <neo-button @click="handleClick(3)">加入采购单</neo-button>
    <p>提交数据：[[skuList3]]</p>
</div>
			</textarea>
        </fieldset>
        <fieldset>
            <legend>属性说明</legend>
            <textarea readonly>

			</textarea>
        </fieldset>
    </div>
</template>

<script>
    import LinkageSelectbox from '../components/LinkageSelectbox.vue'
    export default {
        name: 'LinkageSelectboxComp',
        components: {
            LinkageSelectbox
        },
        data() {
            return {
                skuList1: [],
                skuList2: [],
                skuList3: [],
                selectOptions1: [],
                selectOptions2: [],
                selectOptions3: [],
                addCartFlag:1,
            }
        },
        methods: {
            init,
            initSelectOptions,
            get1LevelData,
            get2LevelData,
            get3LevelData,
            handleClick,
        },
        created() {
            this.init();
        }
    }

    function init() {
        this.initSelectOptions();
    }

    function initSelectOptions() {
        this.get1LevelData();
        this.get2LevelData();
        this.get3LevelData();
    }

    function get1LevelData() {
        this.selectOptions1 = [];
        let attrValueNoTextZ = ["S", "M", "L", "XL", "XXL"];
        for (let z = 0; z < 5; z++) {
            let objZ = {
                "skuNo": "Z" + z,
                "parentSkuNo": "0",
                "attrNo": "attrNoZ" + z,
                "attrNoText": "尺寸",
                "attrValueNo": "attrValueNoZ" + z,
                "attrValueNoText": attrValueNoTextZ[z],
                "type": z % 2 + 1,
                "diyAttrName": "diyAttrNameZ" + z,
                "diyAttrValue": attrValueNoTextZ[z],
                "price": 300 * z,
                "stockType": z % 2 + 1,
                "stock": Math.floor(500 * Math.random()),
            };
            this.selectOptions1.push(objZ);
        }
    }

    function get2LevelData() {
        this.selectOptions2 = [];
        let attrValueNoTextY = ["红色", "蓝色", "紫色"];
        let attrValueNoTextZ = ["S", "M", "L"];
        for (let y = 0; y < 3; y++) {
            let objY = {
                "skuNo": "Y" + y,
                "parentSkuNo": "0",
                "attrNo": "attrNoY" + y,
                "attrNoText": "颜色",
                "attrValueNo": "attrValueNoY" + y,
                "attrValueNoText": attrValueNoTextY[y],
                "type": y % 2 + 1,
                "diyAttrName": "diyAttrNameY" + y,
                "diyAttrValue": attrValueNoTextY[y],
            };
            let childY = [];
            for (let z = 0; z < 3; z++) {
                let objZ = {
                    "skuNo": objY.skuNo + "Z" + z,
                    "parentSkuNo": y,
                    "attrNo": "attrNoZ" + z,
                    "attrNoText": "尺寸",
                    "attrValueNo": "attrValueNoZ" + z,
                    "attrValueNoText": attrValueNoTextZ[z],
                    "type": y % 2 + 1,
                    "diyAttrName": "diyAttrNameZ" + z,
                    "diyAttrValue": attrValueNoTextZ[z],
                    "price": 300 * z,
                    "stockType": z % 2 + 1,
                    "stock": Math.floor(500 * Math.random()),
                };
                childY.push(objZ);
            }
            objY.child = childY;
            this.selectOptions2.push(objY);
        }
    }

    function get3LevelData() {
        this.selectOptions3 = [];
        let attrValueNoTextX = ["10kg", "20kg"];
        let attrValueNoTextY = ["红色", "蓝色", "紫色"];
        let attrValueNoTextZ = ["S", "M", "L"];
        //三级数据
        for (let x = 0; x < 2; x++) {
            let objX = {
                "skuNo": "X" + x,
                "parentSkuNo": "0",
                "attrNo": "attrNoX" + x,
                "attrNoText": "重量",
                "attrValueNo": "attrValueNoX" + x,
                "attrValueNoText": attrValueNoTextX[x],
                "type": x % 2 + 1,
                "diyAttrName": "diyAttrNameX" + x,
                "diyAttrValue": attrValueNoTextX[x],
            };
            let childX = [];
            for (let y = 0; y < 3; y++) {
                let objY = {
                    "skuNo": objX.skuNo + "Y" + y,
                    "parentSkuNo": x,
                    "attrNo": "attrNoY" + y,
                    "attrNoText": "颜色",
                    "attrValueNo": "attrValueNoY" + y,
                    "attrValueNoText": attrValueNoTextY[y],
                    "type": x % 2 + 1,
                    "diyAttrName": "diyAttrNameY" + y,
                    "diyAttrValue": attrValueNoTextY[y],
                };
                let childY = [];
                for (let z = 0; z < 3; z++) {
                    let objZ = {
                        "skuNo": objY.skuNo + "Z" + z,
                        "parentSkuNo": y,
                        "attrNo": "attrNoZ" + z,
                        "attrNoText": "尺寸",
                        "attrValueNo": "attrValueNoZ" + z,
                        "attrValueNoText": attrValueNoTextZ[z],
                        "type": x % 2 + 1,
                        "diyAttrName": "diyAttrNameZ" + z,
                        "diyAttrValue": attrValueNoTextZ[z],
                        "price": 300 * z,
                        "stockType": z % 2 + 1,
                        "stock": Math.floor(500 * Math.random()),
                    };
                    childY.push(objZ);
                }
                objY.child = childY;
                childX.push(objY);
            }
            objX.child = childX;
            this.selectOptions3.push(objX);
        }
    }

    function handleClick(num) {
        console.log("skuList" + num, this["skuList" + num]);
        this["skuList" + num].forEach(item => {
            console.log("skuNo", item.skuNo);
            console.log("count", item.count);
        });
        this.addCartFlag+=1;
    }
</script>

<style rel="stylesheet/scss" lang="scss">

</style>