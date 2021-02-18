var cookieExpire;
var fbUrl;
var delaySec;
var popTitle;

jQuery.cookie = function (key, value, options) {
if (arguments.length > 1 && String(value) !== "[object Object]") {
options = jQuery.extend({}, options);

if (value === null || value === undefined) {
options.expires = -1;
}

if (typeof options.expires === 'number') {
var days = options.expires, t = options.expires = new Date();
t.setDate(t.getDate() + days);
}

value = String(value);

return (document.cookie = [
encodeURIComponent(key), '=',
options.raw ? value : encodeURIComponent(value),
options.expires ? '; expires=' + options.expires.toUTCString() : '', 
options.path ? '; path=' + options.path : '',
options.domain ? '; domain=' + options.domain : '',
options.secure ? '; secure' : ''
].join(''));
}
options = value || {};
var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};

function addPopup()
{
	jQuery('<div id="popbg"></div>').appendTo('body').append('<div id="popupclx"></div><div id="popupbx"><div id="popupcx"></div><p style="padding: 0px 10px;"><b>'+popTitle+'</b></p><iframe src="//www.facebook.com/plugins/likebox.php?href='+fbUrl+'&amp;width&amp;height=258&amp;colorscheme=light&amp;show_faces=true&amp;header=false&amp;stream=false&amp;show_border=false&amp;appId=177971172285866" scrolling="no" frameborder="0" style="border:none; overflow:hidden; height:258px;" allowTransparency="true"></iframe></div>');
if(jQuery.cookie('popup_user_login') != 'yes' ||cookieExpire==0){
jQuery('#popbg').delay(delaySec).fadeIn('medium');
jQuery('#popupcx, #popupclx').click(function(){
jQuery('#popbg').stop().fadeOut('medium');
});
}
jQuery.cookie('popup_user_login', 'yes', { path: '/', expires: cookieExpire });
}
