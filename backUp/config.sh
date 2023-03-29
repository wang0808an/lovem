## Version: v2.8.0
## Date: 2021-06-20
## Update Content: 可持续发展纲要\n1. session管理破坏性修改\n2. 配置管理可编辑config下文件\n3. 自定义脚本改为查看脚本\n4. 移除互助相关

## 上面版本号中，如果第2位数字有变化，那么代表增加了新的参数，如果只有第3位数字有变化，仅代表更新了注释，没有增加新的参数，可更新可不更新
export baseInfo="10"
export gua_log_token="7gu4cyy9akhbf5gj"
export JD_CITY_HELPSHARE="false"
export JD_CITY_EXCHANGE="true"
export GUA_CITY_SHARECODES="WT8rFsQDS4vowGDzPqQnIUbH&29DRE8ULRl4GbXi-bbo4Zqt8v8GdjrKK"
export ZNSLOTTERY='true'
export JD_XKMH_OPENCARD="true"
export VENDER_ID="12118316"
export OPENCARD_QZ="true"
export JOY_RUN_ASSETS='0.01'
export krtycode="84_76_50_51_101_89_112_111_122_99_54_108_53_49_114_108_77_97_80_73_70_119_61_61"
export JGCODE="ycXdOSZaaAzACB6HwmTGT8wDxQ"
export Rabbiturl="https://ck.12jd.fun/api/wsck"
export RabbitToken="228bf74cfe98469e9be12812a3cd99ac"
## 在运行 ql repo 命令时，是否自动删除失效的脚本与定时任务
AutoDelCron="true"

## 在运行 ql repo 命令时，是否自动增加新的本地定时任务
AutoAddCron="true"

## 拉取脚本时默认的定时规则，当匹配不到定时规则时使用，例如: 0 9 * * *
DefaultCronRule=""

## ql repo命令拉取脚本时需要拉取的文件后缀，直接写文件后缀名即可
RepoFileExtensions="js py sh ts so"

## 代理地址，支持HTTP/SOCK5，例如 http://127.0.0.1:7890
ProxyUrl=""

## 资源告警阙值，默认CPU 80%、内存80%、磁盘90%

## 设置定时任务执行的超时时间，默认1h，后缀"s"代表秒(默认值), "m"代表分, "h"代表小时, "d"代表天
CommandTimeoutTime="5h"

## 设置批量执行任务时的并发数，默认同时执行5个任务
MaxConcurrentNum="50"

## 在运行 task 命令时，随机延迟启动任务的最大延迟时间
## 默认给javascript任务加随机延迟，如 RandomDelay="300" ，表示任务将在 1-300 秒内随机延迟一个秒数，然后再运行，取消延迟赋值为空
RandomDelay=""

## 需要随机延迟运行任务的文件后缀，直接写后缀名即可，多个后缀用空格分开，例如: js py ts
## 默认仅给javascript任务加随机延迟，其它任务按定时规则准点运行。全部任务随机延迟赋值为空
RandomDelayFileExtensions="js"

## 每小时的第几分钟准点运行任务，当在这些时间运行任务时将忽略 RandomDelay 配置，不会被随机延迟
## 默认是第0分钟和第30分钟，例如21:00或21:30分的任务将会准点运行。不需要准点运行赋值为空
RandomDelayIgnoredMinutes="0 30"

## 如果你自己会写shell脚本，并且希望在每次运行 ql update 命令时，额外运行你的 shell 脚本，请赋值为 "true"，默认为true
EnableExtraShell="true"

## 是否自动启动bot，默认不启动，设置为true时自动启动，目前需要自行克隆bot仓库所需代码，存到ql/repo目录下，文件夹命名为dockerbot
AutoStartBot=""

## 是否使用第三方bot，默认不使用，使用时填入仓库地址，存到ql/repo目录下，文件夹命名为diybot
BotRepoUrl=""

## 安装python依赖时指定pip源
PipMirror="https://pypi.doubanio.com/simple/"

## 安装node依赖时指定npm源
NpmMirror="https://registry.npmmirror.com"

## 通知环境变量
## 1. Server酱
## https://sct.ftqq.com
## 下方填写 SCHKEY 值或 SendKey 值
export PUSH_KEY="SCT99602TNNTqIETjvwA9WHaRj43xhVXa"

