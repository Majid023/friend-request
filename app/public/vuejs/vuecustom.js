
var data1 = new Vue({

    el : '#app',

	methods : {
                buttonClicked: function() {

                    var datahandle = document.getElementById("app");
                    var str="";
                    var str1="<div class='carousel' data-flickity='group-cell'>";
                 axios.post('/friendlist', { data: this.datastorage }).then(function(response){
                         for ( var i=0;i<response.data.length;i++){
                             str+="<div class='carousel-cell'>"+
                               "<h1>" + response.data[i].Id + "</h1>" +
                               "<h6>" + response.data[i].Name + "</h6>" +
                               "<h6>" + response.data[i].City + "</h6>" +
                               "<h6>" + response.data[i].Birth + "</h6>" +
                             "</div>"
                         }
                         datahandle.innerHTML = str1 +str+"</div>";
                        console.log(response.data);

                    }).catch(  function(error) {
                        console.log(error.message);  
                    });
                    
                }
            }

});

