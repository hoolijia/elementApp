<template>
  <div class="addAddress">
    <ele-header :page="page"/>
    <!--    添加地址    -->
    <div class="viewbody">
      <div class="content">
        <form-block label="联系人"
                    placeholder="姓名"
                    :tags="sexes"
                    :sex="addressInfo.sex"
                    v-model="addressInfo.name"
                    @checkSex="handleCheckSex"/>
        <form-block label="电话"
                    placeholder="手机号码"
                    v-model="addressInfo.phone"/>
        <form-block label="地址"
                    placeholder="小区/写字楼/学校"
                    icon="angle-right"
                    v-model="addressInfo.address"
                    @click="handleSearchAddress"/>
        <form-block label="门牌号"
                    placeholder="4号楼一单元502"
                    icon="edit"
                    textarea="textarea"
                    v-model="addressInfo.bottom"/>
        <div class="formblock">
          <div class="label-wrap">标签</div>
          <tab-tag :tags="tags"
                   :selectTag="addressInfo.tag"
                   @checkTag="handleCheckTag"/>
        </div>
      </div>
      <div class="form-button-wrap">
        <button class="form-button" @click="handleSave">确定</button>
      </div>
    </div>

    <!--    搜索地址    -->
    <address-search :isShow="searchFlag" @close="handleClose" :addressInfo="addressInfo"/>
  </div>
</template>

<script src="./addAddress.js"></script>

<style scoped>
.addAddress {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 45px;
}

.viewbody {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  background-color: #f5f5f5;
}

.content {
  padding-left: 4vw;
  background: #fff;
  font-size: 0.94rem;
}

.formblock {
  background-color: #fff;
  border-bottom: 1px solid #eee;
  display: flex;
}

.formblock .label-wrap {
  flex-basis: 17.333333vw;
  padding: 3.733333vw 0;
  line-height: 4.8vw;
  color: #333;
  font-weight: 700;
}

/* 确定按钮 */
.form-button-wrap {
  padding: 5.333333vw 4vw;
  display: flex;
}

.form-button-wrap .form-button {
  background: #00d762;
  text-align: center;
  border-radius: 0.533333vw;
  flex: 1;
  font-size: 1.1rem;
  line-height: 5.066667vw;
  color: #fff;
  padding: 3.333333vw 0;
  border: none;
  font-weight: 500;
}
</style>
