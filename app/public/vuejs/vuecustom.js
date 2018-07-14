
new Vue({

	el:'#app',
    
    data :{

        message : 'hello world',
        data:function(){
        
            axios.post('/friendlist', { data: this.data })
                .then(function (response) {
                    console.log(response);
                    // this.fromServer=response.data;
                    // fromServer=response.data;
                    // this.fromServer=response.data;
                    return response.data;
    
                })
                .catch(function (error) {
                    // Wu oh! Something went wrong
                    console.log(error.message);
                    return false;
                });
        },
        
    
    },
	methods: {
    buttonClicked: function(){
        
        axios.post('/friendlist', { data: this.data })
            .then(function (response) {
                console.log(response);
                // this.fromServer=response.data;
                // fromServer=response.data;
                // this.fromServer=response.data;

            })
            .catch(function (error) {
                // Wu oh! Something went wrong
                console.log(error.message);
            });
    }
}

})
