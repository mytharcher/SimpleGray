Jekyll主题: SimpleGray
======

这是一个由[造轮子工程师][]设计的jekyll站点主题，中文名称：**极简灰**。

利用这个模板可以帮助你在GitHub上快速的搭建一个极简风格的博客站点。

![SimpleGray](http://mbed.qiniudn.com/yanjunyi.com/img/works/SimpleGray.jpg)

## 如何使用 ##

### 开始之前 ###

首先请确保你已经了解[GitHub Pages](http://pages.github.com/)和[jekyll](github.com/mojombo/jekyll)是如何使用的（推荐阅读：[Publishing a Blog with GitHub Pages and Jekyll](http://blog.envylabs.com/2009/08/publishing-a-blog-with-github-pages-and-jekyll/)和[Jekyll-Bootstrap](http://jekyllbootstrap.com/)，扩展了解：[Octopress](http://octopress.org/)）。

### 获得源代码 ###

直接clone这个仓库到本地：

	$ git clone --recursive git://github.com/mytharcher/SimpleGray.git your-repo-name

**注意！**

除非你想改进这个主题，否则请不要fork此项目作为你博客的起点，因为fork后你的所有提交和推送都会在整个network图中显示出来。

所以更推荐你使用clone的方式创建自己的站点，以免给所有使用此主题的人造成干扰。

### 修改站点信息 ###

要将这个主题修改为自己的站点，有更多的工作要做。一部分变量可以直接在`_config.yml`里配置。这里列了一个清单，可以按此步骤进行修改。

0.	**站点名称**
	
	修改`_config.yml`文件中的变量：`name`为站点名称，`host`为站点域名。

0.	**博客的分类**
	
	作者在jekyll的使用过程中一直未找到方便管理分类列表的方式，所以在这个主题里使用了两组变量和文件夹配置来管理博客文章的分类。鉴于一般分类不会太多，暂时使用手动处理也不会太麻烦。

	首先修改`_config.yml`文件中的`custom.category`（Map）和`custom.categories`（List）两组变量，务必互相对应。

	然后参照`category/default`目录对应之前的变量设置更多分类索引文件夹，并修改其中的`index.html`，用对应分类的变量名替换之前的。

	完成之后就可以在文章中使用你自己定义的分类了。

0.	**作者信息**
	
	你应该看到`_config.yml`中有一部分`meta`变量的内容都是作者相关的信息，恩，就是这了，修改里面`author`信息块就可以了。

	其中[Gravatar][]头像标识需要使用你自己的gravatar注册的邮箱MD5值替换，就可以在页面上显示自己的头像了。

	PS: 页面右侧作者信息块中有个隐藏的作者邮件地址，为了防止被爬虫抓取，我把邮件地址写在了`assets/css/site.css`里，打开看看，你能找到！

0.	**[Disqus][]云评论代码**
	
	`_config.yml`的`author`配置部分也有`disqus`一项，配置为你创建的站点短名称标识串即可。之后每一篇日志后就会显示评论列表了，但这个功能只有在真实线上域名的时候才会生效。

0.	**站内搜索**

	如果你需要站内搜索功能，那么最好的办法就是申请[Google Custom Search][](CSE)服务。

	主题中已经配置了作者站点的站内搜索为默认引擎，具体设置也在`_config.yml`中的`author`部分，`gcse`字段。将其中引擎用户ID字符串改为你自己的即可。

0.	安装[Google Analytics][]或其他站点统计代码
	
	主题作者对访问量不是很敏感，所以没有安装统计代码。如果需要安装，可以在`_layout/page.tpl`文件中加入统计代码，之后每个生成的页面就都可以被统计到了。

0.	**修改CNAME**

	按照jekyll官方的说明，使用你自己的域名替换`CNAME`文件中的内容，如果有多个别名，每行一个。

### 基于Reveal.js的PPT模板 ###

SimpleGray默认引入了[Reveal.js](http://lab.hakim.se/reveal-js/)作为演示页面的展示引擎。在任意一篇博客中把`layout`变量设置为`presentation`（即使用演示模板）就可以将文章页转化为一个PPT浏览。具体语法请参照Reveal.js主页中的说明。

### JavaScript相关扩展功能 ###

这个主题使用了作者[造轮子工程师][]开发的[elf+js][]，这是一个和jQuery一样简单的JS基础库，详细的请点击链接进入官网了解。

全站相关的JS都在`assets/js/site.js`一个文件里，不大，提供了几个功能：

*	代码高亮初始化
	
*	Disqus评论初始化
	
*	站内搜索初始化
	
*	滚动页面时自动延迟加载对应在显示区域内的文章
	
	在`_config.yml`的`custom`中新增一个配置项`scrollingLoadCount`，用于配置滚屏时自动加载的文章数量，“0”为不在滚屏时加载。

其他自己摸索吧，代码就那么点，都很简单的，哥实在懒得写了。

## 基于此主题的站点

如果你也使用了这个主题，可以项目[wiki](https://github.com/mytharcher/SimpleGray/wiki)里添加你的站点链接。

[Disqus]: http://www.disqus.com/
[elf+js]: http://elfjs.com/
[Google Analytics]: http://www.google.com/analytics/
[Google Custom Search]: http://www.google.com/cse/
[Gravatar]: http://gravatar.com/
[造轮子工程师]: https://github.com/mytharcher

