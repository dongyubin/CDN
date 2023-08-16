let contentEditor = null;
new Vue({
  el: '#app',
  data: {
      contentEditor: '',
      qrcodeFlag: true
  },
  mounted() {
      contentEditor = new Vditor('vditor', {
          mode: 'sv',
          _lutePath: 'assets/js/lute.min.js',
          CDN: './vditor',
          typewriterMode: true,
          placeholder: '请输入文章内容',
          toolbarConfig: {
              pin: true,
          },
          outline: true,
          cache: {
              enable: true,
              id: '__vditor_content'
          },
          counter: {
              enable: true,
              // type: 'text'
          },
          preview: {
              delay: 200,
              markdown: {
                  autoSpace: true,
                  theme: 'wechat',
                  chinesePunct: true,
              },
              hljs: {
                  enable: true,
                  lineNumber: true,
                  style: "monokai",
              },
              theme: {
                  // current: 'dark',
                  list: { wechat: "WeChat" }
              },
              maxWidth: 800,
          },
          hint: {
              emoji: {
                "Heo-100-亲亲": "https://emotion.acs.pw/emotion/Heo-100/亲亲.png",
                "Heo-100-再见": "https://emotion.acs.pw/emotion/Heo-100/再见.png",
                "Heo-100-加班": "https://emotion.acs.pw/emotion/Heo-100/加班.png",
                "Heo-100-发红包": "https://emotion.acs.pw/emotion/Heo-100/发红包.png",
                "Heo-100-吃瓜": "https://emotion.acs.pw/emotion/Heo-100/吃瓜.png",
                "Heo-100-吐血": "https://emotion.acs.pw/emotion/Heo-100/吐血.png",
                "Heo-100-吵架": "https://emotion.acs.pw/emotion/Heo-100/吵架.png",
                "Heo-100-呲牙笑": "https://emotion.acs.pw/emotion/Heo-100/呲牙笑.png",
                "Heo-100-哈士奇": "https://emotion.acs.pw/emotion/Heo-100/哈士奇.png",
                "Heo-100-哭泣": "https://emotion.acs.pw/emotion/Heo-100/哭泣.png",
                "Heo-100-唱歌": "https://emotion.acs.pw/emotion/Heo-100/唱歌.png",
                "Heo-100-喜欢": "https://emotion.acs.pw/emotion/Heo-100/喜欢.png",
                "Heo-100-大笑": "https://emotion.acs.pw/emotion/Heo-100/大笑.png",
                "Heo-100-头秃": "https://emotion.acs.pw/emotion/Heo-100/头秃.png",
                "Heo-100-奋斗": "https://emotion.acs.pw/emotion/Heo-100/奋斗.png",
                "Heo-100-害羞": "https://emotion.acs.pw/emotion/Heo-100/害羞.png",
                "Heo-100-尴尬": "https://emotion.acs.pw/emotion/Heo-100/尴尬.png",
                "Heo-100-开心": "https://emotion.acs.pw/emotion/Heo-100/开心.png",
                "Heo-100-微笑": "https://emotion.acs.pw/emotion/Heo-100/微笑.png",
                "Heo-100-思考": "https://emotion.acs.pw/emotion/Heo-100/思考.png",
                "Heo-100-恶心": "https://emotion.acs.pw/emotion/Heo-100/恶心.png",
                "Heo-100-惊吓": "https://emotion.acs.pw/emotion/Heo-100/惊吓.png",
                "Heo-100-惊讶": "https://emotion.acs.pw/emotion/Heo-100/惊讶.png",
                "Heo-100-感动": "https://emotion.acs.pw/emotion/Heo-100/感动.png",
                "Heo-100-愤怒": "https://emotion.acs.pw/emotion/Heo-100/愤怒.png",
                "Heo-100-我看好你": "https://emotion.acs.pw/emotion/Heo-100/我看好你.png",
                "Heo-100-抠鼻": "https://emotion.acs.pw/emotion/Heo-100/抠鼻.png",
                "Heo-100-捂嘴笑": "https://emotion.acs.pw/emotion/Heo-100/捂嘴笑.png",
                "Heo-100-捂脸": "https://emotion.acs.pw/emotion/Heo-100/捂脸.png",
                "Heo-100-擦汗": "https://emotion.acs.pw/emotion/Heo-100/擦汗.png",
                "Heo-100-滑稽": "https://emotion.acs.pw/emotion/Heo-100/滑稽.png",
                "Heo-100-烦恼": "https://emotion.acs.pw/emotion/Heo-100/烦恼.png",
                "Heo-100-熬夜": "https://emotion.acs.pw/emotion/Heo-100/熬夜.png",
                "Heo-100-爆炸": "https://emotion.acs.pw/emotion/Heo-100/爆炸.png",
                "Heo-100-牛年进宝": "https://emotion.acs.pw/emotion/Heo-100/牛年进宝.png",
                "Heo-100-狗头": "https://emotion.acs.pw/emotion/Heo-100/狗头.png",
                "Heo-100-狗头围脖": "https://emotion.acs.pw/emotion/Heo-100/狗头围脖.png",
                "Heo-100-狗头胖次": "https://emotion.acs.pw/emotion/Heo-100/狗头胖次.png",
                "Heo-100-狗头花": "https://emotion.acs.pw/emotion/Heo-100/狗头花.png",
                "Heo-100-狗头草": "https://emotion.acs.pw/emotion/Heo-100/狗头草.png",
                "Heo-100-生病": "https://emotion.acs.pw/emotion/Heo-100/生病.png",
                "Heo-100-疑问": "https://emotion.acs.pw/emotion/Heo-100/疑问.png",
                "Heo-100-眩晕": "https://emotion.acs.pw/emotion/Heo-100/眩晕.png",
                "Heo-100-睡觉": "https://emotion.acs.pw/emotion/Heo-100/睡觉.png",
                "Heo-100-禁言": "https://emotion.acs.pw/emotion/Heo-100/禁言.png",
                "Heo-100-笑哭": "https://emotion.acs.pw/emotion/Heo-100/笑哭.png",
                "Heo-100-纠结": "https://emotion.acs.pw/emotion/Heo-100/纠结.png",
                "Heo-100-绿帽": "https://emotion.acs.pw/emotion/Heo-100/绿帽.png",
                "Heo-100-耍酷": "https://emotion.acs.pw/emotion/Heo-100/耍酷.png",
                "Heo-100-被打": "https://emotion.acs.pw/emotion/Heo-100/被打.png",
                "Heo-100-送福": "https://emotion.acs.pw/emotion/Heo-100/送福.png",
                "Heo-100-阴险": "https://emotion.acs.pw/emotion/Heo-100/阴险.png",
                "Heo-100-鬼脸": "https://emotion.acs.pw/emotion/Heo-100/鬼脸.png",
                "Heo-100-鼓掌": "https://emotion.acs.pw/emotion/Heo-100/鼓掌.png"
            },
              emojiPath: 'https://cdn.jsdelivr.net/npm/vditor@3.7.4/dist/images/emoji/',
          },
          upload: {
              // headers: "{'Content-Type': 'multipart/form-data'}",
              // headers: "{'access-control-allow-origin': 'https://tucang.cc'}",
              // headers: "{'Access-Control-Allow-Origin': '*'}",
              // headers: "'content-type': 'application/json;charset=UTF-8'",
              Headers: "'content-type': 'application/x-www-form-urlencoded'",
              accept: ".jpg,.jpeg,.png,.gif",
              handler(files) {
                  var data = {
                      "msg": "",
                      "code": 0,
                      "data": {
                          "errFiles": [],
                          "succMap": {}
                      }
                  };
                  let formData = new FormData();
                  let xhr = new XMLHttpRequest();
                  xhr.withCredentials = true;
                  let tmp = '';
                  var obj = '';
                  url = 'https://tucang.cc/api/v1/upload';
                  for (var i in files) {
                      formData.append('token', 'xxx')
                      formData.append('folderId', '624');
                      // formData.append('Filedata', files[i]);
                      formData.append('file', files[i]);
                      xhr.open("post", url, true);
                      xhr.onload = function () {
                          if (xhr.readyState === 4 && xhr.status === 200) {
                              console.log("上传成功");
                              obj = JSON.parse(xhr.responseText);
                              data.data.succMap[files[i].name] = obj.data.url;
                              tmp = '![' + files[i].name + '](' + obj.data.url + ')';
                              contentEditor.insertValue(tmp);
                          } else {
                              data.data.errFiles = files[i].name;
                          }
                      }
                  }
                  xhr.send(formData);
                  console.log(data);
                  return data;
              },

          },
          toolbar: [
              "emoji",
              "headings",
              "bold",
              "italic",
              "strike",
              "link",
              "|",
              "list",
              "ordered-list",
              "check",
              "outdent",
              "indent",
              "|",
              "quote",
              "line",
              "code",
              "inline-code",
              "insert-before",
              "insert-after",
              "|",
              // "upload",
              "table",
              "|",
              "undo",
              "redo",
              "|",
              "fullscreen",
              // "edit-mode",
              {
                  name: "more",
                  toolbar: [
                      "both",
                      "code-theme",
                      "content-theme",
                      "export",
                      "outline",
                      "preview",
                      "help",
                  ],
              }, ,
              "|", {
                  name: 'insert',
                  tipPosition: 's',
                  tip: '标题引号',
                  className: 'right',
                  icon: '<svg t="1616483334145" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2041" width="200" height="200"><path d="M672 288H352c-9.6 0-16 3.2-22.4 9.6-6.4 6.4-9.6 12.8-9.6 22.4v64c0 19.2 12.8 32 32 32s32-16 32-32v-32h96v320h-32c-16 0-32 12.8-32 32s12.8 32 32 32h128c16 0 32-12.8 32-32s-12.8-32-32-32h-32V352h96v32c0 19.2 12.8 32 32 32s32-16 32-32v-64c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6z" p-id="2042"></path><path d="M896 128H128c-35.2 0-64 28.8-64 64v640c0 35.2 28.8 64 64 64h768c35.2 0 64-28.8 64-64V192c0-35.2-28.8-64-64-64z m0 672c0 16-12.8 32-32 32H160c-19.2 0-32-16-32-32V224c0-16 12.8-32 32-32h704c19.2 0 32 16 32 32v576z" p-id="2043"></path></svg>',
                  click() {
                      contentEditor.insertValue("『』")
                  },
              },
              {
                  name: 'insert',
                  tipPosition: 's',
                  tip: '插入首图',
                  className: 'right',
                  icon: '<svg t="1608795606909" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3356" width="200" height="200"><path d="M512 931.47C280.71 931.47 92.54 743.3 92.54 512S280.71 92.53 512 92.53 931.46 280.7 931.46 512 743.29 931.47 512 931.47z m0-773.19C317 158.28 158.29 317 158.29 512S317 865.72 512 865.72 865.71 707 865.71 512 707 158.28 512 158.28z" fill="#2F3240" p-id="3357"></path><path d="M672.38 684.4a32.77 32.77 0 0 1-21.55-8.07L479.12 527V266.81a32.87 32.87 0 1 1 65.74 0V497L694 626.72a32.87 32.87 0 0 1-21.59 57.68z" fill="#4CC9C5" p-id="3358"></path><path d="M512 512m-76.62 0a76.62 76.62 0 1 0 153.24 0 76.62 76.62 0 1 0-153.24 0Z" fill="#2F3240" p-id="3359"></path></svg>',
                  click() {
                      var text = getElementsByClassName("vditor-counter vditor-tooltipped vditor-tooltipped__nw")[0].textContent;
                      if (text > 10000) {
                          text = text - 11520;
                      } else {
                          text = text;
                      }
                      var p1 = readT(text);
                      var context = '<section><section class="left_zong"><section class="left_zong_zp"><img src="https://tucang.cc/api/image/show/cc7004c3ed49b65593db26e2c71f383f"/></section><p>文武科技社</p></section><section class="right_zong"><section class="right_zong_bk">' + p1 + '</section></section></section>';
                      //console.log(context)
                      var timeText = document.getElementById("time")
                      timeText.innerText = context
                      // contentEditor.insertValue(context)
                  },
              }, {
                  name: 'insert',
                  tipPosition: 's',
                  tip: '表情包',
                  className: 'right',
                  icon: '<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11.36 2c-.21 0-.49.12-.79.32-.57.38-1.72 1.58-2.17 2.78-.34.9-.35 1.72-.21 2.33-.56.1-.97.28-1.13.35-.51.22-1.59 1.18-1.69 2.67-.03.52.04 1.05.2 1.55-.66.19-1.04.43-1.07.44-.32.12-.85.49-1 .69-.35.4-.58.87-.71 1.37-.29 1.09-.19 2.33.34 3.33.29.56.69 1.17 1.13 1.6 1.44 1.48 3.92 2.04 5.88 2.36 2.39.4 4.89.26 7.12-.66 3.35-1.39 4.24-3.63 4.38-4.24.29-1.39-.07-2.7-.22-3.02-.22-.46-.58-.93-1.17-1.23-.4-.25-.75-.38-1.01-.44.26-.95-.11-1.7-.62-2.26-.77-.82-1.56-.94-1.56-.94.26-.5.36-1.1.22-1.68-.16-.71-.55-1.16-1.06-1.46-.52-.31-1.16-.46-1.82-.58-.32-.06-1.65-.25-2.2-1.01-.45-.62-.46-1.74-.58-2.07-.05-.13-.12-.2-.26-.2m4.64 7.61c.07 0 .13.01.19.01 1.43.16 2.45 1.54 2.28 3.07s-1.47 2.65-2.9 2.49c-1.43-.18-2.45-1.53-2.28-3.07.16-1.45 1.35-2.55 2.71-2.5m-7.38 0c1.33.04 2.44 1.17 2.54 2.6.12 1.54-.95 2.87-2.38 2.98h-.01c-1.43.11-2.69-1.05-2.81-2.59-.11-1.54.96-2.87 2.39-2.98.09-.01.18-.01.27-.01m.02 1.7c-.04 0-.07 0-.11.01-.56.07-.96.58-.89 1.13.06.55.57.94 1.13.87s.96-.58.9-1.13c-.06-.52-.52-.89-1.03-.88m7.3.02c-.52.02-.94.42-.98.95-.04.55.39 1.03.95 1.06.59.04 1.05-.39 1.09-.94.04-.56-.39-1.04-.95-1.07-.05 0-.05 0-.11 0m-7.23 4.82c.29-.01.55.08.79.13 1.18.22 2.2.25 2.69.25s1.5-.03 2.67-.25c.41-.08.88-.25 1.25 0 .48.32.13 1.47-.61 2.25-.46.47-1.53 1.38-3.31 1.38s-2.86-.91-3.31-1.38c-.74-.78-1.09-1.93-.62-2.25.14-.09.29-.13.45-.13z"/></svg>',
                  click() {
                      window.open('../emoji/index.html')
                  },
              },
              {
                  name: 'insert',
                  tipPosition: 's',
                  tip: '链接二维码',
                  className: 'right',
                  icon: '<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m4 4h6v6h-6zm16 0v6h-6v-6zm-6 11h2v-2h-2v-2h2v2h2v-2h2v2h-2v2h2v3h-2v2h-2v-2h-3v2h-2v-4h3zm2 0v3h2v-3zm-12 5v-6h6v6zm2-14v2h2v-2zm10 0v2h2v-2zm-10 10v2h2v-2zm-2-5h2v2h-2zm5 0h4v4h-2v-2h-2zm2-5h2v4h-2zm-9-4v4h-2v-4a2 2 0 0 1 2-2h4v2zm20-2a2 2 0 0 1 2 2v4h-2v-4h-4v-2zm-20 18v4h4v2h-4a2 2 0 0 1 -2-2v-4zm20 4v-4h2v4a2 2 0 0 1 -2 2h-4v-2z"/></svg>',
                  click() {
                      getAlink()
                  },
              },
              {
                  name: 'wechat',
                  tipPosition: 's',
                  tip: '公众平台',
                  className: 'right',
                  icon: '<svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="m385.2 167.6c6.4 0 12.6.3 18.8 1.1-16.6-78.4-100.7-136.7-196.3-136.7-107.2 0-194.7 72.8-194.7 165.4 0 53.4 29.3 97.5 77.9 131.6l-19.3 58.6 68-34.1c24.4 4.8 43.8 9.7 68.2 9.7 6.2 0 12.1-.3 18.3-.8-4-12.9-6.2-26.6-6.2-40.8-.1-84.9 72.9-154 165.3-154zm-104.5-52.9c14.5 0 24.2 9.7 24.2 24.4 0 14.5-9.7 24.2-24.2 24.2-14.8 0-29.3-9.7-29.3-24.2.1-14.7 14.6-24.4 29.3-24.4zm-136.4 48.6c-14.5 0-29.3-9.7-29.3-24.2 0-14.8 14.8-24.4 29.3-24.4 14.8 0 24.4 9.7 24.4 24.4 0 14.6-9.6 24.2-24.4 24.2zm418.7 156.1c0-77.9-77.9-141.3-165.4-141.3-92.7 0-165.4 63.4-165.4 141.3s72.8 141.3 165.4 141.3c19.3 0 38.9-5.1 58.6-9.9l53.4 29.3-14.8-48.6c39.2-29.4 68.2-68.3 68.2-112.1zm-219.1-24.5c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.8 0 24.4 9.7 24.4 19.3 0 10-9.7 19.6-24.4 19.6zm107.1 0c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.5 0 24.4 9.7 24.4 19.3.1 10-9.9 19.6-24.4 19.6z"/></svg>',
                  click() {
                      window.open('https://mp.weixin.qq.com/')
                  },
              },
              
          ],
          toolbarConfig: {
              hide: false,
              pin: false,
          },
          // after: () => {
          // this.contentEditor.setValue('请输入文章内容......')
          // },
      });
      
  },
})


