(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{102:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return c}));var a=r(3),o=r(7),n=(r(0),r(132)),i={id:"t_visual-properties",title:"Visual Properties",sidebar_label:"Visual Properties"},l={unversionedId:"t_visual-properties",id:"t_visual-properties",isDocsHomePage:!1,title:"Visual Properties",description:"Resizing Table Columns",source:"@site/docs/t_visual-properties.md",slug:"/t_visual-properties",permalink:"/docs/t_visual-properties",editUrl:"https://github.com/chloetz/BIRT-Dev/edit/master/website/docs/t_visual-properties.md",version:"current",sidebar_label:"Visual Properties",sidebar:"someSidebar",previous:{title:"Tools",permalink:"/docs/t_tools"},next:{title:"Templates & Examples",permalink:"/docs/template-introduction"}},b=[{value:"Resizing Table Columns",id:"resizing-table-columns",children:[]},{value:"Setting the Background Color",id:"setting-the-background-color",children:[]},{value:"Setting the Font",id:"setting-the-font",children:[]},{value:"Formatting Data",id:"formatting-data",children:[]},{value:"Setting a Border",id:"setting-a-border",children:[]},{value:"More on Properties",id:"more-on-properties",children:[]}],p={toc:b};function c(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"resizing-table-columns"},"Resizing Table Columns"),Object(n.b)("p",null,"Let's adjust the size of the table columns. Tables & columns can be sized using absolute sizes (inches, centimeters), or relative sizes (percentage of the width of the page.) Here, we'll adjust the column widths by directly changing them in the report layout. To do this:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Click the Layout tab to switch back to the report layout.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},'Display, then click on the table tab to display the "scaffolding."')),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},'Find the black line that separates the "City" and "State" column headings.')),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"With the cursor over this line, hold down the left mouse button and resize the column to be about big enough to hold the two-letter state code and label.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Repeat the above to resize the city column."))),Object(n.b)("h2",{id:"setting-the-background-color"},"Setting the Background Color"),Object(n.b)("p",null,"Let's dress up the state heading by setting the row's background color. To do this:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Select the state group header row (first group header) by clicking on the shaded box to the left of the row. (Remember to display, then click on the table tab to display the scaffolding.)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Locate or open the Property Editor.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"A list of property types appears at the left of the view. Click on the General group.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Find the Background color field. Click on the empty gray button to display the color picker.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Pick the blue color third from the right in the top row. This is a standard color, but is a bit too dark for our needs.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},'Click on the "Define Custom Colors" button.')),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Take the right-most slider (saturation) and move it up to produce a very light blue.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Click OK."))),Object(n.b)("h2",{id:"setting-the-font"},"Setting the Font"),Object(n.b)("p",null,"Now, let's give the state a bold font. We'll also dress up the city group heading by giving it a dark blue, bold, larger font. To do this:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Select the state Data Element. (it's located below the state label.)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Switch to the General property group in the Property Editor.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},'Find the Font size field. Change the size to "Large".')),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Click the ","[B]"," (bold) button to make the font bold.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Select the city Data Element.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Again, switch to the General property group.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Set the font size to Large.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Click on the Font Color button.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The color chooser again opens. Again choose the blue that is third from the right in the top row.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Click OK."))),Object(n.b)("h2",{id:"formatting-data"},"Formatting Data"),Object(n.b)("p",null,"We want to format the phone numbers so that they have correct North American format: (123) 555-1212. We do this by applying a string format to the phone number field. Formats are also available for dates and numbers."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Select the phone number Data Element.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Switch to the Format String page in the Property Editor.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Choose Custom for Format String as.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Choose Phone Number from the list.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In the Format Code field, add a space after the closing parenthesis to produce the following:")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"(@@@) @@@-@@@@"))),Object(n.b)("h2",{id:"setting-a-border"},"Setting a Border"),Object(n.b)("p",null,'Next, let\'s put a "drop shadow" border around our table.'),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Click on the table tab.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Select the Borders page in the Property Editor.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Set the Style field to a solid line. (This is the default.)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Set the Color field to a black. (Use the color name pull-down, or choose the bottom left color in the color picker.) (This is the default.)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Set the Width property to the thinnest line.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Click the top, bottom, left and right border buttons. A thin border appears around the table.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Switch to the Properties view (Window->Show View->Properties) to specify that a wider border should be used for the bottom and right sides.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Click on the table tab to initialize the Properties view with the table's properties.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Expand the Box node in the Properties View and set the Border bottom width and Border left width fields to medium."))),Object(n.b)("h2",{id:"more-on-properties"},"More on Properties"),Object(n.b)("p",null,"BIRT provides a wide variety of properties for formatting report items. The properties are based on the W3C CSS (Cascading Style Sheet) standard. If you've ever used CSS to format HTML, you are well on your way to understanding formatting in BIRT."))}c.isMDXComponent=!0},132:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var a=r(0),o=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),c=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),s=c(r),h=a,d=s["".concat(i,".").concat(h)]||s[h]||u[h]||n;return r?o.a.createElement(d,l(l({ref:t},p),{},{components:r})):o.a.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=h;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<n;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);