## 2. BARK
## 下方填写app提供的设备码，例如：https://api.day.app/123 那么此处的设备码就是123
export BARK_PUSH=""
## 下方填写推送图标设置，自定义推送图标(需iOS15或以上)
export BARK_ICON="https://qn.whyour.cn/logo.png"
## 下方填写推送声音设置，例如choo，具体值请在bark-推送铃声-查看所有铃声
export BARK_SOUND=""
## 下方填写推送消息分组，默认为"QingLong"
export BARK_GROUP="QingLong"

## 3. Telegram
## 下方填写自己申请@BotFather的Token，如10xxx4:AAFcqxxxxgER5uw
export TG_BOT_TOKEN=""
## 下方填写 @getuseridbot 中获取到的纯数字ID
export TG_USER_ID=""
## Telegram 代理IP（选填）
## 下方填写代理IP地址，代理类型为 http，比如您代理是 http://127.0.0.1:1080，则填写 "127.0.0.1"
## 如需使用，请自行解除下一行的注释
export TG_PROXY_HOST=""
## Telegram 代理端口（选填）
## 下方填写代理端口号，代理类型为 http，比如您代理是 http://127.0.0.1:1080，则填写 "1080"
## 如需使用，请自行解除下一行的注释
export TG_PROXY_PORT=""
## Telegram 代理的认证参数（选填）
export TG_PROXY_AUTH=""
## Telegram api自建反向代理地址（选填）
## 教程：https://www.hostloc.com/thread-805441-1-1.html
## 如反向代理地址 http://aaa.bbb.ccc 则填写 aaa.bbb.ccc
## 如需使用，请赋值代理地址链接，并自行解除下一行的注释
export TG_API_HOST=""

## 4. 钉钉
## 官方文档：https://developers.dingtalk.com/document/app/custom-robot-access
## 下方填写token后面的内容，只需 https://oapi.dingtalk.com/robot/send?access_token=XXX 等于=符号后面的XXX即可
export DD_BOT_TOKEN=""
export DD_BOT_SECRET=""

## 5. 企业微信机器人
## 官方说明文档：https://work.weixin.qq.com/api/doc/90000/90136/91770
## 下方填写密钥，企业微信推送 webhook 后面的 key
export QYWX_KEY=""

## 6. 企业微信应用
## 参考文档：http://note.youdao.com/s/HMiudGkb
## 下方填写素材库图片id（corpid,corpsecret,touser,agentid），素材库图片填0为图文消息, 填1为纯文本消息
export QYWX_AM=""

## 7. iGot聚合
## 参考文档：https://wahao.github.io/Bark-MP-helper
## 下方填写iGot的推送key，支持多方式推送，确保消息可达
export IGOT_PUSH_KEY=""

## 8. Push Plus
## 官方网站：http://www.pushplus.plus
## 下方填写您的Token，微信扫码登录后一对一推送或一对多推送下面的token，只填 PUSH_PLUS_TOKEN 默认为一对一推送
export PUSH_PLUS_TOKEN=""
## 一对一多推送（选填）
## 下方填写您的一对多推送的 "群组编码" ，（一对多推送下面->您的群组(如无则新建)->群组编码）
## 1. 需订阅者扫描二维码 2、如果您是创建群组所属人，也需点击“查看二维码”扫描绑定，否则不能接受群组消息推送
export PUSH_PLUS_USER=""

## 9. go-cqhttp
## gobot_url 推送到个人QQ: http://127.0.0.1/send_private_msg  群：http://127.0.0.1/send_group_msg
## gobot_token 填写在go-cqhttp文件设置的访问密钥
## gobot_qq 如果GOBOT_URL设置 /send_private_msg 则需要填入 user_id=个人QQ 相反如果是 /send_group_msg 则需要填入 group_id=QQ群
## go-cqhttp相关API https://docs.go-cqhttp.org/api
export GOBOT_URL=""
export GOBOT_TOKEN=""
export GOBOT_QQ=""

## 10. gotify
## gotify_url 填写gotify地址,如https://push.example.de:8080
## gotify_token 填写gotify的消息应用token
## gotify_priority 填写推送消息优先级,默认为0
export GOTIFY_URL=""
export GOTIFY_TOKEN=""
export GOTIFY_PRIORITY=0

## 11. PushDeer
## deer_key 填写PushDeer的key
export DEER_KEY=""

## 12. Chat
## chat_url 填写synology chat地址，http://IP:PORT/webapi/***token=
## chat_token 填写后面的token
export CHAT_URL=""
export CHAT_TOKEN=""

