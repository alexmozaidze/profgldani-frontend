export default function (cfg) {
	cfg.setOutputDirectory("public");
	cfg.setInputDirectory("src");

	cfg.addPassthroughCopy("src/img");
	cfg.addPassthroughCopy("src/styles");

	[
		"src/styles/**",
		"src/scripts/**",
	].forEach(glob => cfg.addWatchTarget(glob));
};