function getElementsByClassName(className, tagName) {
  var ele = [],
      all = document.getElementsByTagName(tagName || "*");
  for (var i = 0; i < all.length; i++) {
      if (all[i].className == className) {
          ele[ele.length] = all[i];
      }
  }
  return ele;
}

function readT(rT) {
  var readTime = rT / 500;
  var suduTime = rT / 1300;
  var p1 = '';
  var readTime = Math.round(readTime);
  var suduTime = Math.round(suduTime);
  if (readTime > 1 || suduTime > 1) {
      p1 = '<p>读完需要</p><section>' + readTime + '</section>分钟<p class="sudu">速读仅需 ' + suduTime + ' 分钟</p>';
      return p1;
  } else {
      p1 = '<p>读完需要</p><section>' + 1 + '</section>分钟<p class="sudu">速读仅需 ' + 1 + ' 分钟</p>';
      return p1;
  }
}

function getAlink() {

  let ad = document.getElementsByTagName('a');
  for (let i = 0; i < ad.length - 1; i++) {
      ad[i].style.display="none";
      let ad_href = ad[i].href;
      let ad_qrcode_href = 'https://devtool.shanyue.tech/api/qrcode?data=' + ad_href;
      let ad_text = ad[i].text;
      let code = "<section class='qrcode-text' style='width: 100%;display: flex; flex-direction: column; justify-content: space-around; word-break: break-all; padding: 6px; font-size: 0.875rem; line-height: 1.25rem;'><span style='line-height: inherit; margin-top: 0px;'>长按识别二维码查看原文</span><span>" + ad_href + "</span><span>标题：" + ad_text + "</span></section><section class='qrcode-img' style='width: 124px; height: 124px;flex-shrink: 0;'><img alt='" + ad_href + "' src='" + ad_qrcode_href + "' class='medium-zoom-image' style='margin: auto; box-shadow: none; max-width: 100%;height: auto;vertical-align: middle; border-radius: 6px; display: block; object-fit: contain;'></section>"
      var qb = document.createElement('section');
      qb.setAttribute('class', 'qrcode-box');
      // var qb_text=document.createElement('div');
      // var qb_image=document.createElement('div');
      // qb.setAttribute('class', 'qrcode-box');
      // qb_text.setAttribute('class', 'qrcode-text');
      // qb_image.setAttribute('class', 'qrcode-img');
      // qb.appendChild(qb_text);
      // qb_text.innerHTML="<span>长按识别二维码查看原文</span><span>"+ad_href+"</span><span>标题："+ad_text+"</span>"
      // qb.appendChild(qb_image);
      // qb_image.innerHTML="<img src='"+ad_qrcode_href+"'/>"
      qb.innerHTML = code;
      ad[i].parentNode.appendChild(qb);
  }
}