## 13. aibotk
## 官方说明文档：http://wechat.aibotk.com/oapi/oapi?from=ql
## aibotk_key (必填)填写智能微秘书个人中心的apikey
export AIBOTK_KEY=""
## aibotk_type (必填)填写发送的目标 room 或 contact, 填其他的不生效
export AIBOTK_TYPE=""
## aibotk_name (必填)填写群名或用户昵称，和上面的type类型要对应
export AIBOTK_NAME=""
# ccwav 环境变量
## [1] jd_bean_change.js (已添加支持一对一推送)
### 京东资产变动 + 白嫖榜 + 京东月资产变动,注意事项：如果你遇到TG Bark报错，那是因为报文过长，请使用分段通知功能.
### 1. BEANCHANGE_PERSENT  分段通知
### 例：export BEANCHANGE_PERSENT="10"总共有22个账号,结果会分成3条推送通知，1~10为第一条推送，11~20为第二条推送，剩余的为第三条推送
export BEANCHANGE_PERSENT="" ##10合1
### 2. BEANCHANGE_USERGP2 BEANCHANGE_USERGP3 BEANCHANGE_USERGP4  根据Pt_Pin的值进行分组通知
### 注意：分组通知会强制禁用BEANCHANGE_PERSENT变量!	
### 分组通知的通知标题为 脚本名+"#"+分组数值
### 主要用于搭配通知脚本的分组通知使用.
### 3.BEANCHANGE_ALLNOTIFY
### 设置推送置顶公告，&表示换行，公告会出现在资产通知中(包括一对一).
### 	例子 :  export BEANCHANGE_ALLNOTIFY="你好&今天天气不错...&&哥斯拉大战金刚...."  
### 	显示:
### 	
### 	【✨✨✨✨公告✨✨✨✨】
### 	 你好
### 	 今天天气不错...
### 	 
### 	 哥斯拉大战金刚.... 
export BEANCHANGE_ALLNOTIFY='因为加了购物车抽奖脚本<br>晚上9:30会自动清空购物车<br>点击下面的链接，可以帮助朋友上车<br>京豆豆车：<a href="http://a.12jd.fun:8082/#/login">点击登录上车</a><br>饿了么车：<a href="http://a.12jd.fun:3000/">点击登录上车</a><br>京东永久WSCK获取：<a href=http://a.12jd.fun:5701/><b style=color:red>点击按步骤操作</b></a>'
### 4. BEANCHANGE_ExJxBeans
### 当设定BEANCHANGE_ExJxBeans="true"且时间在17点之后，会自动将临期京豆兑换成喜豆续命.
export BEANCHANGE_ExJxBeans="true"
### 5. BEANCHANGE_CheckJxBeans
### 当设定BEANCHANGE_CheckJxBeans="true" 将启用喜豆查询功能.
export BEANCHANGE_CheckJxBeans="true"
## [2] jd_CheckCK.js
### 京东CK检测,不正常的自动禁用，正常的如果是禁用状态则自动启用。
### 配合通知脚本CK触发使用，也可以直接task。
### 兼容jd_bean_change的BEANCHANGE_USERGP2 BEANCHANGE_USERGP3 BEANCHANGE_USERGP4变量。
### BEANCHANGE_USERGP2 BEANCHANGE_USERGP3 BEANCHANGE_USERGP4  根据Pt_Pin的值进行分组通知        
### 分组通知的通知标题为 脚本名+"#"+分组数值
### 主要用于搭配通知脚本的分组通知使用.
### 2021-11-14增加CHECKCK_ALLNOTIFY设置温馨提示，&表示换行，推送时在内容末尾添加显示
### 一对一推送只有推送账户失效时才会添加.用法参考BEANCHANGE_ALLNOTIFY.
export CHECKCK_SHOWSUCCESSCK="true"   ##true表示显示正常CK；false表示不显示正常CK状态；
export CHECKCK_CKALWAYSNOTIFY="false" ##true为永远通知CK状态；false表示关闭通知CK状态
export CHECKCK_CKAUTOENABLE="false"   ##true表示自动启用CK；false表示停用自动启用CK；
export CHECKCK_CKNOWARNERROR="true"   ##true表示服务器空数据等错误不触发通知，false表示通知。

