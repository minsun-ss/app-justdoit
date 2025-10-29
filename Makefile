VERSION = $(shell node -p "require('./package.json').version")

changelog:
	git cliff --unreleased --tag v$(shell cat VERSION) --prepend changelog.md
