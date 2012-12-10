///import js.dom.INodeEvent;
///import elf.~shortcut.~dispatcher.string;
///import elf.~shortcut.~dispatcher.function;
///import elf.~shortcut.loadScript;
///import elf.~shortcut.template;
///import elf.~shortcut.ajax;
///import elf.~namespace.URL;

var site = {
	InitMap: {
		list: function () {
			elf(window).on('scroll', site.Handlers.scrolling);
		},
		
		post: function () {
			var disqusUrl = site.URL_DISCUS_COMMENT;
			disqusUrl && elf().loadScript(disqusUrl, {});
		},
		
		search: function () {
			site.URL_GOOGLE_API &&
			site.VAR_GOOGLE_CUSTOM_SEARCH_ID &&
			elf().loadScript(site.URL_GOOGLE_API, {
				onload: site.Handlers.onGCSEAPILoad
			});
		}
	},
	
	Handlers: {
		deferLoad: function () {
			elf('article').toArray()
				.filter(site.Util.isViewable)
				.filter(function (item) {
					return item.getAttribute('content-loaded') != 1;
				}).slice(0, 2).forEach(site.Handlers.loadArticle);
			
		},
		
		loadArticle: function (item) {
			elf().ajax({
				url: elf(item).firstChild().firstChild().attr('href'),
				onsuccess: function (response) {
					site.Handlers.showAjaxContent(item, response);
				}
			});
		},
		
		showAjaxContent: function (node, response) {
			var article = elf(node);
			var content = response.split('<p class="meta">')[1].split('</p>');
			content.shift();
			content = content.join('</p>');
			content = content.split(/<\/article>/)[0];
			article.query('>.article-content').html(content);
			article.attr('content-loaded', 1);
			article.query('pre').forEach(function (item) {
				hljs.highlightBlock(item);
			});
		},
		
		scrolling: function () {
			var timer = site.scrollingTimer;
			if (timer) {
				clearTimeout(timer);
			}
			site.scrollingTimer = setTimeout(site.Handlers.deferLoad, 1000);
		},
		
		onGCSEAPILoad: function () {
			google.load('search', '1', {
				language: 'zh-CN',
				style: google.loader.themes.V2_DEFAULT,
				callback: site.Handlers.onGCSEReady
			});
		},
		
		onGCSEReady: function() {
			var customSearchControl = new google.search.CustomSearchControl(site.VAR_GOOGLE_CUSTOM_SEARCH_ID, {});
			customSearchControl.setResultSetSize(google.search.Search.FILTERED_CSE_RESULTSET);
			
			var options = new google.search.DrawOptions();
			options.setAutoComplete(true);
			customSearchControl.draw('cse', options);
			
			var url = new elf.URL(location);
			var query = url.getParameter('q');
			if (query) {
				query = decodeURIComponent(query);
				document.title = elf().template(
					site.TPL_SEARCH_TITLE,
					site.VAR_SITE_NAME,
					query
				);
				customSearchControl.execute(query);
			}
		}
	},
	
	Util: {
		
		isViewable: function (element) {
			var pos = element.getBoundingClientRect();
			var doc = js.dom.Stage.getDocumentElement();
			var winHeight = doc.clientHeight;
			var winWidth = doc.clientWidth;
			var scrollLeft = document.body.scrollLeft || doc.scrollLeft;
			var scrollTop = document.body.scrollTop || doc.scrollTop;
			
			return (pos.right > 0 &&
				pos.left < winWidth &&
				pos.bottom > 0 &&
				pos.top < winHeight);
		}
	}
};


elf(function () {
	hljs.initHighlighting();
	
	var module = document.body.className.replace(/page-type-/g, '').split(' ');
	module.forEach(function (item) {
		var initer = site.InitMap[item];
		initer && elf(initer);
	});
});