## [3] sendNotify.js
### 1. NOTIFY_SKIP_LIST 通知黑名单
### 如果通知标题在此变量里面存在(&隔开),则用屏蔽不发送通知.(PS: Ningjia 作者写的功能，继承过来)。例：export NOTIFY_SKIP_LIST="京东CK检测&京东资产变动"
export NOTIFY_SKIP_NAMETYPELIST=""
### 2. 多套通知。NOTIFY_GROUP2_LIST NOTIFY_GROUP3_LIST NOTIFY_GROUP4_LIST NOTIFY_GROUP5_LIST NOTIFY_GROUP6_LIST
### 如果通知标题在此变量里面存在(&隔开),则用第2/3/4/5/6套推送变量进行配置.
##分组2推送
## export PUSH_PLUS_TOKEN_hxtrip2=""
## export PUSH_PLUS_USER_hxtrip2=""
export PUSH_PLUS_TOKEN2=""
export PUSH_PLUS_USER2=""
export TG_BOT_TOKEN2=""
export TG_USER_ID2=""
### export NOTIFY_GROUP2_LIST="京东白嫖榜&京东月资产变动&省钱大赢家之翻翻乐&京东CK检测&京喜工厂&金融养猪"

### 3. NOTIFY_SHOWNAMETYPE 通知显示的账号类型
### 例：账号名:ccwav  别名:ccwav的别名  Remark:代码玩家
#export NOTIFY_SHOWNAMETYPE="1"    ##效果: 账号名称：代码玩家
#export NOTIFY_SHOWNAMETYPE="2"     ##效果: 账号名称：ccwav的别名(代码玩家)
#export NOTIFY_SHOWNAMETYPE="3"    ##不做处理，效果: 账号名称：ccwav   
export NOTIFY_SHOWNAMETYPE="4"    ##不做处理，效果: 账号名称：ccwav(代码玩家)
### 4. NOTIFY_SKIP_NAMETYPELIST
### 单独指定某些脚本不做NOTIFY_SHOWNAMETYPE变量处理。例：export NOTIFY_SKIP_NAMETYPELIST="东东农场&东东工厂"
#export NOTIFY_SKIP_NAMETYPELIST=""
### 5. NOTIFY_NOREMIND
### 对 东东农场领取 东东萌宠领取 京喜工厂领取 汪汪乐园养joy领取 脚本任务更新的通知进行屏蔽,可自行删减.
### export NOTIFY_NOREMIND="京喜工厂&汪汪乐园养joy"
### 6. NOTIFY_NOCKFALSE 屏蔽ck失效通知
### 执行所有脚本时，如果有单独推送CK失效的请求也不会推送失效通知
export NOTIFY_NOCKFALSE="true"
### 7. NOTIFY_AUTHOR
### 通知底部显示：本通知 By 测试人
export NOTIFY_AUTHOR="一个小屁孩"
### 8. NOTIFY_NOLOGINSUCCESS
### 屏蔽青龙登陆成功通知，登陆失败不屏蔽(新版貌似可以直接设定了)
export NOTIFY_NOLOGINSUCCESS="true"
### 9. NOTIFY_CUSTOMNOTIFY
### 强大的自定义通知，格式为 脚本名称&推送组别&推送类型 (推送组别总共5组)
### 推送类型: Server酱&pushplus&Bark&TG机器人&钉钉&企业微信机器人&企业微信应用消息&iGotNotify&gobotNotify
### export NOTIFY_CUSTOMNOTIFY=["京东资产变动&组1&Server酱&Bark&企业微信应用消息&TG机器人&iGotNotify","京东白嫖榜&组1&TG机器人&pushplus&iGotNotify","京东CK检测&组1&TG机器人&pushplus&iGotNotify"]
export NOTIFY_CUSTOMNOTIFY=""
### 10. NOTIFY_CKTASK
### 当接收到发送CK失效通知和Ninja 运行通知时候执行子线程任务,支持js py ts
### export NOTIFY_CKTASK="jd_CheckCK.js"
### 11. PUSH_PLUS_TOKEN_hxtrip 和 PUSH_PLUS_USER_hxtrip
### 增加pushplus.hxtrip.com的推送加接口，貌似更稳定
export PUSH_PLUS_TOKEN_hxtrip=""
export PUSH_PLUS_USER_hxtrip=""
### 12. 用 WxPusher 进行一对一推送
### 新方案：
### 填写变量 WP_APP_TOKEN_ONE,按照备注内容@@WxPusherUid的格式修改备注,例子 萌新cc@@UID_AASDADASDQWEQWDADASDADASDASDSA
### 旧方案：
### 详细教程有人写了，不知道是幸运还是不幸: https://www.kejiwanjia.com/jiaocheng/27909.html
### 填写变量 WP_APP_TOKEN_ONE,可在管理台查看: https://wxpusher.zjiecode.com/admin/main/app/appToken
### 手动建立CK_WxPusherUid.json,可以参考CKName_cache.json,只是nickName改成Uid，
### 每个用户的uid可在管理台查看: https://wxpusher.zjiecode.com/admin/main/wxuser/list
### 另外: export WP_APP_ONE_TEXTSHOWREMARK="true"，启用一对一推送标题显示备注信息，默认不启用.
export WP_APP_TOKEN_ONE="AT_gbvh6X2RNh3Y0y3LWtxLmfEIanQXaNE5"
export WP_APP_MAIN_UID="UID_zEPAf5MVuFj9QBgwK5aYepOJndX9"
export WP_APP_ONE_TEXTSHOWREMARK="UID_zEPAf5MVuFj9QBgwK5aYepOJndX9"
### CK_WxPusherUid.json 内容(pt_pin 如果是汉字需要填写转码后的!):
### [
###   {
### 	"pt_pin": "ccwav",
### 	"Uid": "UID_AAAAAAAA"
###   },
###   {
### 	"pt_pin": "中文名",
### 	"Uid": "BBBBBBBBBB"
###   }
### ]
### 15. NOTIFY_SKIP_TEXT
### 如果此变量(&隔开)的关键字在通知内容里面存在,则屏蔽不发送通知.
### 例子 :  export NOTIFY_SKIP_TEXT="忘了种植&异常"
### 16. NOTIFY_AUTHOR_BLANK (tcbaby提交)
### 控制不显示推送通知的底部信息
### 例子 :  export NOTIFY_AUTHOR_BLANK="随便填只要非空即可"
## [4] jd_joy_reward_Mod.js 宠汪汪积分兑换有就换版
export JOY_GET20WHEN16="true"  ##控制16点才触发20京豆兑换.

