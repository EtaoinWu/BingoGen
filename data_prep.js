const fs = require("fs");

function gg(x) {
  return {
    ban: x[0].split(",").filter((z) => z != ""),
    name: x[1],
    level: x[2].split(",").filter((z) => z != ""),
    time: parseFloat(x[3]),
    gencat: x[4].split(",").filter((z) => z != ""),
    sad: x[5].split(",").filter((z) => z != ""),
    conflict: x
      .slice(6)
      .map((z) => z.split(","))
      .flat()
      .filter((z) => z != ""),
  };
}

const str = fs.readFileSync("Bingo Design.txt", "utf8").replace(/\r/g, "");

const lines = str
  .split("\n")
  .slice(2, -1)
  .map((x) => x.split("\t"));

console.log(JSON.stringify(lines.map(gg).filter(x=>x.name!='')))