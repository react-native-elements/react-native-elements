"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeStyles = exports.useTheme = exports.withTheme = exports.withBadge = exports.ThemeContext = exports.ThemeConsumer = exports.ThemeProvider = exports.normalize = exports.registerCustomIconType = exports.getIconType = exports.colors = exports.Tooltip = exports.Tile = exports.Text = exports.TabView = exports.Tab = exports.Switch = exports.SpeedDial = exports.SocialIcon = exports.Slider = exports.SearchBar = exports.Rating = exports.PricingCard = exports.Overlay = exports.ListItem = exports.LinearProgress = exports.Input = exports.Image = exports.Icon = exports.Header = exports.FAB = exports.Divider = exports.Dialog = exports.Chip = exports.CheckBox = exports.Card = exports.ButtonGroup = exports.Button = exports.BottomSheet = exports.Badge = exports.Avatar = exports.AirbnbRating = void 0;
// UI references
// https://ionicframework.com/docs/components/#buttons
// https://material.io/guidelines/components/buttons.html#buttons-raised-buttons
// https://material.angularjs.org/latest/demo/button
// Core
const AirbnbRating_1 = __importDefault(require("./AirbnbRating"));
exports.AirbnbRating = AirbnbRating_1.default;
const Avatar_1 = __importDefault(require("./Avatar"));
exports.Avatar = Avatar_1.default;
const Badge_1 = __importStar(require("./Badge"));
exports.Badge = Badge_1.default;
Object.defineProperty(exports, "withBadge", { enumerable: true, get: function () { return Badge_1.withBadge; } });
const BottomSheet_1 = __importDefault(require("./BottomSheet"));
exports.BottomSheet = BottomSheet_1.default;
const Button_1 = __importDefault(require("./Button"));
exports.Button = Button_1.default;
const ButtonGroup_1 = __importDefault(require("./ButtonGroup"));
exports.ButtonGroup = ButtonGroup_1.default;
const Card_1 = __importDefault(require("./Card"));
exports.Card = Card_1.default;
const CheckBox_1 = __importDefault(require("./CheckBox"));
exports.CheckBox = CheckBox_1.default;
const Chip_1 = __importDefault(require("./Chip"));
exports.Chip = Chip_1.default;
const Dialog_1 = __importDefault(require("./Dialog"));
exports.Dialog = Dialog_1.default;
const Divider_1 = __importDefault(require("./Divider"));
exports.Divider = Divider_1.default;
const FAB_1 = __importDefault(require("./FAB"));
exports.FAB = FAB_1.default;
const Header_1 = __importDefault(require("./Header"));
exports.Header = Header_1.default;
const Icon_1 = __importDefault(require("./Icon"));
exports.Icon = Icon_1.default;
const Image_1 = __importDefault(require("./Image"));
exports.Image = Image_1.default;
const Input_1 = __importDefault(require("./Input"));
exports.Input = Input_1.default;
const LinearProgress_1 = __importDefault(require("./LinearProgress"));
exports.LinearProgress = LinearProgress_1.default;
const ListItem_1 = __importDefault(require("./ListItem"));
exports.ListItem = ListItem_1.default;
const Overlay_1 = __importDefault(require("./Overlay"));
exports.Overlay = Overlay_1.default;
const PricingCard_1 = __importDefault(require("./PricingCard"));
exports.PricingCard = PricingCard_1.default;
const Rating_1 = __importDefault(require("./Rating"));
exports.Rating = Rating_1.default;
const SearchBar_1 = __importDefault(require("./SearchBar"));
exports.SearchBar = SearchBar_1.default;
const Slider_1 = __importDefault(require("./Slider"));
exports.Slider = Slider_1.default;
const SocialIcon_1 = __importDefault(require("./SocialIcon"));
exports.SocialIcon = SocialIcon_1.default;
const SpeedDial_1 = __importDefault(require("./SpeedDial"));
exports.SpeedDial = SpeedDial_1.default;
const Switch_1 = __importDefault(require("./Switch"));
exports.Switch = Switch_1.default;
const Tab_1 = __importDefault(require("./Tab"));
exports.Tab = Tab_1.default;
const TabView_1 = __importDefault(require("./TabView"));
exports.TabView = TabView_1.default;
const Text_1 = __importDefault(require("./Text"));
exports.Text = Text_1.default;
const Tile_1 = __importDefault(require("./Tile"));
exports.Tile = Tile_1.default;
const Tooltip_1 = __importDefault(require("./Tooltip"));
exports.Tooltip = Tooltip_1.default;
const config_1 = require("./config");
Object.defineProperty(exports, "colors", { enumerable: true, get: function () { return config_1.colors; } });
Object.defineProperty(exports, "ThemeProvider", { enumerable: true, get: function () { return config_1.ThemeProvider; } });
Object.defineProperty(exports, "ThemeConsumer", { enumerable: true, get: function () { return config_1.ThemeConsumer; } });
Object.defineProperty(exports, "ThemeContext", { enumerable: true, get: function () { return config_1.ThemeContext; } });
Object.defineProperty(exports, "withTheme", { enumerable: true, get: function () { return config_1.withTheme; } });
Object.defineProperty(exports, "makeStyles", { enumerable: true, get: function () { return config_1.makeStyles; } });
Object.defineProperty(exports, "useTheme", { enumerable: true, get: function () { return config_1.useTheme; } });
const getIconType_1 = __importStar(require("./helpers/getIconType"));
exports.getIconType = getIconType_1.default;
Object.defineProperty(exports, "registerCustomIconType", { enumerable: true, get: function () { return getIconType_1.registerCustomIconType; } });
const normalizeText_1 = __importDefault(require("./helpers/normalizeText"));
exports.normalize = normalizeText_1.default;