# X1a0He 环境变量
## 1、简化版京东日资产变动通知
### 支持环境变量控制每次发送的账号个数，默认为2
export JD_BEAN_CHANGE_SENDNUM="10"
## 2、清空购物车
### 使用前请认真看对应注释：https://raw.githubusercontent.com/X1a0He/jd_scripts_fixed/main/jd_cart_remove.js
### 当环境变量中存在JD_CART并设置为true时才会执行删除购物车
export JD_CART="true"
### 运行一次取消多全部已关注的商品。数字0表示不取关任何商品，默认20
export JD_CART_REMOVESIZE="20"
### 是否清空，如果为false，则上面设置了多少就只删除多少条
export JD_CART_REMOVEALL="true"
### 关键词，用@分隔
export JD_CART_KEYWORDS=""
## 3、京东试用
### 由ZCY01二次修改：脚本默认不运行，由X1a0He修复：依然保持脚本默认不运行。true为运行
### 使用前请认真看对应注释：https://raw.githubusercontent.com/X1a0He/jd_scripts_fixed/main/jd_try_xh.js
export JD_TRY_PASSZC="false" #不过滤种草官类试用，默认true过滤
export JD_TRY_MAXLENGTH="50" #商品数组的最大长度，默认50个
export JD_TRY_PRICE="10"#商品原价格，大于XX才申请，默认20
export JD_TRY_APPLYINTERVAL="6000" #商品试用之间和获取商品之间的间隔ms
export JD_TRY_APPLYNUMFILTER="10000" #过滤大于设定值的已申请人数
export JD_TRY_MINSUPPLYNUM="1" #最小提供数量
export JD_TRY_SENDNUM="10" #每隔多少账号发送一次通知，默认为4
export JD_TRY_UNIFIED="false" #默认采用不同试用组
export JD_TRY_NUM="10" #最多跑多少个CK，默认10
export JD_TRY_TRIALPRICE="10"
## 12.4 基础 js 依赖文件的预先替换
### 释义：目前仅支持将 /ql/config 路径下的  ql.js、sendNotify.js、JD_DailyBonus.js、JS_USER_AGENTS.js、USER_AGENTS.js 5 个文件，在 task 命令启动时会自动替换到当前运行的脚本所在的文件夹。
### 赋值要求：例如：ql|JD_DailyBonus&sendNotify@JDHelloWorld_jd_scripts|ccwav_QLScript2。各个定义单元之间采用 & 连接。
###                ql|JD_DailyBonus                                      两个脚本均不屏蔽仓库文件夹复制替换
###                sendNotify@JDHelloWorld_jd_scripts|ccwav_QLScript2    sendNotify.js 不复制到 /ql/scripts/路径下的 JDHelloWorld 和 ccwav 的仓库文件夹。文件夹名称必须精确完整写出，不支持模糊匹配。
js_deps_replace_envs="ql|JD_DailyBonus&sendNotify|JS_USER_AGENTS|USER_AGENTS@JDHelloWorld_jd_scripts@6dylan6_jdpro"
### 13.7.1 未录入 WxPusher UID 的账号。
### 赋值要求：填 1 表示检测并通知未录入 WxPusher UID 的账号；
###          填 2 表示只预测不通知未录入 WxPusher UID 的账号；
###          空值或填其他内容表示不启用该功能。
CK_WxPusherUid="1"
### 13.7.2 自动补全备注中的时间戳和UID
## 说明：当 CK_WxPusherUid.json 文件，中存在账号的 UID 且面板环境变量备注中缺少时间戳或 UID 时生效
### 赋值要求：填 1 表示补全；
###          空值或填其他内容表示不启用该功能。
SCANF_WXPusher_Remarks=""
### 13.7.3 WxPusher App Token，用于一对一推送账号失效通知(同 ccwav 一对一通知环境变量，只可保留一个)。
### 格式为 AT_xxxx；查看地址：https://wxpusher.zjiecode.com/admin/main/app/appToken
#WP_APP_TOKEN_ONE=""
### 13.7.4 WxPusher 主 UID，主 UID 账号可以接收失效的第三者账号及其是否录入JD_WSCK(wskey)的信息。
### 格式为 UID_xxxx；查看地址：https://wxpusher.zjiecode.com/admin/main/wxuser/list
MainWP_UID=""
## 14 Shell 版公告 notify2 环境变量(WxPusher、企业微信应用、pushplus、hxtrip pushplus)
## 14.1 读取 WxPusher UID 的方式
### 赋值要求：填 1 表示读取青龙面板环境变量中未被禁用的 JD_COOKIE 备注中的 UID；
###          填 2 表示读取 /ql/scripts/CK_WxPusherUid.json。必须是 ckck2 生成的带有 status 键值的版本。
WxPusher_UID_src='UID_zEPAf5MVuFj9QBgwK5aYepOJndX9'
DOWNLOAD_BASIC_JS="1"
## 其他需要的变量，脚本中需要的变量使用 export 变量名= 声明即可
export jd_cjhy_wxCollectionActivity_num="20"
export krjxcode="da88d1791a229560cc952bf5a3d5ce7f"
export SYJ_HELP_PIN="%E8%8B%A50808%E5%88%9D&13215927661wang&jd_46066bd5f3b31&wdtHtmooTYILYN&jd_4d306dced2fd6"
###年终奖
export NZJCODE='T014ZkbmQBYZ_YFvjQCjRQl4aW5kRrbA&T0225KkcRRcR8FSBIE71x6VZIgCjRQl4aW5kRrbA&T0225KkcRBgZ81KFdB-il6UJdQCjRQl4aW5kRrbA'
export NZJNUM='25'
###汪汪赛
export RUN_ASSETS='0.02'
export WSKEY_DISCHECK="true"
export guaopencard_addSku264="true"
export guaopencard_draw264="3"
##临期京豆续命
export DY_WASHBEANS="true"
export DY_ZJDTOP="4"
##评价
export isCommentPic="true"
##早起生鲜打卡
export morningScPins='%E8%8B%A50808%E5%88%9D'
##头文字j
export car_addsku='true'
###大赢家
export isCashOut="true"
###购物车
export JD_CART_REMOVE="true"
export gua_cleancart_Run="true"
export gua_cleancart_products='若0808初@&@|-|jd_59850f0d1cbcf@&@|-|jd_46066bd5f3b31@&@|-|wdtHtmooTYILYN@&@|-|jd_4d306dced2fd6@&@|-|13215927661wang@&@|-|jd_7c53749be8263@&@|-|jd_dyPzeADrQnVc@&@|-|jd_5bd02307684bd@&@|-|188177666-70519936@&@|-|jd_632881ff29ab3@&@|-|1198303946_m@&@|-|jd_7ae508b91839c@&@|-|jd_6aca3054e2415@&@|-|jd_61b057afd1f9e@&@|-|jd_42b36a1ccd4e0@&@|-|jd_50d9d039e7cee@&@|-|134168678-895045@&@|-|wdZcxNnZoqnMFa@&@|-|jd_57bc0400631a5@&@|-|jd_43c75e6c47cce@&@|-|jd_696bd4629209e@&@|-|jd_7d0abf9fbbc6b@&@'
##export gua_cleancart_SignUrl="https://jd.smiek.tk/jdcleancatr_21102717"
##jd_joyjd_open通用ID任务
export FS_LEVEL="car"
##大赢家助力
export DYJSHAREID='6051cff3fe0377b33e0fea4a14be917b&c9bf057c545c477884f372a2a8afb10f&c49e5ce812246443efb50557ca133120'
##东东爱消除
export XXLDOUBLE="true"
##健康社区兑换京豆
export dd_thread='30'
export heath_noexchage='16&17&18&19'
##关注店铺有礼
export jd_wxShopFollowActivity_openCard="true" 
export jd_wxShopFollowActivity_num="20" 
export jd_wxShopFollowActivity_blacklist=""
export jd_shopFollowGiftId="12384697"
export jd_shopCollectGiftId="12384697"
##知识超人
export jd_wxKnowledgeActivity_num="20"
##加购有礼
export jd_wxCollectionActivity_openCard="true"
export jd_wxCollectionActivity_num="20"
export jd_wxCollectionActivity_blacklist=""
##店铺抽奖通用
export LUCK_DRAW_OPENCARD="true"
export LUCK_DRAW_NUM="20"
##分享有礼-加密
export jd_wxShareActivity_helpnum="4" ##// 需要助力的账号数量
export jd_wxShareActivity_blacklist="" ##// 黑名单 用&隔开 pin值

