(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{132:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,m=b["".concat(l,".").concat(u)]||b[u]||d[u]||i;return a?r.a.createElement(m,o(o({ref:t},s),{},{components:a})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(132)),l={id:"installation",title:"Installation",sidebar_label:"Installation"},o={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"Designer Install",source:"@site/docs/installation.md",slug:"/installation",permalink:"/docs/installation",editUrl:"https://github.com/chloetz/BIRT-Dev/edit/master/website/docs/installation.md",version:"current",sidebar_label:"Installation",sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/overview"},next:{title:"Create a Report",permalink:"/docs/create-a-report"}},c=[{value:"Designer Install",id:"designer-install",children:[]},{value:"Framework Designer Install",id:"framework-designer-install",children:[]},{value:"JDBC Drivers",id:"jdbc-drivers",children:[]},{value:"Deploying to a Java EE Sever",id:"deploying-to-a-java-ee-sever",children:[]},{value:"Common Problems",id:"common-problems",children:[]}],s={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"designer-install"},"Designer Install"),Object(i.b)("p",null,"BIRT can be downloaded and installed in different ways:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The complete BIRT designer or RCP Designer can be installed by downloading the required package here.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"or by downloading the Eclipse IDE for Java and Report Developers Package.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"or through the update manager as described here. Make sure to use the latest Update Site. Update Manager URLs as a package that only contains the BIRT plugins (Framework) from the download page. Note additional requirements are located on the download page as well. These include dependencies on other Eclipse projects. These dependencies are listed on the download page for the specific build."))),Object(i.b)("p",null,"All of the above downloads contain the BIRT designer. The BIRT project has many additional downloads, including a runtime for deploying the BIRT engine in a web application or standalone Java application. The additional downloads are available for any build of BIRT by selecting the appropriate build here."),Object(i.b)("p",null,"Once you have downloaded one of the above packages, unzip the package into your chosen directory. This will create an eclipse directory that contains eclipse.exe. Run eclipse.exe to start the designer.\nCreate a Windows Shortcut"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"From the desktop, right click, choose New -> Shortcut.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'For location, enter "C:\\Program Files\\eclipse\\eclipse.exe" (without quotes.)*')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Click Next")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Enter "Eclipse" for the shortcut name.'))),Object(i.b)("h2",{id:"framework-designer-install"},"Framework Designer Install"),Object(i.b)("p",null,"As stated above, the framework install only contains the required BIRT plugins. The Framework install requires that you already have the Eclipse Platform, GEF, EMF, DTP and WTP packages. The specific version of each, is listed on the specific build's download page. Unzip each package into your eclipse directory.\nOptional Eclipse Link File"),Object(i.b)("p",null,"If you are installing the framework, you can download the BIRT framework and unzip the contents to any directory."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"After doing this, create a links directory in your installed Eclipse location (ie C:\\eclipse\\links).")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Within this directory create a file with a unique name like birt.link.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open the file you just created and enter path=drive:/pathtobirt (ie path=c:/birt)"))),Object(i.b)("h2",{id:"jdbc-drivers"},"JDBC Drivers"),Object(i.b)("p",null,'You will likely want to use your own JDBC driver with BIRT. Use the data source editor\'s JDBC driver management wizard. To start the wizard, open a BIRT report design, go to the Data Explorer view, right click on "Data Sources" and select "New Data Source". Choose "JDBC Data Source" and click "Next". In the next dialog, choose "Manage Drivers..." to bring up the "Manage JDBC Drivers" dialog.'),Object(i.b)("p",null,'In the "JAR Files" tab, click on "Add..." to add the JAR file required by your JDBC driver. Then go to the "Driver" tab to confirm that the list of drivers includes the new drivers added. You may also want to assign a display name and URL template for the new drivers in this tab.\nUpdating a BIRT Installation'),Object(i.b)("p",null,"If you have a version of BIRT installed, and want to install a newer version, do the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Close Eclipse.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Locate your Eclipse plugins directory. If you installed on Windows in the default location, this is "C:\\program files\\eclipse\\plugins".')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Delete all directories that start with "org.eclipse.birt".')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Download and install BIRT as described in the BIRT section above.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Restart Eclipse with the -clean option: eclipse -clean"))),Object(i.b)("h2",{id:"deploying-to-a-java-ee-sever"},"Deploying to a Java EE Sever"),Object(i.b)("p",null,"Please see Setting up the BIRT Viewer.\nInstalling BIRT Language Packs on Windows"),Object(i.b)("p",null,"BIRT can be downloaded and installed in different ways:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Download the Language Pack for the desired product and extract into your eclipse install.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open the Regional and Language Options in the Control Panel and switch to the advanced tab.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Select the group 1 language you desire from the drop-down combo box.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Save changes and restart the system.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Launch Eclipse and select Window->Preferences->Report Design->Preview. Select the desired language from the drop-down combo box.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Restart Eclipse."))),Object(i.b)("h2",{id:"common-problems"},"Common Problems"),Object(i.b)("p",null,"Some problems are due to cached information within Eclipse. Eclipse caches information about plugins for faster startup. Adding BIRT as we did above may result in stale cached information. Symptoms of this problem include:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The BIRT perspective does not appear in Eclipse.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'You receive "An error occurred" dialogs when opening reports or using the BIRT UI.'))),Object(i.b)("p",null,"Cleaning Cached Plugin Information"),Object(i.b)("p",null,"The solution is to clean up the cached information. The recommended practice is to start Eclipse with the -clean option:"),Object(i.b)("p",null,"  ",Object(i.b)("strong",{parentName:"p"},"Enter:")," "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},' cd "\\Program Files\\eclipse" \n eclipse -clean  \n')),Object(i.b)("p",null,"Cleaning the Cache on Windows"),Object(i.b)("p",null,"If you are on Windows, and are not familiar with how to invoke Eclipse from the command line, do the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Choose Start->All Programs->Accessories->Command Prompt")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Move to the directory where you installed eclipse. If you installed Eclipse in the standard location, enter:"),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Enter:")," "),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-javascript"},' cd "\\Program Files\\eclipse" \n eclipse -clean   \n')))),Object(i.b)("p",null,"Eclipse will restart. Again check for the BIRT perspective."))}p.isMDXComponent=!0}}]);