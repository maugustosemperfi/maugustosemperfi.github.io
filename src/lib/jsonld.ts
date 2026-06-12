import { AUTHOR, SOCIAL } from '../consts';

export function buildPersonJsonLd(url: string) {
	const sameAs = [SOCIAL.github, SOCIAL.twitter];
	if (SOCIAL.linkedin) sameAs.push(SOCIAL.linkedin);

	return {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: AUTHOR,
		jobTitle: 'Senior Software Engineer',
		worksFor: {
			'@type': 'Organization',
			name: 'Nubank',
		},
		url,
		sameAs,
	};
}

export function buildBlogPostingJsonLd(opts: {
	title: string;
	description: string;
	url: string;
	image: string;
	pubDate: Date;
	updatedDate?: Date;
}) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: opts.title,
		description: opts.description,
		datePublished: opts.pubDate.toISOString(),
		dateModified: (opts.updatedDate ?? opts.pubDate).toISOString(),
		author: {
			'@type': 'Person',
			name: AUTHOR,
			jobTitle: 'Senior Software Engineer',
		},
		image: opts.image,
		url: opts.url,
	};
}
