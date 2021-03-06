$(function(){
  // 預設顯示第一個頁籤
  // 並先把 .tabs, .tabs li 及 .tab_content, .tab_content li 等元素取出
  // 同時也要取得 .tab_content 的寬
  var _default = 0, 
   $block = $('#abgne-block-20120327'), 
   $tabs = $block.find('.tabs'), 
   $tabsLi = $tabs.find('li'), 
   $tab_content = $block.find('.tab_content'), 
   $tab_contentLi = $tab_content.find('li'), 
   _width = $tab_content.width();
  
  // 當滑鼠移到 .tabs li 上時要套用 .hover 樣式
  // 移出時要移除 .hover 樣式
  $tabsLi.hover(function(){
   var $this = $(this);

   // 若被滑鼠移上去的 li 是目前顯示的頁籤就不做任何動作
   if($this.hasClass('active')) return;

   $this.toggleClass('hover');
  }).click(function(){ // 當滑鼠點擊 .tabs li 時
   // 先取出被點擊及目前顯示的頁籤與索引
   var $active = $tabsLi.filter('.active').removeClass('active'), 
    _activeIndex = $active.index(),  
    $this = $(this).addClass('active').removeClass('hover'), 
    _index = $this.index(), 
    isNext = _index > _activeIndex;
   
   // 如果被點擊的頁籤就是目前已顯示的頁籤, 則不做任何動作
   if(_activeIndex == _index) return;
   
   // 依索引大或小來決定移動的位置
   $tab_contentLi.eq(_activeIndex).stop().animate({
    left: isNext ? -_width : _width
   }).end().eq(_index).css('left', isNext ? _width : -_width).stop().animate({
    left: 0
   });
  });
  
  // 先把預設要顯示的頁籤加上 .active 樣式及顯示相對應的內容
  $tabsLi.eq(_default).addClass('active');
  $tab_contentLi.eq(_default).siblings().css({
   left: _width
  });
 });
 
 $(function() {
	$('textarea[max-rows]').each(function () {
		var textarea = $(this);

		var minRows = Number(textarea.attr('rows'));
		var maxRows = Number(textarea.attr('max-rows'));

		// clone the textarea and hide it offscreen
		// TODO: copy all the styles
		var textareaClone = $('<textarea/>', {
			rows: minRows,
			maxRows: maxRows,
			class: textarea.attr('class')
		}).css({
			position: 'absolute',
			left: -$(document).width() * 2
		}).insertAfter(textarea);

		var textareaCloneNode = textareaClone.get(0);

		textarea.on('input', function () {
			// copy the input from the real textarea
			textareaClone.val(textarea.val());

			// set as small as possible to get the real scroll height
			textareaClone.attr('rows', 1);

			// save the real scroll height
			var scrollHeight = textareaCloneNode.scrollHeight;

			// increase the number of rows until the content fits
			for (var rows = minRows; rows < maxRows; rows++) {
				textareaClone.attr('rows', rows);

				if (textareaClone.height() > scrollHeight) {
					break;
				}
			}

			// copy the rows value back to the real textarea
			textarea.attr('rows', textareaClone.attr('rows'));
		}).trigger('input');
	});
});