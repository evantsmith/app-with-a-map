var mainVm = new Vue({

    el: '#app',
    data: {
        // This array will hold the 'marks' so we can use v-for in the html doc
        markersArr: []

    },
    methods: {
        // Method to place an 'X' whenever the image (map) is clicked on
        mark: function(event){

            // Making a new object for each 'marker' on the map 
            var marker1 ={};
            // Setting coordinates for the image
            marker1.x = event.offsetX;
            marker1.y = event.offsetY;
            // This property is used to toggle the display
            marker1.isShown = true;
            // id "addedMark" is where the image and styling come from
            // using v-html in the html doc, add a div element including setting the position properties to the coordinates
            marker1.htmlAdded = `<div id="addedMark" style="left: ${marker1.x}px;top:${marker1.y}px"></div>`;
            // Adding the 'marker' into the array using v-for in html doc
            this.markersArr.push(marker1);

        },

        // This method will toggle 'isShown' property on 'mark' objects
        hideMarker: function(marker1, event){
            marker1.isShown = !(marker1.isShown);

        }

    }

});
