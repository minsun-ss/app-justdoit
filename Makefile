VERSION = $(shell node -p "require('./package.json').version")

changelog:
	git cliff --unreleased --tag v$(VERSION) --prepend changelog.md
