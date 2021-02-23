(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{403:function(t,s,a){"use strict";a.r(s);var e=a(41),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[t._v("本模块提供两种安装方式，分别是 Docker 和编译安装。")]),t._v(" "),a("h2",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[t._v("#")]),t._v(" Docker")]),t._v(" "),a("p",[t._v("本模块在根目录提供了 "),a("code",[t._v("Dockerfile")]),t._v(" 文件用来指导镜像的构建。\n您可以运行下面的命令构建一个名为 "),a("code",[t._v("nginx:stable-alpine-with-ngx_waf")]),t._v(" 的镜像。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("docker build -t nginx:stable-alpine-with-ngx_waf --build-arg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("CHANGE_SOURCE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("本镜像基于 Docker 官方的镜像 "),a("code",[t._v("nginx:stable-alpine")]),t._v(" 构建，\n使用方法详见 "),a("a",{attrs:{href:"https://hub.docker.com/_/nginx/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker 官方镜像文档"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("当 "),a("code",[t._v("CHANGE_SOURCE")]),t._v(" 为 "),a("code",[t._v("true")]),t._v(" 时会使用中国境内的软件源来加速资源下载速度，反之则使用默认软件源。\n本参数默认值为 "),a("code",[t._v("false")]),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"编译安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译安装"}},[t._v("#")]),t._v(" 编译安装")]),t._v(" "),a("p",[t._v("nginx 提供两种安装模块的方式，即「静态链接」和「动态加载」，通过两种方式安装的模块也分别称为「静态模块」和「动态模块」。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("编译安装模块可能需要一些依赖，比如 gcc，请自行解决依赖问题，本文不提供这类信息。")])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("重要信息")]),t._v(" "),a("p",[t._v("编译安装一个新的模块需要知道当前的 nginx 的 "),a("code",[t._v("configure")]),t._v(" 脚本的参数，您可以通过运行 "),a("code",[t._v("nginx -V")]),t._v(" 来获取。\n下面是一个例子。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("nginx version: nginx/1.19.6\nbuilt by gcc 9.3.0 (Ubuntu 9.3.0-17ubuntu1~20.04)\nbuilt with OpenSSL 1.1.1i  8 Dec 2020\nTLS SNI support enabled\nconfigure arguments: --with-mail=dynamic --with-openssl=/usr/local/src/openssl-OpenSSL_1_1_1i --prefix=/usr/local/nginx --user=nginx --group=nginx --with-file-aio --with-http_ssl_module --with-http_geoip_module --with-http_v2_module --with-http_realip_module --with-stream_ssl_preread_module --with-http_addition_module --with-http_xslt_module=dynamic --with-http_image_filter_module=dynamic --with-http_sub_module --with-http_dav_module --with-http_flv_module --with-http_mp4_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_random_index_module --with-http_secure_link_module --with-http_degradation_module --with-http_slice_module --with-http_perl_module --with-http_stub_status_module --with-http_auth_request_module --with-mail=dynamic --with-mail_ssl_module --with-pcre --with-pcre-jit --with-stream=dynamic --with-stream_ssl_module --with-debug --with-cc-opt='-O3 -g -pipe -Wall -Wp,-D_FORTIFY_SOURCE=2 -fexceptions -fstack-protector-strong --param=ssp-buffer-size=4 -grecord-gcc-switches -m64 -mtune=generic'\n")])])]),a("p",[t._v("务必记住 "),a("code",[t._v("configure arguments:")]),t._v(" 后面的内容，下文中将使用 "),a("code",[t._v("ARG")]),t._v(" 来代替这块内容。")])]),t._v(" "),a("h3",{attrs:{id:"静态模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态模块"}},[t._v("#")]),t._v(" 静态模块")]),t._v(" "),a("p",[t._v("安装静态模块需要重新编译整个 nginx，花费的时间相对于安装动态模块比较长。")]),t._v(" "),a("p",[t._v("首先下载对应版本的 nginx，"),a("a",{attrs:{href:"http://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载页面"),a("OutboundLink")],1),t._v("。\n下面将以 "),a("code",[t._v("nginx-1.18.0")]),t._v(" 为例。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /usr/local/src\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" http://nginx.org/download/nginx-1.18.0.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -zxf nginx-1.18.0.tar.gz\n")])])]),a("p",[t._v("然后下载本模块的源码，下文将使用稳定版的源码。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /usr/local/src\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone -b master https://github.com/ADD-SP/ngx_waf.git\n")])])]),a("p",[t._v("接下来应该运行配置脚本。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /usr/local/src/nginx-1.18.0\n./configure ARG --add-module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/src/ngx_waf\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[a("code",[t._v("ARG")]),t._v(" 的含义见"),a("a",{attrs:{href:"#%E7%BC%96%E8%AF%91%E5%AE%89%E8%A3%85"}},[t._v("编译安装")]),t._v("。")])]),t._v(" "),a("p",[t._v("接着您开始编译了")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不使用并行编译")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用并行编译，其中 n 建议设置为 CPU 的核心数。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" -j n\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("并行会提升编译速度，但是有概率出现莫名奇妙的错误，如果并行编译出错，可以禁用并行编译。")])]),t._v(" "),a("p",[t._v("最后您应该关闭 nginx，然后替换 nginx 的二进制文件，\n此处假设 nginx 的二进制文件的绝对路径为 "),a("code",[t._v("/usr/local/nginx/sbin/nginx")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" objs/nginx /usr/local/nginx/sbin/nginx\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("热部署")]),t._v(" "),a("p",[t._v("如果您不想在替换二进制文件时关闭 nginx，可以参考"),a("a",{attrs:{href:"http://nginx.org/en/docs/control.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档的热部署方案"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("h3",{attrs:{id:"动态模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态模块"}},[t._v("#")]),t._v(" 动态模块")]),t._v(" "),a("p",[t._v("编译安装动态模块并不需要重新编译整个 nginx，只需要重新编译所有的模块，所以\n速度相对静态模块快一些，这也是本文档推荐的方式。")]),t._v(" "),a("p",[t._v("下载 nginx 源码和模块源码的过程同"),a("a",{attrs:{href:"#%E9%9D%99%E6%80%81%E6%A8%A1%E5%9D%97"}},[t._v("静态模块")]),t._v("，不再赘述。")]),t._v(" "),a("p",[t._v("运行配置脚本")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("./configure ARG --add-dynamic-module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/src/ngx_waf\n")])])]),a("p",[t._v("然后开始编译动态模块")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" modules\n")])])]),a("p",[t._v("接着您应该关闭 nginx，然后将动态模块拷贝到模块目录，\n此处假设模块目录的绝对路径为 "),a("code",[t._v("/usr/local/nginx/modules")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" objs/*.so /usr/local/nginx/modules\n")])])]),a("p",[t._v("最后在 nginx 的配置文件顶部添加一行")]),t._v(" "),a("div",{staticClass:"language-vim extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vim"}},[a("code",[t._v("load_module "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/local/nginx/modules/ngx_http_waf_module.so"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);