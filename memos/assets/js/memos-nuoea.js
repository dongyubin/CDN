var gravatar = memosData.gravatar;
var memoList = [
  // {creatorName:'归臧',website:'https://nuoea.com',link:'https://memos.nuoea.com',creatorId:'101',avatar:gravatar+'/avatar/020d365ea2596ef6d516143bb0552704.jpeg?s=400',twikoo:'https://twikoo.nuoea.com',artalk:'',artSite:''},
  // {creatorName:'林木木',website:'https://immmmm.com',link:'https://me.edui.fun',creatorId:'101',avatar:gravatar+'/avatar/ba83fa02fc4b2ba621514941307e21be.jpeg?s=400',twikoo:'https://metk.edui.fun',artalk:'',artSite:''},
  // {creatorName:'大大的小蜗牛',website:'https://eallion.com',link:'https://memos.eallion.com',creatorId:'101',avatar:gravatar+'/avatar/171e4c30959e8c077a6c58b958624b31.jpeg?s=400',twikoo:'',artalk:'https://api.eallion.com/artalk',artSite:'memos'},
  // {creatorName:'胡家小子',website:'https://www.boyhu.cn',link:'https://qzone.boyhu.cn',creatorId:'101',avatar:gravatar+'/avatar/55be217893c75baf8571837197de4a3e.jpeg?s=400',twikoo:'https://tk.boyhu.cn',artalk:'',artSite:''},
  // {creatorName:'koobai',website:'https://koobai.com',link:'https://memos.koobai.com',creatorId:'1',avatar:gravatar+'/avatar/3b3d336a7d389b7ae8531cbe177ae9b7.jpeg?s=400',twikoo:'',artalk:'https://c.koobai.com',artSite:'空白唠叨'},
  // {creatorName:'小饿',website:'https://dongjunke.cn',link:'https://memos.dongjunke.cn',creatorId:'1',avatar:gravatar+'/avatar/42542189ddb33064599dc88a5149bea7.jpeg?s=400',twikoo:'https://twikoo.dongjunke.cn',artalk:'',artSite:''},
  // {creatorName:'老陳网志',website:'https://chenyyds.com',link:'https://me.chenplus.com',creatorId:'101',avatar:gravatar+'/avatar/d1ed9c15ba6d0cb18464118c6288a8ff.webp?s=400',twikoo:'https://twikoo.chenyyds.com',artalk:'',artSite:''},
  // {creatorName:'VeryJack',website:'https://veryjack.com',link:'https://say.veryjack.com',creatorId:'1',avatar:gravatar+'/avatar/7a41a0e8e1df8e964fa1268193b03508.jpeg?s=400',twikoo:'',artalk:'https://artalk.veryjack.com',artSite:'Jack\'s Space'},
  // {creatorName:'1900',website:'https://1900.live',link:'https://memos.1900.live',creatorId:'101',avatar:gravatar+'/avatar/cc38267b10cc25dfc62209f8ca34589e.jpeg?s=400',twikoo:'',artalk:'',artSite:''},
  // {creatorName:'胡鹤仙',website:'https://zuofei.net',link:'https://memo.eirms.com',creatorId:'1',avatar:gravatar+'/avatar/dc75b1021b41486d062ff0285fb94749.jpeg?s=400',twikoo:'',artalk:'',artSite:''},
  // {creatorName:'wananaiko',website:'https://wananaiko.com',link:'https://memo.wananaiko.com',creatorId:'1',avatar:gravatar+'/avatar/11e15a8d264f1110f822ef2c55eeb965.jpeg?s=400',twikoo:'',artalk:'',artSite:''},
  // {creatorName:'不亦乐乎',website:'https://muxer.cn',link:'https://b.lms.im',creatorId:'1',avatar:gravatar+'/avatar/d9cc49ea0301640d7a19b6a1e77012dd.jpeg?s=400',twikoo:'https://b.lms.im/tk/',artalk:'',artSite:''},
  // {creatorName:'老张',website:'https://laozhang.org',link:'https://memos.laozhang.org',creatorId:'1',avatar:gravatar+'/avatar/679666f7bd1af3e55f0e51dd70ed161c.jpeg?s=400',twikoo:'',artalk:'https://artalk.laozhang.org',artSite:'memos'},
  // {creatorName:'拾月',website:'https://www.skyue.com',link:'https://memos.skyue.com',creatorId:'1',avatar:gravatar+'/avatar/c3fb4bb4d5101284ddd672fb722cdd7d.jpeg?s=400',twikoo:'',artalk:'',artSite:''},
  // {creatorName:'wangyunzi',website:'https://wangyunzi.com',link:'https://s.dusays.com',creatorId:'9',avatar:gravatar+'/avatar/c1b204bab687a23c8b6d7c8de11c7c59.jpeg?s=400',twikoo:'',artalk:'',artSite:''},
  {creatorName:'斌仔',website:'https://www.wangdu.site',link:'https://bw.wangdu.site:4730',creatorId:'101',avatar:'',twikoo:'https://wwsay.wangdu.site',artalk:'',artSite:''}
];

