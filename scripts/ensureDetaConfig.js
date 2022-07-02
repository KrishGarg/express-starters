const fs = require("node:fs");
const path = require("node:path");

const pkgFile = "package.json";
const pj = path.join;

const main = async () => {
  const root = pj(__dirname, "..");
  const dist = pj(root, "dist");

  if (!fs.existsSync(pj(dist, ".deta"))) {
    throw new Error("`.deta` config folder doesn't exist in `dist`");
  }

  if (!fs.existsSync(pj(root, pkgFile))) {
    throw new Error("`package.json` doesn't exist!");
  }

  if (fs.existsSync(pj(dist, pkgFile))) {
    const opts = {
      encoding: "utf-8",
    };
    const distPkgContent = await fs.promises.readFile(pj(dist, pkgFile), opts);
    const rootPkgContent = await fs.promises.readFile(pj(root, pkgFile), opts);

    if (distPkgContent === rootPkgContent) return;
  }

  console.info("Copying `package.json` to dist");
  await fs.promises.copyFile(pj(root, pkgFile), pj(dist, pkgFile));
};

main();
