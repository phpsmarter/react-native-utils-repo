//时间戳转换的方法
export const formatDateString = (timestamp) => {
  const date = new Date(parseInt(timestamp) * 1000); //日期转换
  const year = date.getFullYear();//年的转换
  const month = parseInt(date.getMonth()) + 1; //月的转换
  const day = date.getDate();   //天的转换
  return `${year}-${month}-${day}`;  //返回的时间的格式
};

export const formatStringWithHtml = (originString) => {
  const newString = originString.replace(/&nbsp;/g, ' ').replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
  return newString;
};
