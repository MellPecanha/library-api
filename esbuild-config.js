import esbuild from 'esbuild';

const config = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  outdir: 'dist',
  tsconfig: 'tsconfig.json',
  platform: 'node',
  sourcemap: true,
  format: "esm",
  external: [
    "express",
    "@prisma/client",
    ".prisma/client",
    "@prisma/adapter-better-sqlite3",
    "better-sqlite3",
    "events",
    "path",
    "url",
    "fs",
    "os"
  ],
};

const main = async () => {
  if (process.argv.includes('--watch')) {
    const ctx = await esbuild.context(config);
    await ctx.watch();
  }

  await esbuild.build(config)
}

main();