var memosOpenId = window.localStorage && window.localStorage.getItem("memos-access-token");
var memosPath = window.localStorage && window.localStorage.getItem("memos-access-path");
var getEditor = window.localStorage && window.localStorage.getItem("memos-editor-display");
var memosTextarea = document.querySelector(".memos-editor-textarea");
var memosVisibilitySelect = document.querySelector(".select-memos-value");
var submitMemoBtn = document.querySelector(".submit-memos-btn");
var editMemoDom = document.querySelector(".edit-memos");
var editMemoBtn = document.querySelector(".edit-memos-btn");
var cancelEditBtn = document.querySelector(".cancel-edit-btn");

var memoDom = document.querySelector(memosData.listDom);
var skeleton = '<div class="el-loading"><div class="el-skeleton mb-3"></div><div class="el-skeleton mb-3"></div><div class="el-skeleton width-50 mb-3"></div><div class="el-skeleton mb-3"></div><div class="el-skeleton mb-3"></div><div class="el-skeleton width-50 mb-3"></div></div>';
var titleDom = document.querySelector('.title-line');
var load = '<div class="load col-12"><button class="load-btn button-load d-none flex-fill mb-3 p-3">加载更多</button></div>';
memoDom.insertAdjacentHTML('afterend', load);
var loadBtn = document.querySelector("button.button-load");

var limit = memosData.limit,page = 1,nums = 0,dataNum = 0,memosContType = 0, memosAccess = 0;
var memoData = [],memosStr = [];

var memosAccessPath = memosData.path;

document.addEventListener("DOMContentLoaded", () => {
  memoFollow();
});

