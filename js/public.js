$(function(){$box=$("#box"),$box.find(".close").click(function(){$box.removeClass("show")}),$box.find(".add-specification").click(function(){var i=$(this).prev().clone();i.find("input").val(""),i.find("select > option").first().prop("selected"),i.insertBefore($(this))}),$("._ic").imgLiquid({verticalAlign:"center"}),$(".forbox").click(function(){$box.addClass("show")})});