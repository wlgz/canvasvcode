<template>
    <div class="box">
      <input type="text" v-model="myCode" />
      <rl-canvas-code
        class="canvas"
        :codeLength="codeLength"
        :fontStyle="fontStyle"
        :fontX="fontX"
        :fontY="fontY"
        :ingoreCase="ingoreCase"
        @codeChange="codeChange"
      ></rl-canvas-code>
      <br />
      <button @click="submitData">提交</button>
    </div>
  </template>
  
  <script>
  import RlCanvasCode from "../components/RlCanvasCode/index.js";
  export default {
    components: { RlCanvasCode },
    data() {
      //这里存放数据
      return {
        fontStyle: "bold 20px 微软雅黑",
        codeLength: 4,
        fontX: 10,
        fontY: 20,
        ingoreCase: true,
        code: "",
        myCode: ""
      };
    },
    //方法集合
    methods: {
      submitData() {
        console.log("this.myCode :>> ", this.myCode);
        console.log("this.code :>> ", this.code);
      },
      codeChange(code) {
        console.log("code :>> ", code);
        this.code = code;
      }
    }
  };
  </script>
  <style lang="less" scoped>
  .box {
    width: 300px;
    height: 600px;
    background-color: #aabbcc;
    margin: 0 auto;
    padding: 30px 0;
    input {
      height: 50px;
      line-height: 50px;
      outline: none;
      border: none;
      margin: 0;
      padding: 0;
    }
    .canvas {
      height: 50px;
      width: 120px;
      border: 1px solid red;
      line-height: 50px;
      background-color: #eeeeee;
    }
    button {
      height: 40px;
      width: 100px;
      margin: 20px;
      box-sizing: border-box;
      float: right;
    }
  }
  </style>