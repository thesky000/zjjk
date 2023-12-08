var rule = {
    title:'腾云驾雾',
    host:'https://v.%71%71.com',
    // homeUrl:'/channel/choice?listpage=1&channel=choice&sort=18&_all=1',
    homeUrl:'/x/bu/pagesheet/list?_all=1&append=1&channel=choice&listpage=1&offset=0&pagesize=21&iarea=-1&sort=18',
    detailUrl:'https://node.video.%71%71.com/x/api/float_vinfo2?cid=fyid',
    // searchUrl:'https://node.video.%71%71.com/x/api/msearch?keyWord=**',
    searchUrl:'/x/search/?q=**&stag=fypage',
    // searchUrl:'http://s.video.qq.com/smartbox?plat=2&ver=0&num=29&otype=json&query=**',
    searchable:2,
    filterable:1,
    multi:1,
    // url:'/channel/fyclass?listpage=fypage&channel=fyclass&sort=18&_all=1',
    url:'/x/bu/pagesheet/list?_all=1&append=1&channel=fyclass&listpage=1&offset=((fypage-1)*21)&pagesize=21&iarea=-1',
    filter_url:'ifeature={{fl.ifeature}}&itrailer={{fl.itrailer}}&itype={{fl.itype}}&characteristic={{fl.characteristic}}&area={{fl.area}}&iarea={{fl.iarea}}&year={{fl.year}}&iyear={{fl.iyear}}&sort={{fl.sort}}',
    filter:{
    'tv':[{'key':'ifeature','name':'类型','value':[{'n':'全部','v':'-1'},{'n':'爱情','v':'1'},{'n':'古装','v':'2'},{'n':'悬疑','v':'3'},{'n':'都市','v':'4'},{'n':'家庭','v':'5'},{'n':'喜剧','v':'6'},{'n':'传奇','v':'7'},{'n':'武侠','v':'8'},{'n':'军旅','v':'9'},{'n':'权谋','v':'10'},{'n':'革命','v':'11'},{'n':'现实','v':'13'},{'n':'青春','v':'14'},{'n':'猎奇','v':'15'},{'n':'科幻','v':'3=16'},{'n':'竞技','v':'17'},{'n':'玄幻','v':'18'}]},{'key':'iarea','name':'地区','value':[{'n':'全部','v':'-1'},{'n':'内地','v':'814'},{'n':'美国','v':'815'},{'n':'英国','v':'816'},{'n':'韩国','v':'818'},{'n':'泰国','v':'9'},{'n':'日本','v':'10'},{'n':'中国香港','v':'14'},{'n':'中国台湾','v':'817'},{'n':'英国','v':'819'}]},{'key':'iyear','name':'年代','value':[{'n':'全部','v':'-1'},{'n':'2023','v':'2023'},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'4061'},{'n':'2018','v':'2018'},{'n':'2017-2010','v':'2017'},{'n':'00年代','v':'2000'},{'n':'更早','v':'99'}]},{'key':'sort','name':'排序','value':[{'n':'最热','v':'75'},{'n':'最新','v':'79'},{'n':'好评','v':'16'}]}],'movie':[{'key':'itype','name':'类型','value':[{'n':'全部','v':'-1'},{'n':'剧情','v':'100018'},{'n':'喜剧','v':'100004'},{'n':'动作','v':'100061'},{'n':'爱情','v':'100005'},{'n':'惊悚','v':'100010'},{'n':'犯罪','v':'4'},{'n':'悬疑','v':'100009'},{'n':'战争','v':'100006'},{'n':'科幻','v':'100012'},{'n':'动画','v':'100015'},{'n':'恐怖','v':'100007'},{'n':'家庭','v':'100017'},{'n':'传记','v':'100022'},{'n':'冒险','v':'100003'},{'n':'奇幻','v':'3=100016'},{'n':'武侠','v':'100011'},{'n':'历史','v':'100021'},{'n':'运动','v':'2'},{'n':'歌舞','v':'100014'},{'n':'音乐','v':'100013'},{'n':'纪录','v':'100020'},{'n':'伦理','v':'100019'},{'n':'西部','v':'3'}]},{'key':'iarea','name':'地区','value':[{'n':'全部','v':'-1'},{'n':'内地','v':'100024'},{'n':'中国香港','v':'100025'},{'n':'中国台湾','v':'100026'},{'n':'美国','v':'100029'},{'n':'日本','v':'100027'},{'n':'韩国','v':'100028'},{'n':'泰国','v':'100031'},{'n':'印度','v':'100030'},{'n':'英国','v':'15'},{'n':'法国','v':'16'},{'n':'德国','v':'17'},{'n':'加拿大','v':'18'},{'n':'西班牙','v':'19'},{'n':'意大利','v':'20'},{'n':'澳大利亚','v':'21'},{'n':'其他','v':'100033'}]},{'key':'characteristic','name':'渠道','value':[{'n':'全部','v':'-1'},{'n':'院线电影','v':'1'},{'n':'网络电影','v':'2'},{'n':'独播','v':'5'},{'n':'原声','v':'8'},{'n':'粤语','v':'9'},{'n':'1080P','v':'3'},{'n':'奥斯卡','v':'6'}]},{'key':'year','name':'年代','value':[{'n':'全部','v':'-1'},{'n':'2023','v':'2023'},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'20'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'},{'n':'2016','v':'2016'},{'n':'2015','v':'100063'},{'n':'2014','v':'100034'},{'n':'2013-2011','v':'100035'},{'n':'2010-2006','v':'100036'},{'n':'2005-2000','v':'100037'},{'n':'90年代','v':'100038'},{'n':'80年代','v':'100039'},{'n':'其他','v':'100040'}]},{'key':'sort','name':'排序','value':[{'n':'最热','v':'75'},{'n':'最新','v':'10'},{'n':'好评','v':'81'}]}],'variety':[{'key':'itype','name':'类型','value':[{'n':'全部','v':'-1'},{'n':'游戏','v':'10'},{'n':'脱口秀','v':'2'},{'n':'音乐舞台','v':'11'},{'n':'情感','v':'12'},{'n':'生活','v':'22'},{'n':'职场','v':'20'},{'n':'喜剧','v':'14'},{'n':'美食','v':'19'},{'n':'潮流运动','v':'21'},{'n':'竞技','v':'24'},{'n':'影视','v':'16'},{'n':'电竞','v':'15'},{'n':'推理','v':'25'},{'n':'访谈','v':'3'},{'n':'亲子','v':'3=17'},{'n':'文化','v':'26'},{'n':'互动','v':'23'},{'n':'晚会','v':'6'},{'n':'资讯','v':'7'}]},{'key':'iyear','name':'年代','value':[{'n':'全部','v':'-1'},{'n':'2023','v':'2023'},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'50'},{'n':'2019','v':'7'},{'n':'2018','v':'1'},{'n':'2017','v':'2'},{'n':'2016','v':'3'},{'n':'2015','v':'4'},{'n':'2014','v':'5'},{'n':'2013','v':'6'},{'n':'2012','v':'2012'},{'n':'2011','v':'2011'},{'n':'2010','v':'2010'},{'n':'更早','v':'99'}]},{'key':'sort','name':'排序','value':[{'n':'最热','v':'75'},{'n':'最新','v':'23'}]}],'cartoon':[{'key':'itype','name':'类型','value':[{'n':'全部','v':'-1'},{'n':'冒险','v':'2'},{'n':'战斗','v':'5'},{'n':'搞笑','v':'1'},{'n':'经典','v':'3'},{'n':'科幻','v':'4'},{'n':'玄幻','v':'9'},{'n':'魔幻','v':'6'},{'n':'武侠','v':'13'},{'n':'恋爱','v':'7'},{'n':'推理','v':'14'},{'n':'腾讯出品','v':'11'},{'n':'日常','v':'15'},{'n':'校园','v':'16'},{'n':'悬疑','v':'17'},{'n':'真人','v':'18'},{'n':'历史','v':'19'},{'n':'竞技','v':'20'},{'n':'其他','v':'12'}]},{'key':'iarea','name':'地区','value':[{'n':'全部','v':'-1'},{'n':'内地','v':'1'},{'n':'日本','v':'2'},{'n':'欧美','v':'3'},{'n':'其他','v':'4'}]},{'key':'iyear','name':'年代','value':[{'n':'全部','v':'-1'},{'n':'2023','v':'2023'},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'50'},{'n':'2019','v':'11'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'},{'n':'2016','v':'1'},{'n':'2015','v':'2'},{'n':'2014','v':'3'},{'n':'2013','v':'4'},{'n':'2012','v':'5'},{'n':'2011','v':'6'},{'n':'00年代','v':'7'},{'n':'90年代','v':'8'},{'n':'80年代','v':'9'},{'n':'更早','v':'10'}]},{'key':'sort','name':'排序','value':[{'n':'最热','v':'75'},{'n':'最新','v':'23'}]}],'child':[{'key':'itype','name':'类型','value':[{'n':'全部','v':'-1'},{'n':'儿歌','v':'1'},{'n':'益智','v':'2'},{'n':'手工绘画','v':'3'},{'n':'玩具','v':'4'},{'n':'英语','v':'5'},{'n':'早教','v':'7'},{'n':'数学','v':'6'},{'n':'国学','v':'8'},{'n':'冒险','v':'10'},{'n':'交通工具','v':'11'},{'n':'魔幻科幻','v':'12'},{'n':'动物','v':'13'},{'n':'真人特摄','v':'14'},{'n':'探索','v':'15'},{'n':'其他','v':'16'}]},{'key':'iarea','name':'地区','value':[{'n':'全部','v':'-1'},{'n':'国内','v':'3'},{'n':'日韩','v':'2'},{'n':'欧美','v':'1'}]},{'key':'iyear','name':'年龄','value':[{'n':'全部','v':'-1'},{'n':'0-3岁','v':'1'},{'n':'4-6岁','v':'2'},{'n':'7-9岁','v':'3'},{'n':'10岁以上','v':'4'},{'n':'全年龄','v':'7'}]},{'key':'sort','name':'排序','value':[{'n':'最热','v':'75'},{'n':'最新','v':'19'},{'n':'好评','v':'20'}]}],'doco':[{'key':'itype','name':'类型','value':[{'n':'全部','v':'-1'},{'n':'自然','v':'4'},{'n':'美食','v':'9'},{'n':'社会','v':'3'},{'n':'人文','v':'5'},{'n':'历史','v':'1'},{'n':'军事','v':'2'},{'n':'科技','v':'7'},{'n':'财经','v':'13'},{'n':'探险','v':'15'},{'n':'罪案','v':'6'},{'n':'竞技','v':'11'},{'n':'旅游','v':'10'}]},{'key':'itrailer','name':'渠道','value':[{'n':'全部','v':'-1'},{'n':'BBC','v':'1'},{'n':'国家地理','v':'4'},{'n':'HBO','v':'3175'},{'n':'NHK','v':'2'},{'n':'历史频道','v':'7'},{'n':'ITV','v':'3530'},{'n':'探索频道','v':'3174'},{'n':'ZDF','v':'3176'},{'n':'腾讯自制','v':'15'},{'n':'合作机构','v':'6'},{'n':'其他','v':'5'}]},{'key':'sort','name':'排序','value':[{'n':'最热','v':'75'},{'n':'最新','v':'74'},{'n':'好评','v':'78'}]}]
          },
    headers:{
        'User-Agent':'PC_UA'
    },
    timeout:5000,
    // class_parse:'.site_channel a;a&&Text;a&&href;channel/(.*)',
    cate_exclude:'会员|游戏|全部',
    class_name:'电视剧&电影&综艺&动漫&少儿&纪录片',
    class_url:'tv&movie&variety&cartoon&child&doco',
    limit:20,
    // play_parse:true,
    // 手动调用解析请求json的url,此lazy不方便
    lazy:'js:input="https://cache.json.icu/home/api?type=ys&uid=292796&key=fnoryABDEFJNPQV269&url="+input.split("?")[0];log(input);let html=JSON.parse(request(input));log(html);input=html.url||input',
    推荐:'.list_item;img&&alt;img&&src;a&&Text;a&&data-float',
    一级:'.list_item;img&&alt;img&&src;a&&Text;a&&data-float',
    // 二级:{is_json:1,"title":"data.title;data.moviecategory[0]+data.moviecategory[1]","img":"data.cdncover","desc":"data.area[0];data.director[0]","content":"data.description","tabs":"data.playlink_sites;data.playlinksdetail.#idv.quality","lists":"data.playlinksdetail.#idv.default_url"},
    // 二级:{is_json:1,"title":"data.title;data.moviecategory[0]+data.moviecategory[1]","img":"data.cdncover","desc":"data.area[0];data.director[0]","content":"data.description","tabs":"data.playlink_sites","lists":"data.playlinksdetail.#idv.default_url"},
    二级:'',
    二级:'js:VOD={};let d=[];let video_list=[];let video_lists=[];let list=[];let QZOutputJson;let html=fetch(input,fetch_params);let sourceId=/get_playsource/.test(input)?input.match(/id=(\\d*?)&/)[1]:input.split("cid=")[1];let cid=sourceId;let detailUrl="https://v.%71%71.com/detail/m/"+cid+".html";log("详情页:"+detailUrl);var pdfh=jsp.pdfh;var pd=jsp.pd;try{let json=JSON.parse(html);VOD={vod_url:input,vod_name:json.c.title,type_name:json.typ.join(","),vod_actor:json.nam.join(","),vod_year:json.c.year,vod_content:json.c.description,vod_remarks:json.rec,vod_pic:urljoin2(input,json.c.pic)}}catch(e){log("解析片名海报等基础信息发生错误:"+e.message)}if(/get_playsource/.test(input)){eval(html);let indexList=QZOutputJson.PlaylistItem.indexList;indexList.forEach(function(it){let dataUrl="https://s.video.qq.com/get_playsource?id="+sourceId+"&plat=2&type=4&data_type=3&range="+it+"&video_type=10&plname=qq&otype=json";eval(fetch(dataUrl,fetch_params));let vdata=QZOutputJson.PlaylistItem.videoPlayList;vdata.forEach(function(item){d.push({title:item.title,pic_url:item.pic,desc:item.episode_number+"\\t\\t\\t播放量："+item.thirdLine,url:item.playUrl})});video_lists=video_lists.concat(vdata)})}else{let json=JSON.parse(html);video_lists=json.c.video_ids;let url="https://v.qq.com/x/cover/"+sourceId+".html";if(video_lists.length===1){let vid=video_lists[0];url="https://v.qq.com/x/cover/"+cid+"/"+vid+".html";d.push({title:"在线播放",url:url})}else if(video_lists.length>1){for(let i=0;i<video_lists.length;i+=30){video_list.push(video_lists.slice(i,i+30))}video_list.forEach(function(it,idex){let o_url="https://union.video.qq.com/fcgi-bin/data?otype=json&tid=1804&appid=20001238&appkey=6c03bbe9658448a4&union_platform=1&idlist="+it.join(",");let o_html=fetch(o_url,fetch_params);eval(o_html);QZOutputJson.results.forEach(function(it1){it1=it1.fields;let url="https://v.qq.com/x/cover/"+cid+"/"+it1.vid+".html";d.push({title:it1.title,pic_url:it1.pic160x90.replace("/160",""),desc:it1.video_checkup_time,url:url,type:it1.category_map&&it1.category_map.length>1?it1.category_map[1]:""})})})}}let yg=d.filter(function(it){return it.type&&it.type!=="正片"});let zp=d.filter(function(it){return!(it.type&&it.type!=="正片")});VOD.vod_play_from=yg.length<1?"qq":"qq$$$qq 预告及花絮";VOD.vod_play_url=yg.length<1?d.map(function(it){return it.title+"$"+it.url}).join("#"):[zp,yg].map(function(it){return it.map(function(its){return its.title+"$"+its.url}).join("#")}).join("$$$");',
    // 二级:'js:VOD={};let d=[];let video_list=[];let video_lists=[];let list=[];let QZOutputJson;let html=fetch(input,fetch_params);let sourceId=/get_playsource/.test(input)?input.match(/id=(\\d*?)&/)[1]:input.split("cid=")[1];let cid=sourceId;let detailUrl="https://v.%71%71.com/detail/m/"+cid+".html";log("详情页:"+detailUrl);var pdfh=jsp.pdfh;var pd=jsp.pd;try{let json=JSON.parse(html);VOD={vod_url:input,vod_name:json.c.title,type_name:json.typ.join(","),vod_actor:json.nam.join(","),vod_year:json.c.year,vod_content:json.c.description,vod_remarks:json.rec,vod_pic:urljoin2(input,json.c.pic)}}catch(e){log("解析片名海报等基础信息发生错误:"+e.message)}if(/get_playsource/.test(input)){eval(html);let indexList=QZOutputJson.PlaylistItem.indexList;indexList.forEach(function(it){let dataUrl="https://s.video.qq.com/get_playsource?id="+sourceId+"&plat=2&type=4&data_type=3&range="+it+"&video_type=10&plname=qq&otype=json";eval(fetch(dataUrl,fetch_params));let vdata=QZOutputJson.PlaylistItem.videoPlayList;vdata.forEach(function(item){d.push({title:item.title,pic_url:item.pic,desc:item.episode_number+"\\t\\t\\t播放量："+item.thirdLine,url:item.playUrl})});video_lists=video_lists.concat(vdata)})}else{let json=JSON.parse(html);video_lists=json.c.video_ids;let url="https://v.qq.com/x/cover/"+sourceId+".html";if(json.c.type===10){let dataUrl="https://s.video.qq.com/get_playsource?id="+json.c.column_id+"&plat=2&type=2&data_type=3&video_type=8&plname=qq&otype=json";let o_html=fetch(dataUrl,fetch_params);eval(o_html);video_lists=[];let indexList=QZOutputJson.PlaylistItem.indexList;indexList.forEach(function(it){let dataUrl="https://s.video.qq.com/get_playsource?id="+json.c.column_id+"&plat=2&type=4&data_type=3&range="+it+"&video_type=10&plname=qq&otype=json";eval(fetch(dataUrl,fetch_params));let vdata=QZOutputJson.PlaylistItem.videoPlayList;vdata.forEach(function(item){d.push({title:item.title,pic_url:item.pic,desc:item.episode_number+"\\t\\t\\t播放量："+item.thirdLine,url:item.playUrl})});video_lists=video_lists.concat(vdata)})}else if(video_lists.length===1){d.push({title:"在线播放",url:url})}else if(video_lists.length>1){for(let i=0;i<video_lists.length;i+=30){video_list.push(video_lists.slice(i,i+30))}video_list.forEach(function(it,idex){let o_url="https://union.video.qq.com/fcgi-bin/data?otype=json&tid=682&appid=20001238&appkey=6c03bbe9658448a4&union_platform=1&idlist="+it.join(",");let o_html=fetch(o_url,fetch_params);eval(o_html);QZOutputJson.results.forEach(function(it1){it1=it1.fields;let url="https://v.qq.com/x/cover/"+cid+"/"+it1.vid+".html";d.push({title:it1.title,pic_url:it1.pic160x90.replace("/160",""),desc:it1.video_checkup_time,url:url,type:it1.category_map&&it1.category_map.length>1?it1.category_map[1]:""})})})}}let yg=d.filter(function(it){return it.type&&it.type!=="正片"});let zp=d.filter(function(it){return!(it.type&&it.type!=="正片")});VOD.vod_play_from=yg.length<1?"qq":"qq$$$qq 预告及花絮";VOD.vod_play_url=yg.length<1?d.map(function(it){return it.title+"$"+it.url}).join("#"):[zp,yg].map(function(it){return it.map(function(its){return its.title+"$"+its.url}).join("#")}).join("$$$");',
    // 搜索:'json:uiData;data[0].title;data[0].posterPic;.titleMarkLabelList[1].primeText;data[0].id;data[0].publishDate',
    搜索:'js:let d=[];pdfa=jsp.pdfa;pdfh=jsp.pdfh;pd=jsp.pd;let html=request(input);let baseList=pdfa(html,"body&&.result_item_v");baseList.forEach(function(it){let longText=pdfh(it,".result_title&&Text");let shortText=pdfh(it,".sub&&Text");let fromTag=pdfh(it,".result_source&&Text");let score=pdfh(it,".result_score&&Text");let content=pdfh(it,".desc_text&&Text");let url=pdfh(it,".result_title&&a&&href");let img=pd(it,".figure_pic&&src");url="https://node.video.qq.com/x/api/float_vinfo2?cid="+url.match(/.*\\/(.*?)\\.html/)[1];log(shortText+"|"+url);if(fromTag.match(/腾讯/)){d.push({title:longText.split(shortText)[0],img:img,url:url,content:content,desc:"⭐"+longText.split(shortText)[1]+"-"+shortText+" "+score})}});setResult(d);',
    // 搜索:'json:item;word;dc;class;id;sn',
}
