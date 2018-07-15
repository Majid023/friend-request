

    el : '#app',

        },
    data :  {
                message : "Hello world",
                datastorage : [],
                isActive :false
            },

	methods : {

                buttonClicked: function(event){
                        axios.post('/friendlist', { data: this.data }).then( function( response ) {
                                console.log(response);
                                this.datastorage=response.data;
                        }).catch(  function(error) {
                             // Wu oh! Something went wrong
                            console.log(error.message);
                        });
                    }   
                },

});
