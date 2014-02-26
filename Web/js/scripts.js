function randomItem () {
	var items = [
		"לחם", "חלב", "שמנת", "ביצים", "קפה", "ביסקוויטים", "מים", "בשר טחון"
	];
	return items[(Math.round(Math.random() * (items.length - 1)))];
	
};

function deleteParent (target) {
	target.parentNode.parentNode.removeChild(target.parentNode);
	//document.getElementById("stuff").removeChild(this.parentNode);
};

function inputListener (event) {
	if (event.keyCode === 13) {
		additem();
	}
};

function additem()
{
	var li=document.createElement("li");
	li.innerHTML='<label><input type="checkbox" /><span class="status"></span>	</label><span class="delete" onclick="deleteParent(this)"></span><p><input type="text" placeholder="דוגמא: ' + randomItem() + '"/></p><div class="clear"></div>';
	var stuff=document.getElementById("stuff");
	
	stuff.appendChild(li);
	var input = li.querySelector('input[type="text"]');
	input.addEventListener("keyup", inputListener);
	input.focus();
};

[].forEach.call(document.querySelectorAll('input[type="text"]'), function (item) {
	item.addEventListener("keyup", inputListener);
});