function memoFollow() {
  getMemos();
  loadBtn.addEventListener("click", function () {
    loadBtn.textContent = '加载中';
    if(page < dataNum) {
      page++;
    }
    updateData(memoData)
  });

  titleDom.addEventListener("click", function () {
    if(memosContType == 1) {
      getMemos();
      titleDom.innerText = "动态";
    }
  });

  function withTimeout(millis, promise) {
    const timeout = new Promise((resolve, reject) =>
        setTimeout( () => reject(`Timed out after ms.`),millis));
    return Promise.race([
        promise,
        timeout
    ]);
  };

  async function getMemos() {
    memoDom.innerHTML = skeleton;
    loadBtn.classList.add("d-none");
    memoData = [],page = 1,nums = 0,dataNum = 0,memosContType = 0,memosAccess = 0;
    const results = await Promise.allSettled(memoList.map(
      //限时
      u => withTimeout(2000,
        fetch(u.link+"/api/v1/memo?creatorId="+u.creatorId+"&rowStatus=NORMAL&limit="+limit).then(response => response.json()).then(resdata => {
          return resdata
        })
      )
    )).then(results=> {
      memoDom.innerHTML = "";
      for(var i=0;i < results.length;i++){
        var status = results[i].status;
        if(status == "fulfilled"){
          var resultsRes = results[i].value;
          for(var j=0;j < resultsRes.length;j++){
            var resValue = resultsRes[j]
            memoData.push(resValue)
          }
        }
      }
      loadBtn.classList.remove("d-none");
      updateData(memoData)
    })
  }

  function updateData(a) {
    const res = a.map(item => {
      const creator = item.creatorName
      const data = memoList.find(i => creator == i.creatorName)
      return {
        ...item,
        ...data,
        products: data ? data.products : []
      }
    })
    res.sort((i,o)=>{
      return( o.createdTs - i.createdTs)
    })
    pagination(res)
    dataNum = Math.ceil(res.length/limit);
    nums = dataNum - 1;
    if (page > nums) {
      loadBtn.classList.add('d-none');
      return
    };
  }
  this.updateData = updateData;

  function pagination(data) {
    memosStr = [];
    var last = page * limit - 1;
    last = last >= data.length ? (data.length - 1) : last;
    for (var i = (page * limit - limit); i <= last; i++) { 
      memosStr.push(data[i])
    };
    updateHtml(memosStr);
  }

  // 插入 html 
  function updateHtml(data) {
    let result = "",resultAll = "";
    let TAG_REG = /#((?!^\d+$)[^\s#,.!()/\d]+)/g, 
      IMG_REG = /\!\[(.*?)\]\((.*?)\)/g,
      LINK_REG = /(?<!!)\[(.*?)\]\((.*?)\)/g,
      LINE_REG = /\n/g,
      BLOCKQUDTE_REG = /\>.*$/g,
      CODE_REG = /\```.*$/g,
      BILIBILI_REG = /<a.*?href="https:\/\/www\.bilibili\.com\/video\/((av[\d]{1,10})|(BV([\w]{10})))\/?".*?>.*<\/a>/g,
      NETEASE_MUSIC_REG = /<a.*?href="https:\/\/music\.163\.com\/.*id=([0-9]+)".*?>.*<\/a>/g,
      QQMUSIC_REG = /<a.*?href="https\:\/\/y\.qq\.com\/.*(\/[0-9a-zA-Z]+)(\.html)?".*?>.*?<\/a>/g,
      QQVIDEO_REG = /<a.*?href="https:\/\/v\.qq\.com\/.*\/([a-z|A-Z|0-9]+)\.html".*?>.*<\/a>/g,
      YOUKU_REG = /<a.*?href="https:\/\/v\.youku\.com\/.*\/id_([a-z|A-Z|0-9|==]+)\.html".*?>.*<\/a>/g,
      YOUTUBE_REG = /<a.*?href="https:\/\/www\.youtube\.com\/watch\?v\=([a-z|A-Z|0-9]{11})\".*?>.*<\/a>/g;
      marked.setOptions({
        breaks: true,
        smartypants: false,
        langPrefix: 'language-'
      });
    for (var i = 0; i < data.length; i++) {
      let avatar = data[i].avatar;
      let website = data[i].website;
      let creatorName = data[i].creatorName;
      let createdTs = data[i].createdTs;
      let memosId = createdTs+data[i].id;
      let twikooEnv = data[i].twikoo;
      let artalkEnv = data[i].artalk;
      let artSite = data[i].artSite;
      let memosLink = data[i].link + "/m/" + data[i].id;
      let memosRes = data[i].content
        .replace(TAG_REG, "")
        .replace(IMG_REG, "")
        .replace(LINK_REG, "<a class='primary' href='$2' target='_blank'>$1</a>")
        memosRes = marked.parse(memosRes)
        .replace(BILIBILI_REG, "<div class='video-wrapper'><iframe src='//www.bilibili.com/blackboard/html5mobileplayer.html?bvid=$1&as_wide=1&high_quality=1&danmaku=0' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true'></iframe></div>")
        .replace(NETEASE_MUSIC_REG, "<meting-js auto='https://music.163.com/#/song?id=$1'></meting-js>")
        .replace(QQMUSIC_REG, "<meting-js auto='https://y.qq.com/n/yqq/song$1.html'></meting-js>")
        .replace(QQVIDEO_REG, "<div class='video-wrapper'><iframe src='//v.qq.com/iframe/player.html?vid=$1' allowFullScreen='true' frameborder='no'></iframe></div>")
        .replace(YOUKU_REG, "<div class='video-wrapper'><iframe src='https://player.youku.com/embed/$1' frameborder=0 'allowfullscreen'></iframe></div>")
        .replace(YOUTUBE_REG, "<div class='video-wrapper'><iframe src='https://www.youtube.com/embed/$1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen title='YouTube Video'></iframe></div>")
      let transData = data[i].content.replace(TAG_REG, "").replace(IMG_REG, "").replace(LINK_REG, "$1").replace(LINE_REG, " ").replace(BLOCKQUDTE_REG, "").replace(CODE_REG, "");
      if(transData.length>140){transData = transData.substring(0,140) + '...'};
      let memosForm = {creatorName:creatorName,content:transData,url:memosLink};

      //解析 content 内 md 格式图片
      var loadUrl = memosData.loadUrl;
      var imgArr = data[i].content.match(IMG_REG);
      var imgStr = String(imgArr).replace(/[,]/g, '');
      if (imgArr) {
          var memosImg = imgStr.replace(IMG_REG, '<div class="memo-resource width-100"><img class="lozad" src="'+loadUrl+'" data-src="$2"></div>')
          memosRes += '<div class="resource-wrapper"><div class="images-wrapper my-2">' + memosImg + '</div></div>'
      }

      //标签
      var tagArr = data[i].content.match(TAG_REG);
      var memosTag = '';
      if (tagArr) {
        memosTag = tagArr.map(t=>{
          return '<div class="item-tag d-flex align-items-center text-xs mr-2 px-2">'+ String(t).replace(/[#]/g, '') +'</div>';
        }).join('');
      }else{
        memosTag = '<div class="item-tag d-flex align-items-center text-xs mr-2 px-2">动态</div>';
      }
      
      //解析内置资源文件
      if (data[i].resourceList && data[i].resourceList.length > 0) {
        var resourceList = data[i].resourceList;
        var imgUrl = '',resUrl = '',resImgLength = 0;
        for (var j = 0; j < resourceList.length; j++) {
          var restype = resourceList[j].type.slice(0, 5);
          var resexlink = resourceList[j].externalLink;
          var imgLink = '', fileId = '';
            if (resexlink) {
                imgLink = resexlink
            } else {
                fileId = resourceList[j].publicId || resourceList[j].filename
                imgLink = data[i].link + '/o/r/' + resourceList[j].id + '/' + fileId
            }
          if (restype == 'image') {
            imgUrl += '<div class="memo-resource w-100"><img class="lozad" src="'+loadUrl+'" data-src="' + imgLink + '"/></div>'
            resImgLength = resImgLength + 1
          }
          if (restype !== 'image') {
            resUrl += '<a target="_blank" rel="noreferrer" href="' + imgLink + '">' + resourceList[j].filename + '</a>'
          }
        }
        if (imgUrl) {
          memosRes += '<div class="resource-wrapper"><div class="images-wrapper my-2">' + imgUrl + '</div></div>'
        }
        if (resUrl) {
          memosRes += '<p class="datasource">' + resUrl + '</p>'
        }
      }
      result += '<div class="d-flex animate__animated mb-3"><div class="card-item flex-fill p-3"><div class="item-header d-flex mb-3"><div class="d-flex flex-fill"><div class="item-avatar mr-3" style="background-image:url('+ avatar +')"></div><div class="item-sub d-flex flex-column p-1"><div class="item-creator"><a href="'+ website +'" target="_blank">' + creatorName + '</a></div><div class="item-mate mt-2 text-xs">' + new Date(createdTs * 1000).toLocaleString() + '</div></div></div>';
      memosContType == 0 ? result += '<div class="item-option"><div class="d-flex dropdown"><i class="text-md iconfont iconellipsis"></i><div class="dropdown-wrapper d-none"><span class="btn" onclick="getUserMemos(\''+data[i].link+'\',\''+data[i].creatorId+'\')">只看他</span></div></div></div>' : memosAccess == 1 ? result += '<div class="item-option"><div class="d-flex dropdown"><i class="text-md iconfont iconellipsis"></i><div class="dropdown-wrapper d-none"><span class="btn edit-btn" onclick="editMemo('+JSON.stringify(data[i]).replace(/"/g, '&quot;')+')">编辑</span><span class="btn" onclick="archiveMemo(\''+data[i].id+'\')">归档</span><span class="btn" onclick="deleteMemo(\''+data[i].id+'\')">删除</span></div></div></div>' : '';
      result += '</div><div class="item-content"><div class="item-inner">' + memosRes + '</div><div class="item-footer d-flex mt-2"><div class="d-flex">'+ memosTag +'</div>';
      twikooEnv ? result += '<div class="d-flex flex-fill justify-content-end"><div class="item d-flex align-items-center mr-3"><a data-id="'+data[i].id+'" data-time="'+createdTs+'" data-env="'+twikooEnv+'" data-path="'+memosLink+'" onclick="loadTwikoo(this)" rel="noopener noreferrer"><i class="iconfont iconmessage"></i></a></div><div class="item d-flex align-items-center"><a onclick="transPond('+JSON.stringify(memosForm).replace(/"/g, '&quot;')+')"><i class="iconfont iconlink-ex"></i></a></div></div></div><div id="'+memosId+'" class="item-comment mt-3 d-none"></div>' : artalkEnv ? result += '<div class="d-flex flex-fill justify-content-end"><div class="item d-flex align-items-center mr-3"><a data-id="'+data[i].id+'" data-time="'+createdTs+'" data-env="'+artalkEnv+'" data-path="'+artSite+'" onclick="loadArtalk(this)" rel="noopener noreferrer"><i class="iconfont iconmessage"></i></a></div><div class="item d-flex align-items-center"><a onclick="transPond('+JSON.stringify(memosForm).replace(/"/g, '&quot;')+')"><i class="iconfont iconlink-ex"></i></a></div></div></div><div id="'+memosId+'" class="item-comment mt-3 d-none"></div>' : result += '<div class="d-flex flex-fill justify-content-end"><div class="item d-flex align-items-center"><a onclick="transPond('+JSON.stringify(memosForm).replace(/"/g, '&quot;')+')"><i class="iconfont iconlink-ex"></i></a></div></div></div>';
      result += '</div></div></div>';
    } // end for

    resultAll = result;
    memoDom.insertAdjacentHTML('beforeend', resultAll);
    loadBtn.textContent = "加载更多";
    animation();
    
    window.addEventListener('scroll', animation);
    //图片灯箱
    window.ViewImage && ViewImage.init('.images-wrapper img')
    //相对时间
    window.Lately && Lately.init({
      target: '.item-mate'
    });
    //延迟加载
    var observer = lozad('.lozad');
    observer.observe();
    //下拉菜单
    var dropdowns = document.getElementsByClassName("dropdown");
    Array.prototype.slice.call(dropdowns,0).forEach(function(item,index){
      var dropdown = item;
      var lis = Array.prototype.slice.call(dropdown.children,1);
      dropdown.onmouseenter = function () {
        lis.forEach(function(item,index){
          item.classList.remove("d-none");
        })
      }
      dropdown.onmouseleave = function () { //移出事件
        lis.forEach(function(item,index){
          item.classList.add("d-none");
        })
      }
    });
  }
};

// 获取指定用户列表
async function getUserMemos(u,i) {
  if(memosContType == 0) {
    memoDom.innerHTML = skeleton;
    loadBtn.classList.add('d-none');
    memoData = [],page = 1,nums = 0,dataNum = 0,memosContType = 1;
    memosPath = window.localStorage && window.localStorage.getItem("memos-access-path");
    if (u == memosPath) {
      memosAccess = 1;
    };
    const userMemoUrl = u + "/api/v1/memo?creatorId="+i+"&rowStatus=NORMAL";
    const response = await fetch(userMemoUrl).then(res => {
      if(res.status == 200){
        return res.json()
      }
    }).then(resdata => {
      return resdata;
    }).then(response => {
      memoDom.innerHTML = "";
      for(var k=0;k < response.length;k++){
        var resValue = response[k]
        memoData.push(resValue)
      }
      loadBtn.classList.remove('d-none');
      this.updateData(memoData);
      titleDom.innerText = "返回";
    });
  }
}

// 加载Twikoo评论
function loadTwikoo(i) {
  var twikooEnv = i.getAttribute("data-env")
  var twikooPath = i.getAttribute("data-path")
  var twikooId = i.getAttribute("data-id")
  var twikooTime = i.getAttribute("data-time")
  var twikooDom = document.getElementById(Number(twikooTime)+Number(twikooId));
  var twikooCon = "<div id='twikoo'></div>"
  if (twikooDom.classList.contains('d-none')) {
    document.querySelectorAll('.item-comment').forEach((item) => {item.classList.add('d-none');})
    if(document.getElementById("twikoo")){
      document.getElementById("twikoo").remove()
    }
    twikooDom.insertAdjacentHTML('beforeend', twikooCon);
    twikooDom.classList.remove('d-none');
    twikoo.init({
      envId: twikooEnv,
      el: '#twikoo', 
      path: twikooPath 
    });
  }else{
    twikooDom.classList.add('d-none');
    document.getElementById("twikoo").remove()
  }
}

// 加载Artalk评论
function loadArtalk(e) {
  var artalkEnv = e.getAttribute("data-env")
  var artalkPath= e.getAttribute("data-path")
  var artalkId = e.getAttribute("data-id")
  var artalkTime = e.getAttribute("data-time")
  var artalkDom = document.getElementById(Number(artalkTime)+Number(artalkId));
  var artalkCon = "<div id='artalk'></div>"
  if (artalkDom.classList.contains('d-none')) {
    document.querySelectorAll('.item-comment').forEach((item) => {item.classList.add('d-none');})
    if(document.getElementById("artalk")){
      document.getElementById("artalk").remove()
    }
    artalkDom.insertAdjacentHTML('beforeend', artalkCon);
    artalkDom.classList.remove('d-none');
    Artalk.init({
      el: '#artalk',
      pageKey: '/m/' + artalkId,
      pageTitle: '',
      site: artalkPath,
      server: artalkEnv,
      emoticons: false
    });
  }else{
    artalkDom.classList.add('d-none');
    document.getElementById("artalk").remove()
  }
}

//转发
function transPond(a){
  getEditor = window.localStorage && window.localStorage.getItem("memos-editor-display"),
  memosOpenId = window.localStorage && window.localStorage.getItem("memos-access-token");
  if(memosOpenId && getEditor == "show"){
    var transRes = '[@'+ a.creatorName+']('+a.url+') \n\n> '+a.creatorName+': '+a.content;
    memosTextarea.value = transRes;
    memosTextarea.style.height = memosTextarea.scrollHeight + 'px';
    document.body.scrollIntoView({behavior: 'smooth'})
  }else{
    window.open(a.url);
  }
}

//修改
function editMemo(e) {
  var memoContent = e.content,memoId = e.id,memoRelationList = e.relationList,memoResourceList = e.resourceList,memoVisibility = e.visibility;
  getEditor = window.localStorage && window.localStorage.getItem("memos-editor-display"),
  memosOpenId = window.localStorage && window.localStorage.getItem("memos-access-token");
  if(memosOpenId && getEditor == "show"){
    memosTextarea.value = memoContent;
    memosTextarea.style.height = memosTextarea.scrollHeight + 'px';
    submitMemoBtn.classList.add("d-none");
    editMemoDom.classList.remove("d-none");
    document.body.scrollIntoView({behavior: 'smooth'});
  }
  editMemoBtn.addEventListener("click", function () {
    memosOpenId = window.localStorage && window.localStorage.getItem("memos-access-token"),
    memoContent = memosTextarea.value,
    memoResourceList = window.localStorage && JSON.parse(window.localStorage.getItem("memos-resource-list")) ? window.localStorage && JSON.parse(window.localStorage.getItem("memos-resource-list")) : e.resourceList,
    memoVisibility = memosVisibilitySelect.value;
    let hasContent = memoContent.length !== 0;
    if (hasContent) {
      var memoUrl = memosPath+"/api/v1/memo/"+memoId+"?openId="+memosOpenId;
      var memoBody = {content:memoContent,id:memoId,relationList:memoRelationList,resourceList:memoResourceList,visibility:memoVisibility}
      fetch(memoUrl, {
        method: 'PATCH',
        body: JSON.stringify(memoBody),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function(res) {
        if (res.status == 200) {
          cocoMessage.success(
          '保存成功',
          ()=>{
            submitMemoBtn.classList.remove("d-none");
            editMemoDom.classList.add("d-none");
            location.reload();
          })
        }
      })
    }
  })
}

cancelEditBtn.addEventListener("click", function () {
  if (!editMemoDom.classList.contains("d-none")) {
    memosTextarea.value = '';
    memosTextarea.style.height = 'inherit';
    editMemoDom.classList.add("d-none");
    submitMemoBtn.classList.remove("d-none");
  }
})

//归档
function archiveMemo(memoId) {
  memosOpenId = window.localStorage && window.localStorage.getItem("memos-access-token");
  if(memosOpenId && memoId){
    var memoUrl = memosPath+"/api/v1/memo/"+memoId+"?openId="+memosOpenId;
    var memoBody = {id:memoId,rowStatus:"ARCHIVED"};
    fetch(memoUrl, {
      method: 'PATCH',
      body: JSON.stringify(memoBody),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function(res) {
      if (res.status == 200) {
        cocoMessage.success(
        '归档成功',
        ()=>{
          location.reload();
        })
      }
    })
  }
}

//删除
function deleteMemo(memoId) {
  memosOpenId = window.localStorage && window.localStorage.getItem("memos-access-token");
  if(memosOpenId && memoId){
    var memoUrl = memosPath+"/api/v1/memo/"+memoId+"?openId="+memosOpenId;
    fetch(memoUrl, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function(res) {
      if (res.status == 200) {
        cocoMessage.success(
        '删除成功',
        ()=>{
          location.reload();
        })
      }
    }).catch(err => {
      cocoMessage.error('出错了，再检查一下吧')
    })
  }
}