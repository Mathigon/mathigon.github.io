/* (c) 2014, Mathigon */

M.onload(function(){var $sidebarTopicWrap,$sidebar=$C("sidebar-wrap"),$body=$I("body"),bodyTop=$body.$el.offsetTop-40,posn={};M.resize(function(){bodyTop=$body.$el.offsetTop-40,posn={}}),$I("api").find("h2, h3").each(function($el){var $sidebarEl,$topicWrap;$el.is("h2")?($sidebarEl=$N("div",{"class":"sidebar-h2",html:$el.html()},$sidebar),$sidebarTopicWrap=$topicWrap=$N("div",{style:"display: none"},$sidebar)):($sidebarEl=$N("div",{"class":"sidebar-h3",html:$el.html()},$sidebarTopicWrap),$topicWrap=$sidebarTopicWrap);var top=$el.$el.offsetTop;posn[top]=[$sidebarEl,$topicWrap],M.resize(function(){top=$el.$el.offsetTop,posn[top]=[$sidebarEl,$topicWrap]}),$sidebarEl.click(function(){M.$body.scrollTo(top-75,1e3)})});var $sidebarActive,$sidebarActiveBox,$sidebar=$C("sidebar"),getActive=function(s){for(var i in posn)if(i>s)return posn[i]};M.$body.scroll(function(){var scroll=M.$body.scrollTop();$sidebar.setClass("fixed",scroll>bodyTop);var active=getActive(scroll);active[0]!==$sidebarActive&&($sidebarActive&&$sidebarActive.removeClass("active"),$sidebarActive=active[0],$sidebarActive.addClass("active")),active[1]!==$sidebarActiveBox&&($sidebarActiveBox&&$sidebarActiveBox.hide(),$sidebarActiveBox=active[1],$sidebarActiveBox&&$sidebarActiveBox.show())}),M.$body.trigger("scroll")});