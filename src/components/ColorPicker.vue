<template>
  <div class="picker-main"> 
    <h4 class="header">Select event theme</h4>
    <div class="color-picker">
      <div class="color" v-for="(theme, index) in colors" :key="index" @click="selectColor(theme)" :class="{selected: color === theme, [theme]: theme}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorPicker',
  props: ['color'],
  data(){
    return {
      colors: ['red', 'green', 'blue', 'orange']
    }
  },
  methods: {
    selectColor(color){
      this.$emit('colorPicked', color);
    }
  }
}
</script>

<style scoped>
.picker-main {
  width: 55%;
}
.header {
  font-size: 14px;
  text-transform: uppercase;
  color: orangered;
  letter-spacing: 0.5px;
  margin: 0 0 6px;
  text-align: left;
}
.color-picker {
  display: flex;
  justify-content: space-around;
}
.color-picker > .color {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1.5px solid whitesmoke;
  cursor: pointer;
}
.color.selected{
  box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.2);
  border: 3px solid rgba(0, 0, 0, 0.4);
}
.color.red {
  background: rgb(235, 77, 77);
}
.color.blue {
  background: rgb(59, 59, 163);
}
.color.orange {
  background: orange;
}
.color.green {
  background: rgb(49, 155, 49);
}
</style>
