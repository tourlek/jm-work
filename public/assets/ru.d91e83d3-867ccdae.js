import{l as M}from"./form-input-329611a2.js";import"./index-dbd23a5d.js";import"./button-f840e959.js";var r="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),m="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),n="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),e="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),s=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function i(u,_){var D=u.split("_");return _%10===1&&_%100!==11?D[0]:_%10>=2&&_%10<=4&&(_%100<10||_%100>=20)?D[1]:D[2]}function t(u,_,D){var E={mm:_?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"};return D==="m"?_?"минута":"минуту":u+" "+i(E[D],+u)}var F=function(u,_){return s.test(_)?r[u.month()]:m[u.month()]};F.s=m;F.f=r;var C=function(u,_){return s.test(_)?n[u.month()]:e[u.month()]};C.s=e;C.f=n;var o={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:F,monthsShort:C,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:t,mm:t,h:"час",hh:t,d:"день",dd:t,M:"месяц",MM:t,y:"год",yy:t},ordinal:function(u){return u},meridiem:function(u){return u<4?"ночи":u<12?"утра":u<17?"дня":"вечера"}};M.locale(o,null,!0);export{o as default};