export jd_drawCenter_addCart="true" ##// 是否做加购任务，默认不做,店铺抽奖中心
export JD_SIGN_KRAPI="http://192.168.31.4:9527/jd/sign" ##自定义接口
export DPCJID="12020454&819750&1000263054&10238570&10297874&768602&10377927&1000091608"
##邀请好友开团
export prodevactCode="f4c8bb8614264a51aee6295e3"
export prodevinvitePin='%E8%8B%A50808%E5%88%9D'
##
export LUCK_DRAW_URL="https://lzkj-isv.isvjcloud.com/lzclient/3e3844276cd1445496b3edeb3793f208/cjwx/common/entry.html?activityId=3e3844276cd1445496b3edeb3793f208"
export jd_drawCenter_activityId="3ce0bfe512664446bfe50d616ff2b833"
##
export jd_zdjr_activityId="acfa681177fc45e48ffec4c3bb7c7019"
export jd_zdjr_activityUrl="https://lzkjdz-isv.isvjcloud.com"
##
export jd_wxCollectionActivity_activityUrl="https://lzkj-isv.isvjd.com/wxCollectionActivity/activity2?activityId=5d338368113a46c5a39ca19c70c9de7f"
##
export jd_wxShareActivity_activityId="36a8e83a90024e15ab63779af8a7803a"
##
export jd_wxShopFollowActivity_activityUrl="https://lzkj-isv.isvjd.com/wxShopFollowActivity/activity?activityId=f3264d9527cf4acb86192f96519e8a1e"
##
export jd_cjhy_activityId="e1fec8fa4ca9426fbf9444a4bc09693c"
export jd_cjhy_activityUrl="https://cjhydz-isv.isvjcloud.com"
##
export jd_wxFansInterActionActivity_activityId="104f931de0254573b59a28a5e409e012"
##完善信息
export jd_completeInfoActivity_venderId="1000078502"
export jd_completeInfoActivity_activityId="ffd3f4d2705045c786146f2db781e4b2"
export jd_completeInfoActivity_openCard="true"
export jd_completeInfoActivity_activityUrl="https://cjhydz-isv.isvjcloud.com"
export jd_completeInfoActivity_num="20"  ##//运行账号数量，默认运行前7
##
export jd_wxCartKoi_activityId="37dc603747d941768226db14094c9c33"
##
##
export jd_wxgame_activityId="8553c3856025467d8f5c672362140562"
##
export M_WX_LUCK_DRAW_URL="https://lzkj-isv.isvjcloud.com/lzclient/1680002740344/cjwx/common/entry.html?activityId=36ed1d3cef334364819796a220862422&gameType=wxTurnTable&shopid=1000411724"
##
export M_WX_ADD_CART_URL="https://lzkj-isv.isvjcloud.com/wxCollectionActivity/activity2/332ac837b9c04598b1a8fe15d31df7a8?activityId=332ac837b9c04598b1a8fe15d31df7a8"
##
export jd_wxMcLevelAndBirthGifts_activityId="48a7cf50f3824a3fb0a76d824dfd1322"
##特效
export jd_wxShopGift_activityUrl="https://lzkj-isv.isvjd.com/wxShopGift/activity?activityId=1acf42aa1cb54b328224b71c6f3ec749"
##
export jd_lottery_activityUrl="https://txzj-isv.isvjcloud.com/lottery/home?a=RDIwRTljZEhGQ3YwL1ZxOVRR"
export jd_collect_item_activityUrl="https://txzj-isv.isvjcloud.com/collect_item/home?a=d2NKcmg2azJGV2diS2pNSEJB"
export jd_cart_item_activityUrl="https://txzj-isv.isvjcloud.com/cart_item/home?a=ZE1MYzJFdlBrS1dRZmI1cDFB"
## 微定制组队瓜分
export jd_wdz_activityId="55b00bdb708848c0b7752144c6f54680"
export jd_wdz_activityUrl="https://cjhydz-isv.isvjcloud.com"
##知识超人
export jd_wxKnowledgeActivity_activityUrl="https://lzkj-isv.isvjcloud.com/wxKnowledgeActivity/activity/9680271?activityId=b5b2536c643849649fb0c5a4696644b4"
##邀好友赢大礼
export jd_inv_authorCode="cc3cede22c104a7c8a40f8d95b8cba39"
export jd_fxyl_activityId="13cc006daac846f493208866d5d99f29"
export M_WX_CENTER_DRAW_URL="https://lzkj-isv.isvjcloud.com/drawCenter/activity?activityId=3ce0bfe512664446bfe50d616ff2b833&shopid=1000001143"
export WXGAME_ACT_ID="669154dfe9234fc0b67736dfbba49023"
export jd_wxSecond_activityId="b967ae5623b045a5889f468e963a4114"
export jd_wxCollectCard_activityId="aadff45597284263985cd3b503c7faa6"
export jd_lzaddCart_activityId="290087b44f104324b0b83d38d3ff066a"
export jd_cjhy_wxCollectionActivityId="c5e56cd35add467bbfaff3d41167241a"
export jd_lzkj_loreal_invite_url="https://lzkj-isv.isvjcloud.com/prod/cc/interactsaas/index?activityType=10070&templateId=7fab7995-298c-44a1-af5a-f79c520fa8a888&activityId=1615219770400219138"
###心动贩卖机
#export krdraw="100"
export opencard_draw="5"
export jd_categoryUnion_activityId="5213bdfdb5774dc788b4246022288048"
export jd_wxBuildActivity_activityId="2ff46b8961fc448c9c6c3939e4dbb0a1"
export DPLHTY="|jd_realme_0325"

