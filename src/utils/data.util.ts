import { Post } from '@/lib/schema';

export const formatDate = (pubDate: string) => {
	var options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};

	return new Date(pubDate).toLocaleDateString('pt-BR', options);
};

export const sortPostsByDate = (a: Post, b: Post) => {
	const pubDateA = new Date(a.publishedAt);
	const pubDateB = new Date(b.publishedAt);
	if (pubDateA < pubDateB) {
		return 1;
	}
	if (pubDateA > pubDateB) {
		return -1;
	}
	return 0;
};
