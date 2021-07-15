"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rating = void 0;
const react_1 = __importDefault(require("react"));
const react_native_ratings_1 = require("react-native-ratings");
/** Ratings are used to collect measurable feedback from users.
 * Use Rating over an Input where imagery can increase user interaction.
 * This component is imported from [react-native-ratings](https://github.com/Monte9/react-native-ratings).
 * There are two tyoes of rating - TapRating and SwipeRating.
 * This documentation is for Swipe Rating version. */
const Rating = () => {
    return <react_native_ratings_1.Rating />;
};
exports.Rating = Rating;
exports.Rating.displayName = 'Rating';
