"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const config_1 = __importDefault(require("./config"));
const server = http_1.default.createServer((req, res) => {
    console.log("server is running");
    if (req.url == "/" && req.method == "GET") {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({
            message: "hello from node js with the typescript",
            path: req.url
        }));
    }
});
server.listen(config_1.default.port, () => {
    console.log(`server is running on port ${config_1.default.port}`);
});
