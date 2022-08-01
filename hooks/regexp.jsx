/**
  * * regular Expression 
  * filter text
  *  
  * bold -> {b word b}
  * br -> {br }
  * 
*/

const useRegExp = (content) => {
  const text = useRef(content);

  const regBold = new RegExp(/((\{b)\s(.+?(\s\w+){0,})\s(b\}))/gi);
  const regBr = new RegExp(/(\{br\s\})/gi);

  const applyBold = text.current.replace(regBold, '<strong>$3</strong>')
  const applyBr = applyBold.replace(regBr, '<br />')

  text.current = applyBr;

  return text.current;
};