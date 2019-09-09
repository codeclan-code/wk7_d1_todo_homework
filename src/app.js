import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: [
        {name: "Buy shopping", priority: false},
        {name: "Clean bathroom", priority: true},
        {name: "Car's MOT", priority: false},
      ],
      newItem: "",
      priority: ""
    },
    methods: {
      saveNewItem: function(){
        this.items.push({
          name: this.newItem,
          priority: this.priority
        });
        this.newItem = "";
      }
    }
  });
});
