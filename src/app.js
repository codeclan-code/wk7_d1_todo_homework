import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: [
        "Buy shopping", "Clean bathroom", "Car's MOT"
      ],
      newItem: ""
    },
    methods: {
      saveNewItem: function(){ //NEW
        this.items.push(this.newItem);
        this.newItem = "";
      }
    }
  });
});
