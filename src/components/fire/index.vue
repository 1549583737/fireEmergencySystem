<template>
  <div class="fireEmergencySystem">
    <div class="header">
      <Header class="headerComp" :productConfig="productConfig" />
    </div>
    <div class="content">
      <Left class="left" :productConfig="productConfig" />
      <Right class="right" :productConfig="productConfig" />
      <Footer class="footer" :productConfig="productConfig" />
      <div class="markIcon">
        <div class="gasIcon1 icon"></div>
        <div class="gasIcon2 icon"></div>
        <div
          class="fireIcon1 icon"
          @click="dialogVisible = !dialogVisible"
        ></div>
        <div class="fireIcon2 icon"></div>
        <div class="dialog" v-show="dialogVisible">
          <div class="dialog-content">
            <div class="title">MDI装置</div>
            <div class="accidentDesc">
              <div class="label">事故描述:</div>
              <div class="value">气体泄漏</div>
            </div>
            <div class="accidentType">
              <div class="label">事故类型:</div>
              <div class="value">气体</div>
            </div>
            <div class="accidentTime">
              <div class="label">事故发生时间:</div>
              <div class="value">2023-08-07 17:13:11</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import productConfig from "../../../public/productConfig.js";
import productConfig from "productConfig";
import Header from "./components/header.vue";
import Left from "./components/left.vue";
import Right from "./components/right.vue";
import Footer from "./components/footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Left,
    Right,
    Footer,
  },
  data() {
    return {
      productConfig,
      dialogVisible: false,
    };
  },
  mounted() {
    console.log(productConfig);
  },
};
</script>

<style lang="scss">
// @import "./index.scss";
// @import "./assets/font/iconfont.css";
.fireEmergencySystem {
  //   min-width: 1200px;
  //   background: #1a1a1a;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: url("./assets/earthBcg.png") no-repeat 0px 80px;
  .header {
    .headerComp {
      height: 80px;
    }
  }
  .content {
    flex: 1;
    position: relative;
    .left {
      position: absolute;
      left: 20px;
      width: 23%;
      min-width: 450px;
      height: calc(100% - 56px);
      padding: 16px 0;
    }
    .right {
      position: absolute;
      right: 20px;
      width: 23%;
      min-width: 450px;
      height: calc(100% - 56px);
      padding: 16px 0;
    }
    .footer {
      position: absolute;
      bottom: 1px;
      left: 50%;
      transform: translateX(-50%);
    }
    .markIcon {
      .icon {
        position: absolute;
        width: 50px;
        height: 50px;
      }
      .gasIcon1 {
        top: 30%;
        left: 30%;
        background: url("./assets/gasIcon.png");
      }
      .gasIcon2 {
        top: 50%;
        left: 40%;
        background: url("./assets/gasIcon.png");
      }
      .fireIcon1 {
        top: 40%;
        left: 50%;
        background: url("./assets/fireIcon.png");
        z-index: 2;
      }
      .fireIcon2 {
        top: 60%;
        left: 60%;
        background: url("./assets/fireIcon.png");
      }
      .dialog {
        position: absolute;
        width: 460px;
        height: 250px;
        top: calc(40% - 180px);
        left: 42.8%;
        background: url("./assets/dialog.png") no-repeat;
        background-size: 70%;
        .dialog-content {
          padding: 30px;
          line-height: 30px;
          .title {
            font-size: 16px;
            font-weight: 700;
            color: #00f4fd;
          }
          .accidentDesc {
            display: flex;
            .label {
              color: #ffffff;
            }
            .value {
              color: #fd9b27;
              margin-left: 10px;
            }
          }
          .accidentType {
            display: flex;
            .label {
              color: #ffffff;
            }
            .value {
              color: #fd9b27;
              margin-left: 10px;
            }
          }
          .accidentTime {
            display: flex;
            .label {
              color: #ffffff;
            }
            .value {
              color: #fd9b27;
              margin-left: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
