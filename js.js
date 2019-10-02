'use strict'
function stripUrlParams(url, paramsToStrip){
  const regExp = paramsToStrip ? new RegExp(`[${paramsToStrip.join('')}]=\\d`,'g') : null;
  const urlParts = regExp ? url.split(/[?&]/).map(item => !regExp.test(item) ? item : '') : url.split(/[?&]/);
  const siteUrl = urlParts[0];
  const queryParams = urlParts.splice(1)
  .map((item, index, arr) => {
    let corresponceItemIndex = arr.findIndex((i, ind) => i[0] === item[0] && ind !== index);
    let isItemUnique = corresponceItemIndex === -1;

    if (isItemUnique || index === 0 || index < corresponceItemIndex) {
      return item;
    } 
  })
  .filter(item => item&&item.length > 0);

  return `${siteUrl}${queryParams.length ? '?' : ''}${queryParams.join("&")}`;
}

console.log(stripUrlParams('www.codewars.com?a=1&b=2&c=1&a=2&c=3'))

var url1 = 'www.codewars.com?a=1&b=2'
var url2 = 'www.codewars.com?a=1&b=2&a=1&b=3'
var url3 = 'www.codewars.com?a=1'
var url4 = 'www.codewars.com'

console.log(stripUrlParams1(url1),stripUrlParams1(url1) == url1);
console.log(stripUrlParams1(url2),stripUrlParams1(url2) == url1);
console.log(stripUrlParams1(url2, ['b']), stripUrlParams1(url2, ['b']) == url3);
console.log(stripUrlParams1(url4, ['b']),stripUrlParams1(url4, ['b']) == url4);


function stripUrlParams1(url, paramsToStrip){
  return url.replace(/&?([^?=]+)=.+?/g, function(m, p1, qPos) {
    return url.indexOf(p1 + '=') < qPos || (paramsToStrip||[]).indexOf(p1) > -1 ? "": m;
   });
}