export jd_wxUnPackingActivity_activityId="cf3f6be374d6421997d1a5f32db1c571"
export jd_teamFLP="活动ID"
export jd_teamAJ="活动ID"
export JD_Lottery="7f7f81b6c44446199189d8400e1853d1"
export M_WX_TEAM_URL="https://cjhydz-isv.isvjcloud.com/wxTeam/activity?activityId=e1fec8fa4ca9426fbf9444a4bc09693c&signUuid=5b26299f983b42eabbd0042dec63f37b&shareuserid4minipg=BC7Wt5oNpfp41CwS3IGUEvL7ldxmgdCpzmNX2HGi4eBuw30v%252FPoVBgxrRDHHbTlt&shopid=1000100946"
export jd_showInviteJoin_activityUrl="https://jinggeng-isv.isvjcloud.com/ql/front/showInviteJoin?id=9e8080ad8599a94f01859aabe24d47ee&user_id=11651921"
export jd_lzkj_wxCollectionActivityId="ebd9541d06c84f5d8b599b740ed325c0"
export jd_collect_shop_activityUrl="https://txzj-isv.isvjcloud.com/collect_shop/home?a=WVZHejJrS0JjSUNTM2lKWFVR"
export JD_JOYOPEN="7a00bcdd5bb645b39583b6c57d8ae343"
