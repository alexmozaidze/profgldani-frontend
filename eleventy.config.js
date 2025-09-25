export default function(cfg) {
	cfg.setOutputDirectory("public");
	cfg.setInputDirectory("src");

	[
		"src/img",
		"src/styles",
		"src/videos",
		"src/scripts"
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
