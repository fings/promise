


$.ajax({
	url:'/user.action',
	method:'get',
	success:function(arr){
		// console.log('success');
		// console.log(data);
		var liStr = arr.map(function(ele){
			return '<li>'+ele+'</li>'
		}).join('');
		$('#root').html(data);
	},
	error:function(error){
		console.log(error);
	}
})