"use strict";

const chalk = require("chalk");
const cfonts = require("cfonts");

const clearConsole = () => {
  process.stdout.write(
    process.platform === "win32"
      ? "\x1B[2J\x1B[0f"
      : "\x1B[2J\x1B[3J\x1B[H"
  );
};

clearConsole();

// ===== BANNER UTAMA (FIX: stabil di Pterodactyl/web console) =====
cfonts.say("YNA-STORE", {
  font: "chrome",          // FIX: jangan "block" (sering pecah)
  align: "center",
  colors: ["cyan", "yellow"],
  background: "transparent",
  letterSpacing: 0,        // FIX: kecilin biar gak berantakan
  lineHeight: 1,
  space: false,            // FIX: matiin spasi besar
  maxLength: "0"
});

// ===== INFO DEVELOPER =====
console.log(
  chalk.hex("#a78bfa").bold("Contact Developer : ") +
  chalk.hex("#7cf3ff")("6283173403262")
);

console.log(
  chalk.hex("#a78bfa").bold("Website Developer : ") +
  chalk.hex("#7cf3ff")("https://ynastore.my.id\n")
);

// ===== FOOTER =====
console.log(
  chalk.hex("#ffd64d").italic("Welcome To Baileys Yna 2026\n")
);

console.log(
  chalk.white("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n")
);
// ============================
// FIXED __createBinding
// ============================

var createBinding =
  (this && this.createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);

        if (
          !desc ||
          (!("get" in desc) && (desc.writable || desc.configurable))
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }

        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });

var exportStar =
  (this && this.exportStar) ||
  function (m, exports) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p))
        createBinding(exports, m, p);
  };

var importDefault =
  (this && this.importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };

Object.defineProperty(exports, "__esModule", { value: true });

const Socket_1 = importDefault(require("./Socket"));

exports.makeWASocket = Socket_1.default;

exportStar(require("../WAProto"), exports);
exportStar(require("./Utils"), exports);
exportStar(require("./Types"), exports);
exportStar(require("./Store"), exports);
exportStar(require("./Defaults"), exports);
exportStar(require("./WABinary"), exports);
exportStar(require("./WAM"), exports);
exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;
