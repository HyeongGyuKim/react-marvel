// import {DISPATCH_CODE} from "../constants/index.js";

export const getOptionsByEnum = (enumValue) => {
    const options = [];
    for (const [key, value] of Object.entries(enumValue)) {
        options.push({value: key, title: value});
    }
    return options;
}

export const getAllKeyByDispatchCode = () => {
    const keys = [];
    // eslint-disable-next-line no-unused-vars
    for (const [_, value] of Object.entries(DISPATCH_CODE)) {
        keys.push(value.key);
    }
    return keys.join('');
};

export const getValueByKey = (enumValue, key, defValue = '') => enumValue[key] || defValue;

export const getUserId = () => {
    const userInfo = localStorage.getItem('userInfo') ?? '{userId: ""}';
    return JSON.parse(userInfo).userId ?? '';
}