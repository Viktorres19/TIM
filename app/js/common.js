// script for unslider
		jQuery(document).ready(function($) {
			$('.my-slider').unslider({
				autoplay:true,
				arrows:true,
				nav:false
			});
// script to change color of the table head
			$('.subscription .container .column table tbody tr td.data-gray a.left').hover(
			    function(){
			        $('.subscription .container .column table tbody tr th.left').css('background-color','#49cbcd');
			    },
			    function(){
			        $('.subscription .container .column table tbody tr th.left').css('background-color','#485460');
			    }
			);	

			$('.subscription .container .column table tbody tr td.data-gray a.center').hover(
			    function(){
			        $('.subscription .container .column table tbody tr th.center').css('background-color','#49cbcd');
			    },
			    function(){
			        $('.subscription .container .column table tbody tr th.center').css('background-color','#485460');
			    }
			);	

			$('.subscription .container .column table tbody tr td.data-gray a.right').hover(
			    function(){
			        $('.subscription .container .column table tbody tr th.right').css('background-color','#49cbcd');
			    },
			    function(){
			        $('.subscription .container .column table tbody tr th.right').css('background-color','#485460');
			    }
			);
	});
