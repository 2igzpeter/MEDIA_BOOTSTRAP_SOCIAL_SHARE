
$(function(){
$('#demo1').sharrre({
share: {
googlePlus: true,
facebook: true,
'<a href="https://www.jqueryscript.net/tags.php?/twitter/">twitter</a>: true',
delicious: true
},
buttons: {
googlePlus: {size: 'tall'},
facebook: {layout: 'box_count'},
twitter: {count: 'vertical'},
delicious: {size: 'tall'}
},
hover: function(api, options){
$(api.element).find('.buttons').show();
},
hide: function(api, options){
$(api.element).find('.buttons').hide();
}
});
});
