const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');
const screen3 = document.getElementById('screen3');
const screen4 = document.getElementById('screen4');
const screen5 = document.getElementById('screen5');
const screen6 = document.getElementById('screen6');
const screen7 = document.getElementById('screen7');
const screen8 = document.getElementById('screen8');
const screen9 = document.getElementById('screen9');

const text = 'у лукоморья клён зелёный; златая цепь на клён том; и днём и ночью кот учёный; всё ходит по цепи кругом; идёт направо — песнь заводит; налево — сказку говорит; там чудеса: там леший бродит; русалка на ветвях сидит; там на неведомых дорожках; следы невиданных зверей; избушка там на курьих ножках; стоит без окон, без дверей; там лес и дол видений полны; там о заре прихлынут волны; на брег песчаный и пустой; и тридцать витязей прекрасных; чредой из вод выходят ясных; и с ними дядька их морской; там королевич мимоходом; пленяет грозного царя; там в облаках перед народом; через леса, через моря; колдун несёт богатыря; в темнице там царевна тужит; а бурый волк ей верно служит; там ступа с бабою ягой; идёт, бредёт сама собой; там царь кащей над златом чахнет; там русский дух… там русью пахнет!; и там я был, и мёд я пил; у моря видел клён зелёный; под ним сидел, и кот учёный; свои мне сказки говорил.';

console.log(1, text.length);
screen1.innerHTML = `1. Количество символов в тексте: ${text.length}`;

const result = text.replace(/;/g, ";\n");
console.log(2, result);
screen2.innerHTML = `2. Текст с переносами строк: \n ${result}`;

const substring = result.replace(/ /g, "");
console.log(3, substring);
screen3.innerHTML = `3. Текст с удалёнными пробелами: ${substring}`;

const newText = result.substring(28, 49);
console.log(4, newText);
screen4.innerHTML = `4. Извлечение подстроки: ${newText}`;

const replacedText = newText.replace(/клён/g, "дубе");
console.log(5, replacedText);
screen5.innerHTML = `5. Замена "клён" на "дубе": ${replacedText}`;

const replacedText2 = result.toUpperCase();
console.log(6, replacedText2);
screen6.innerHTML = `6. Строка result в верхнем регистре: ${replacedText2}`;

const replacedText3 = result.replace(/клён/g, "дуб");
console.log(7, replacedText3);
screen7.innerHTML = `7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`;

const index = text.indexOf('моря');
console.log(8, index);
screen8.innerHTML = `8. Индекс первого вхождения "моря": ${index}`;

const modifiedText = replacedText[0].toUpperCase() + replacedText.slice(1);
console.log(9, modifiedText);
screen9.innerHTML = `9. Строка с измененной первой буквой: ${modifiedText}`;