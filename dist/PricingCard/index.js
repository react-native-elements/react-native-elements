"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricingCard = void 0;
const config_1 = require("../config");
const PricingCard_1 = require("./PricingCard");
Object.defineProperty(exports, "PricingCard", { enumerable: true, get: function () { return PricingCard_1.PricingCard; } });
exports.default = config_1.withTheme(PricingCard_1.PricingCard, 'PricingCard');
