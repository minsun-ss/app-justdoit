changelog:
	git cliff --unreleased --tag v$(shell cat VERSION) --prepend changelog.md
