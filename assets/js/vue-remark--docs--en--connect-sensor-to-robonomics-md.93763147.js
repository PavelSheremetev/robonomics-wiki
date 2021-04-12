(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{MSRo:function(e,t,r){"use strict";r.r(t);var o=r("KHd+"),n=r("UQSp"),a=r("Kw5r");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a.a.config.optionMergeStrategies;var s={VueRemarkRoot:n.a},c=function(e){var t=e.options.components=e.options.components||{},r=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===i(s[e])&&"function"==typeof s[e].render||"function"==typeof s[e]&&"function"==typeof s[e].options.render?t[e]=s[e]:r[e]=function(){return s[e]}}))},l=a.a.config.optionMergeStrategies,d="__vueRemarkFrontMatter",u={excerpt:null,title:"Connect Sensor To Robonomics Network",contributors:["LoSk-p","Vourhey"],translated:!0};var p=function(e){e.options[d]&&(e.options[d]=u),a.a.util.defineReactive(e.options,d,u),e.options.computed=l.computed({$frontmatter:function(){return e.options[d]}},e.options.computed)},v=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("h2",{attrs:{id:"requiremets"}},[o("a",{attrs:{href:"#requiremets","aria-hidden":"true"}},[e._v("#")]),e._v("Requiremets")]),o("ul",[o("li",[e._v("ESP8266 Node MCU v3")]),o("li",[e._v("particle sensor SDS011")]),o("li",[e._v("micro USB cable")]),o("li",[e._v("connecting wires")])]),o("h2",{attrs:{id:"assembling"}},[o("a",{attrs:{href:"#assembling","aria-hidden":"true"}},[e._v("#")]),e._v("Assembling")]),o("h3",{attrs:{id:"connection-diagram"}},[o("a",{attrs:{href:"#connection-diagram","aria-hidden":"true"}},[e._v("#")]),e._v("Connection Diagram")]),o("p",[o("g-image",{attrs:{src:r("mtsL"),alt:"scheme"}})],1),o("h3",{attrs:{id:"connecting-sds011"}},[o("a",{attrs:{href:"#connecting-sds011","aria-hidden":"true"}},[e._v("#")]),e._v("Connecting SDS011")]),o("ul",[o("li",[e._v("Pin 1 (TX) -> (RX) Pin D1 (GPIO5)")]),o("li",[e._v("Pin 2 (RX) -> (TX) Pin D2 (GPIO4)")]),o("li",[e._v("Pin 3 (GND) -> GND")]),o("li",[e._v("Pin 4 (2.5m) -> unused")]),o("li",[e._v("Pin 5 (5V) -> VU")]),o("li",[e._v("Pin 6 (1m) -> unused")])]),o("p",[e._v("Sensor is shipped with a USB adapter and connection wires. You don't need USB adapter, so disconnect wires from it.")]),o("p",[o("g-image",{attrs:{src:r("/xWz"),alt:"disconnect"}})],1),o("p",[e._v('You may connect it to ESP via connecting wires "Female-Male":')]),o("p",[o("g-image",{attrs:{src:r("T02V"),alt:"f-m"}})],1),o("p",[e._v("And connect them to your ESP according to the connection diagram.")]),o("p",[e._v("Or you can use wires from USB adapter. Disconnect one wire: push on it with some sharp object and carefully pull the wire:")]),o("p",[o("g-image",{attrs:{src:r("+uYf"),alt:"extreme_con"}})],1),o("p",[e._v("Insert it to last connector:")]),o("p",[o("g-image",{attrs:{src:r("pdbf"),alt:"extr"}})],1),o("p",[e._v("Then cut the connector in the middle:")]),o("p",[o("g-image",{attrs:{src:r("ra+Z"),alt:"cut"}})],1),o("p",[e._v("And connect them to ESP according to the diagram:")]),o("p",[o("g-image",{attrs:{src:r("C2xw"),alt:"esp_con"}})],1),o("h3",{attrs:{id:"connecting-dht22"}},[o("a",{attrs:{href:"#connecting-dht22","aria-hidden":"true"}},[e._v("#")]),e._v("Connecting DHT22")]),o("ul",[o("li",[e._v("Pin 1 => 3V3")]),o("li",[e._v("Pin 2 => Pin D7 (GPIO13)")]),o("li",[e._v("Pin 3 => unused")]),o("li",[e._v("Pin 4 => GND")])]),o("h3",{attrs:{id:"connecting-bme280htu21d"}},[o("a",{attrs:{href:"#connecting-bme280htu21d","aria-hidden":"true"}},[e._v("#")]),e._v("Connecting BME280/HTU21D")]),o("ul",[o("li",[e._v("VCC -> Pin 3V3")]),o("li",[e._v("GND -> Pin GND")]),o("li",[e._v("SCL -> Pin D4 (GPIO2)")]),o("li",[e._v("SDA -> Pin D3 (GPIO0)")])]),o("h2",{attrs:{id:"device-firmware"}},[o("a",{attrs:{href:"#device-firmware","aria-hidden":"true"}},[e._v("#")]),e._v("Device Firmware")]),o("p",[e._v("Download "),o("code",{pre:!0},[e._v("airrohr-flasher")]),e._v(" from the "),o("a",{attrs:{href:"https://github.com/airalab/sensors-connectivity/releases",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("latest release")]),e._v(" for your OS. \nConnect ESP to computer via micro-USB and run flasher. ")]),o("h3",{attrs:{id:"for-linux"}},[o("a",{attrs:{href:"#for-linux","aria-hidden":"true"}},[e._v("#")]),e._v("For Linux:")]),o("p",[e._v("Firstly you need to add the user to "),o("code",{pre:!0},[e._v("dialout")]),e._v(" group:")]),o("pre",[o("code",{pre:!0,attrs:{class:"hljs language-bash"}},[e._v("sudo usermod -a -G dialout "),o("span",{pre:!0,attrs:{class:"hljs-variable"}},[e._v("$USER")])])]),o("p",[e._v("Then logout and login or restart computer.")]),o("p",[e._v("Now you can run flasher (don't forget to give it permission to execute):")]),o("pre",[o("code",{pre:!0,attrs:{class:"hljs language-bash"}},[e._v("chmod +x airrohr-flasher-linux\n./airrohr-flasher-linux")])]),o("h3",{attrs:{id:"for-windows"}},[o("a",{attrs:{href:"#for-windows","aria-hidden":"true"}},[e._v("#")]),e._v("For Windows:")]),o("p",[e._v("Unpack flasher and run it with double click.\nYou need to install drivers for the USB2serial chipset (Windows 10 should be able to automatically download these):")]),o("ul",[o("li",[e._v("Drivers for NodeMCU v3 (CH340): "),o("a",{attrs:{href:"http://www.wch.cn/downloads/file/5.html",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Windows")]),e._v(" ("),o("a",{attrs:{href:"https://d.inf.re/luftdaten/CH341SER.ZIP",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("2018/09/04 v3.4 mirror")]),e._v(")")])]),o("h3",{attrs:{id:"for-macos"}},[o("a",{attrs:{href:"#for-macos","aria-hidden":"true"}},[e._v("#")]),e._v("For MacOS")]),o("p",[e._v("Download flasher and run it.\nYou need to install drivers for the USB2serial chipset: ")]),o("ul",[o("li",[e._v("Drivers for NodeMCU v3 (CH340): "),o("a",{attrs:{href:"http://www.wch.cn/downloads/file/178.html",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("MacOS")]),e._v(" ("),o("a",{attrs:{href:"https://d.inf.re/luftdaten/CH341SER_MAC.ZIP",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("2018/09/04 v1.4 mirror")]),e._v(")")])]),o("p",[e._v("Choose firmware (English or Russian) and press upload. It will take a few minutes.")]),o("p",[o("g-image",{attrs:{src:r("kJT1"),alt:"flasher"}})],1),o("h2",{attrs:{id:"configuration"}},[o("a",{attrs:{href:"#configuration","aria-hidden":"true"}},[e._v("#")]),e._v("Configuration")]),o("p",[e._v("Reboot your ESP (simply reconnect USB to computer).\nThen connect to airRohr--xxxxxxx Wi-Fi network and in your browser write address 192.168.4.1:")]),o("p",[o("g-image",{attrs:{src:r("fCe+"),alt:"menu"}})],1),o("p",[e._v("Go to Configuration -> Wi-Fi Settings and add the information about your Wi-Fi network:")]),o("p",[o("g-image",{attrs:{src:r("c+7d"),alt:"config"}})],1),o("p",[e._v('Then press "Save configuration and restart" and ESP will be connected to the provided Wi-Fi network.')]),o("p",[o("g-image",{attrs:{src:r("l0MB"),alt:"save"}})],1),o("p",[e._v("Then find ESP in local network (for that your computer and ESP must be in one network). You can do it using airrohr-flasher. Run it, go to the Discovery tab and press Refresh, then you'll be able to see the address.")]),o("p",[o("g-image",{attrs:{src:r("V1ab"),alt:"addr"}})],1),o("p",[e._v("Open ESP local address in your browser, go to "),o("code",{pre:!0},[e._v("APIs")]),e._v(" tab in  "),o("code",{pre:!0},[e._v("Configuration")]),e._v(" and click "),o("code",{pre:!0},[e._v("Robonomics")]),e._v(". ")]),o("p",[o("g-image",{attrs:{src:r("j/wg"),alt:"robonomics"}})],1),o("blockquote",[o("p",[e._v("If you want to send data to your own server, enable "),o("code",{pre:!0},[e._v("Custom API")]),e._v(" and write your address and port ")])]),o("p",[e._v("Then go to "),o("code",{pre:!0},[e._v("Sensors")]),e._v(" tab, enable GPS and put in your coordinates. Also enable the sensors you connected:")]),o("p",[o("g-image",{attrs:{src:r("2wo5"),alt:"gps"}})],1),o("p",[e._v("Then press "),o("code",{pre:!0},[e._v("Save configuration and restart")]),e._v(".")]),o("h2",{attrs:{id:"results"}},[o("a",{attrs:{href:"#results","aria-hidden":"true"}},[e._v("#")]),e._v("Results")]),o("p",[e._v("Go to "),o("a",{attrs:{href:"https://sensors.robonomics.network/#/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("sensors.robonomics.network")]),e._v(", and you will see your sensor on the map.")]),o("p",[o("g-image",{attrs:{src:r("GgVi"),alt:"map"}})],1)])}),[],!1,null,null,null);"function"==typeof c&&c(v),"function"==typeof p&&p(v);t.default=v.exports}}]);