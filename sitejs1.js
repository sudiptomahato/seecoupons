jQuery(".coupon-code").each(function(index, element) {
	if(jQuery(this).attr("data-clipboard-text")!=""){jQuery(this).text("View Coupon Code");}
		/*var clip = new ZeroClipboard( jQuery(this), {
			moviePath: "http://dl.dropboxusercontent.com/u/36791582/ZeroClipboard.swf"
		});
		
		clip.on( 'load', function(client) {
		  
		});
		
		clip.on( 'complete', function(client, args) {
		  //this.style.display = "none"; // "this" is the element that was clicked
		  if(jQuery(this).attr("data-clipboard-text")!=""){
		  	jQuery(this).text(jQuery(this).attr("data-clipboard-text"));
		  	jQuery("#cmcode").text(jQuery(this).attr("data-clipboard-text"));
		  }
		  else
		  {
		  	jQuery("#cmcode").text("No Coupon Code Required");
		  }
		  if(jQuery(this).attr("aff-url")!=""){
		  	jQuery("#cmstore").attr("href",jQuery(this).attr("aff-url"));
		  	window.open(jQuery(this).attr("aff-url"));
		  }
		  else
		  {
		  	jQuery("#cmstore").attr("href","#");
		  }
		  jQuery(this).next().remove();
		  viewCouponInfo();
		});
		clip.on( 'mouseover', function(client) {
			jQuery(this).after("<div class='pop-info'> "+jQuery(this).attr("pop-info")+"</div>")
		});
		clip.on( 'mouseout', function(client) {
			jQuery(this).next().remove();
		});*/
		
});	
jQuery(".coupon-code").click(function() {
 if(jQuery(this).attr("data-clipboard-text")!=""){jQuery(this).text(jQuery(this).attr("data-clipboard-text"));}
 if(jQuery(this).attr("data-clipboard-text")!=""){
  	jQuery(this).text(jQuery(this).attr("data-clipboard-text"));
  	jQuery("#cmcode").text(jQuery(this).attr("data-clipboard-text"));
  }
  else
  {
  	jQuery("#cmcode").text("No Coupon Code Required");
  }
  jQuery(this).next().remove();
  viewCouponInfo();
});
jQuery(".storelogo").click(function() {
 if(jQuery(this).attr("aff-url")!=""){window.location.href = jQuery(this).attr("aff-url");}
});
function viewCouponInfo()
{
jQuery('#couponinfo').pgwModal({
		content: 'Modal Example 1'
	});
}