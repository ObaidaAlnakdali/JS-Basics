
const stringSize = text => {
    return text.length;
};

const replaceCharacterE = (text) => {
    return text.replace("e", " ");
}
const concatString = (text1, text2) => {
    return text1.concat(text2);
}
const showChar5 = (text) => {
    return text.charAt(4);
}
const showChar9 = (text) => {
    return text.substring(0, 9);
}
const toCapitals = (text) => {
    return text.toUpperCase();
}
const toLowerCase = (text) => {
    return text.toLowerCase();
}
const removeSpaces = (text) => {
    return text.replace(/^\s+|\s+$/gm,'');
    // return text.trim();
}
const IsString = (text) => {
    return text.IsString = true;
}

const getExtension = (text) => {
    return text.substr(text.indexOf(".") + 1);
}

const countSpaces = (text) => {
    return text.split(" ").length - 1 ;
}

const InverseString = (text) => {
    return text.split("").reverse().join("");
}

const power = (x, y) => {
    return Math.pow(x, y);
}

const absoluteValue = (num) => {
    return Math.abs(num);
}

const absoluteValueArray = (array) => {
    let arrays = []
     for (let i = 0; i < array.length; i++) {
        arrays.push(Math.abs(array[i])); 
    }
    return arrays;
}

const circleSurface = (radius) => {
    return Math.round(Math.PI * radius * radius);
}

const hypothenuse = (ab, ac) => {
    return Math.hypot(ab, ac);
}

const BMI = (weight, height) => {
    return parseFloat((weight / (height * height)).toFixed(2)) ;
}

const createLanguagesArray = () => {
    return ["Html","CSS","Java","PHP"];
}

const createNumbersArray = () => {
    return [0,1,2,3,4,5];
}

const replaceElement = (languages) => {
    languages[2] = "Javascript";
    return languages;
}

const addElement = (languages) => {
    languages.push('Ruby');
    languages.push('Python');
    return languages;
}

const addNumberElement = (numbers) => {
    numbers.unshift(-2, -1);
    return numbers;
}

const removeFirst = (languages) => {
    languages.shift();
    return languages;
}

const removeLast = (languages) => {
    languages.pop();
    return languages;
}

const convertStrToArr = (social_arr) => {
    const convert = social_arr.split(",");
    return convert;
}

const convertArrToStr = (languages) => {
    const convert = languages.join();
    return convert;
}

const sortArr = (social_arr) => {
    const sort = social_arr.sort();
    return sort;
}

const invertArr = (social_arr) => {
    const sort = social_arr.reverse();
    return sort;
}