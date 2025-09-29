export default function(cfg) {
	cfg.setOutputDirectory("public");
	cfg.setInputDirectory("src");

	[
		"src/styles",
		"src/scripts",
		"src/static",
	].forEach((path) =>
		cfg.addPassthroughCopy(path),
	);

	[
		"src/styles/**",
		"src/scripts/**",
	].forEach((glob) =>
		cfg.addWatchTarget(glob),
	);
}
