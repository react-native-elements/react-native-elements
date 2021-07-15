"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckBoxIcon = void 0;
const react_1 = __importDefault(require("react"));
const getIconType_1 = __importDefault(require("../../helpers/getIconType"));
const CheckBoxIcon = ({ checked, onIconPress, onLongIconPress, size = 24, checkedIcon = 'check-square-o', uncheckedIcon = 'square-o', iconType, checkedColor, uncheckedColor = '#bfbfbf', }) => {
    if (checked && react_1.default.isValidElement(checkedIcon)) {
        return checkedIcon;
    }
    if (!checked && react_1.default.isValidElement(uncheckedIcon)) {
        return uncheckedIcon;
    }
    const VectorIcon = iconType
        ? getIconType_1.default(iconType)
        : getIconType_1.default('font-awesome');
    return (<VectorIcon color={checked ? checkedColor : uncheckedColor} name={checked ? checkedIcon : uncheckedIcon} size={size || 24} style={{ minWidth: size || 24 }} onLongPress={onLongIconPress} onPress={onIconPress}/>);
};
exports.CheckBoxIcon = CheckBoxIcon;
