import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const repoRoot = process.cwd();
const assetsDir = path.join(repoRoot, 'public', 'assets');

async function fileExists(p) {
	try {
		await fs.access(p);
		return true;
	} catch {
		return false;
	}
}

async function optimizeEinsteinMask() {
	const input = path.join(assetsDir, 'albertEinsteinLogo.png');
	const outWebp = path.join(assetsDir, 'albertEinsteinLogo.webp');
	const outAvif = path.join(assetsDir, 'albertEinsteinLogo.avif');

	if (!(await fileExists(input))) {
		throw new Error(`Input not found: ${input}`);
	}

	// Keep alpha, optimize for mask usage (high contrast, but smaller transfer)
	const base = sharp(input, { limitInputPixels: false }).ensureAlpha();

	// WEBP: good compatibility
	await base
		.clone()
		.webp({ quality: 70, effort: 6 })
		.toFile(outWebp);

	// AVIF: best compression where supported
	await base
		.clone()
		.avif({ quality: 50, effort: 6 })
		.toFile(outAvif);

	return { input, outWebp, outAvif };
}

(async () => {
	try {
		const result = await optimizeEinsteinMask();
		console.log('✅ Optimized assets created:');
		console.log(result);
	} catch (err) {
		console.error('❌ Asset optimization failed');
		console.error(err);
		process.exitCode = 1;
	}
})();
