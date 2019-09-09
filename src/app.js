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
      newItem: ""
    },
    methods: {
      saveNewItem: function(){
        this.items.push({ //MODIFIED
          name: this.newItem,
          priority: false
        });
        this.newItem = "";
      }
    }
  });
});
