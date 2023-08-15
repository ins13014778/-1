import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as t,e as a}from"./app-489215df.js";const o={},n=a('<p>宽带升级到千兆网络后，电信全面更新了光猫，关闭了的光猫管理地址，只能通过官方 APP「网络管家」管理光猫。</p><h2 id="电信「网络管家」功能" tabindex="-1"><a class="header-anchor" href="#电信「网络管家」功能" aria-hidden="true">#</a> 电信「网络管家」功能</h2><ul><li>重启光猫；</li><li>开启 UPnp；</li><li>开启 DMZ 主机，建立端口映射；</li><li>建立虚拟服务器，内网穿透访问。</li></ul><h2 id="开启光猫端口映射、内网穿透" tabindex="-1"><a class="header-anchor" href="#开启光猫端口映射、内网穿透" aria-hidden="true">#</a> 开启光猫端口映射、内网穿透</h2><ol><li><p>登录路由器管理地址 192.168.X.X。这里以梅林 AC5300 为图例。</p><figure><img src="https://img.newzone.top/20180608183159.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>打开电信官方 APP「网络管家」，依次点击中间的「路由器图标」→「高级设置」→「DMZ 主机」，启用 DMZ 主机并绑定刚刚获得的路由器 WAN IP 地址 - 192.168.1.X 。</p><figure><img src="https://img.newzone.top/20180608185618.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p><strong>光猫内网穿透</strong>：当外网要访问局域网（192.168.1.3:1194）时，进入网络管家中「高级设置」→「虚拟服务器」，添加内部 IP 192.168.1.3、内部端口号 1194 和服务器端口号。服务器端口号可根据需求设置。假设光猫 IP 为 180.154.109.143，外网只需访问「180.154.109.143:12345」就可以计入局域网（192.168.1.3:1194）。</p><figure><img src="https://img.newzone.top/20190330175000.png?imageMogr2/auto-orient/strip|imageView2/2/h/600" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p><strong>路由端口转发</strong>：进入路由器「高级设置」-「外部网络（WAN）」-「端口转发」，按要求设置端口。我这是 eMule TCP 和 UDP 转发，设置完成后，变成 High ID。</p></li></ol><p>PS. 新版光猫<strong>不需要管理员权限</strong>就可以获取端口映射、DMZ、UPnp 等权限，但光猫桥接功能也很难破解了。</p>',6),r=[n];function l(g,p){return e(),t("div",null,r)}const f=i(o,[["render",l],["__file","2018-06-08-baizhuo_gp1700.html.vue"]]);export{f as default};
