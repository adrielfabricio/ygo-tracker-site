import { FREE_LIMITS } from '../config/site';
import type { IconName } from '../icons';
import type { Locale } from './locales';

export type FeatureId = 'decks' | 'collections' | 'wishlist' | 'search' | 'shopping' | 'offline' | 'account';
type Item = { id: FeatureId; icon: IconName; title: string; body: string };
type PlanLine = { text: string; included: boolean };

export type Copy = {
	meta: { title: string; description: string; ogImageAlt: string };
	a11y: {
		skipToContent: string;
		home: string;
		storeLinks: string;
		appStoreAlt: string;
		playStoreAlt: string;
		screenshotAlt: string;
		included: string;
		notIncluded: string;
		mainNav: string;
		footerNav: string;
	};
	nav: { features: string; plans: string; faq: string; guide: string; download: string };
	hero: { eyebrow: string; title: string; lead: string; note: string };
	trust: string[];
	/** Keywords for the scrolling ribbon under the hero. */
	ribbon: string[];
	problem: {
		eyebrow: string;
		title: string;
		body: string[];
		/** The "before" pile: where a missing-cards list usually lives. */
		scattered: {
			screenshot: string;
			sheetName: string;
			sheetRows: [string, string][];
			chatFrom: string;
			chatText: string;
			chatTime: string;
		};
		/** Screen-reader description of the before/after scene (scraps, then the app's deck screen). */
		label: string;
	};
	features: { eyebrow: string; title: string; items: Item[]; extras: Item[] };
	/** Alt text for the real app screens (cropped from the App Store screenshots). */
	screens: {
		deckDetail: string;
		cardDetail: string;
		collections: string;
		wishlist: string;
		search: string;
		qrShare: string;
		ydkeImport: string;
	};
	steps: { eyebrow: string; title: string; items: { title: string; body: string }[]; guideCta: string; guideLink: string };
	plans: {
		eyebrow: string;
		title: string;
		lead: string;
		free: { name: string; rarity: string; price: string; tagline: string; lines: PlanLine[] };
		premium: { name: string; rarity: string; price: string; tagline: string; seal: string; lines: PlanLine[] };
		note: string;
	};
	faq: { eyebrow: string; title: string; more: string; moreLink: string; items: { question: string; answer: string }[] };
	final: { title: string; body: string };
	footer: {
		product: string;
		legal: string;
		privacy: string;
		terms: string;
		support: string;
		contact: string;
		englishOnly: string;
		disclaimer: string;
		rights: string;
	};
	download: { title: string; body: string; redirecting: string };
	notFound: { title: string; body: string; back: string };
};

const L = FREE_LIMITS;

const ptBR: Copy = {
	meta: {
		title: 'App para organizar sua coleção de Yu-Gi-Oh! | YGO Tracker',
		description:
			'Organize sua coleção de Yu-Gi-Oh! em português: veja o que falta em cada deck, quanto custa fechar e monte a lista de compras. Grátis no iPhone e Android.',
		ogImageAlt: 'YGO Tracker: organize sua coleção de Yu-Gi-Oh!',
	},
	a11y: {
		skipToContent: 'Pular para o conteúdo',
		home: 'YGO Tracker, página inicial',
		storeLinks: 'Baixar o app',
		appStoreAlt: 'Baixar na App Store',
		playStoreAlt: 'Disponível no Google Play',
		screenshotAlt:
			'Tela inicial do YGO Tracker no iPhone: coleção total, decks ativos, cartas faltando, estimativa do que falta gastar e a lista de decks com o progresso de cada um.',
		included: 'Incluído',
		notIncluded: 'Não incluído',
		mainNav: 'Seções da página',
		footerNav: 'Links do rodapé',
	},
	nav: { features: 'Recursos', plans: 'Planos', faq: 'Dúvidas', guide: 'Guia', download: 'Baixar' },
	hero: {
		eyebrow: 'Para quem coleciona cartas físicas',
		title: 'Saiba o que falta para fechar cada deck de Yu-Gi-Oh!',
		lead: 'Anote as cartas que você tem, veja o que falta e quanto custa terminar cada deck. Tudo no celular, até sem internet.',
		note: 'Grátis para iPhone e Android',
	},
	trust: ['Grátis para começar', 'Pagamento único, sem assinatura', 'Funciona offline', 'Busca em português e inglês'],
	ribbon: [
		'Decks com progresso',
		'Coleções por set',
		'Lista de desejos',
		'Busca PT e EN',
		'QR Code',
		'Funciona offline',
		'Lista de compras',
		'Pagamento único',
	],
	problem: {
		eyebrow: 'O problema',
		title: 'Sua lista de cartas está espalhada por aí',
		body: [
			'Um print na galeria, uma planilha que você não abre desde março, uma mensagem que mandou pra si mesmo e nunca mais achou.',
			'O YGO Tracker junta tudo num lugar só. Você cadastra seus decks físicos, marca o que já tem, e o app faz a conta do que ainda falta comprar.',
		],
		scattered: {
			screenshot: 'IMG_0412.PNG',
			sheetName: 'deck_final_v3.xlsx',
			sheetRows: [
				['Blue-Eyes', '2 ou 3?'],
				['Ash Blossom', 'tenho 1'],
				['Called by…', '???'],
			],
			chatFrom: 'Eu',
			chatText: 'lembrar: faltam 2 Ash Blossom pro deck',
			chatTime: 'mar 14',
		},
		label:
			'Antes: um print, uma planilha e uma mensagem com cartas soltas. Depois: a tela de um deck no YGO Tracker, com as cópias que você tem de cada carta e quanto falta gastar.',
	},
	features: {
		eyebrow: 'Recursos',
		title: 'Tudo para organizar sua coleção de Yu-Gi-Oh!',
		items: [
			{
				id: 'decks',
				icon: 'layers-outline',
				title: 'Decks com progresso',
				body: 'Diga quantas cópias o deck pede e quantas já estão na sua pasta. O app mostra o quanto o deck está completo e quanto custa, em média, o que falta. Deck principal, Extra e Side ficam separados.',
			},
			{
				id: 'collections',
				icon: 'cube-outline',
				title: 'Coleções por set',
				body: 'Importe um set inteiro e vá marcando carta por carta conforme elas chegam. Bateu o olho, já sabe quanto falta pra completar.',
			},
			{
				id: 'wishlist',
				icon: 'heart-outline',
				title: 'Lista de desejos com preço de referência',
				body: 'As cartas que você está caçando ficam numa lista à parte, com quantidade e preço. Mudou de ideia? Mova a carta pra dentro de um deck.',
			},
			{
				id: 'search',
				icon: 'search-outline',
				title: 'Busca em português e em inglês',
				body: 'Digite o nome em qualquer um dos dois idiomas. O app acha a carta e mostra a arte, o que ajuda quando você aprendeu o nome traduzido e a loja lista tudo em inglês.',
			},
			{
				id: 'shopping',
				icon: 'clipboard-outline',
				title: 'Na hora de comprar',
				body: 'Exporte a lista de compras e chegue no balcão sabendo o que pedir. Pra passar um deck pra alguém, gere um QR Code. Pra receber, escaneie o código ou cole uma URL YDKe.',
			},
		],
		extras: [
			{
				id: 'offline',
				icon: 'cloud-offline-outline',
				title: 'Sem internet também vai',
				body: 'Criar deck, marcar carta e ajustar quantidade funcionam offline. Na fila do torneio ou no canto da loja sem sinal. Quando a conexão volta, sincroniza sozinho.',
			},
			{
				id: 'account',
				icon: 'person-circle-outline',
				title: 'Seus dados, na sua conta',
				body: 'Trocou de celular? Faça login e está tudo lá. Se um dia quiser sair, você apaga a conta e tudo que tem nela direto no app.',
			},
		],
	},
	screens: {
		deckDetail:
			'Tela de um deck no YGO Tracker: progresso, cartas possuídas, quanto falta gastar e a grade de cartas com as cópias que você tem de cada uma.',
		cardDetail: 'Detalhe de uma carta: arte, edição e raridade, cópias necessárias e possuídas, e se ela vai no Deck principal ou no Side.',
		collections: 'Tela de coleções: total de sets e cartas possuídas, e cada set com código, ano e porcentagem completa.',
		wishlist: 'Lista de desejos: cartas que você quer comprar, com tipo, quantidade, preço de referência e o total estimado.',
		search: 'Busca de cartas pelo nome em português, com tipo, ataque e defesa de cada resultado e o selo de carta banida.',
		qrShare: 'QR Code de um deck, pronto para outro jogador escanear no YGO Tracker.',
		ydkeImport: 'Tela de importar deck por URL YDKe, com nome do deck e o campo para colar a URL.',
	},
	steps: {
		eyebrow: 'Como funciona',
		title: 'Como fechar um deck de Yu-Gi-Oh! em três passos',
		items: [
			{ title: 'Monte o deck', body: 'Busque as cartas e diga quantas cópias de cada uma o deck pede.' },
			{ title: 'Marque o que já tem', body: 'Abriu um pacote ou trocou uma carta? Atualize a pasta em poucos toques.' },
			{ title: 'Leve a lista pra loja', body: 'Copie o que falta, com a estimativa de custo, e compre só o necessário.' },
		],
		guideCta: 'Quer o passo a passo completo, das pastas à lista de compras?',
		guideLink: 'Leia o guia para organizar sua coleção',
	},
	plans: {
		eyebrow: 'Planos',
		title: 'Comece grátis. Libere tudo com um pagamento só.',
		lead: 'O plano gratuito cobre o primeiro deck. Quando ele deixar de dar conta, o Acesso Vitalício tira os limites de vez.',
		free: {
			name: 'Gratuito',
			rarity: 'Comum',
			price: 'R$ 0',
			tagline: 'Pra montar o primeiro deck',
			lines: [
				{ text: `${L.activeDecks} deck ativo`, included: true },
				{ text: `Até ${L.wishlistItems} itens na lista de desejos`, included: true },
				{ text: `Até ${L.collections} coleções`, included: true },
				{ text: 'Busca em português e inglês', included: true },
				{ text: 'Exportar a lista de compras', included: true },
				{ text: 'Exportar e importar decks por QR Code', included: false },
				{ text: 'Copiar e importar URLs YDKe', included: false },
			],
		},
		premium: {
			name: 'Acesso Vitalício',
			rarity: 'Ultra Rara',
			price: 'Pagamento único',
			tagline: 'Pra quem já passou do primeiro deck',
			seal: 'Sem assinatura',
			lines: [
				{ text: 'Decks ativos ilimitados', included: true },
				{ text: 'Lista de desejos ilimitada', included: true },
				{ text: 'Coleções ilimitadas', included: true },
				{ text: 'Busca em português e inglês', included: true },
				{ text: 'Exportar a lista de compras', included: true },
				{ text: 'Exportar e importar decks por QR Code', included: true },
				{ text: 'Copiar e importar URLs YDKe', included: true },
			],
		},
		note: 'O preço aparece no app, na moeda da loja do seu país. A compra fica na sua conta da App Store ou do Google Play.',
	},
	faq: {
		eyebrow: 'Dúvidas',
		title: 'Perguntas frequentes',
		more: 'Não achou o que procurava?',
		moreLink: 'Veja a página de suporte (em inglês)',
		items: [
			{
				question: 'O YGO Tracker é gratuito?',
				answer: `Sim. Você baixa e usa de graça com ${L.activeDecks} deck ativo, até ${L.wishlistItems} itens na lista de desejos e até ${L.collections} coleções. Pra tirar esses limites, o Acesso Vitalício é um pagamento único, sem assinatura.`,
			},
			{
				question: 'Como saber quais cartas faltam no meu deck?',
				answer:
					'Cadastre o deck com quantas cópias de cada carta ele pede e marque quantas você já tem. O YGO Tracker mostra o que falta, a porcentagem concluída e quanto custa, em média, terminar o deck, e exporta a lista de compras.',
			},
			{
				question: 'Dá para buscar cartas pelo nome em português?',
				answer:
					'Dá. A busca entende o nome em português e em inglês e mostra a arte da carta. Ajuda quando você conhece o nome traduzido e a loja lista tudo em inglês.',
			},
			{
				question: 'Os preços são valores de mercado?',
				answer:
					'Não. Os valores são os que você mesmo anota pra cada carta, e o app usa isso pra estimar quanto falta gastar. Ele não consulta lojas nem acompanha o mercado.',
			},
			{
				question: 'O app funciona sem internet?',
				answer:
					'Funciona. Dá pra criar e editar decks, marcar cartas e ajustar quantidades offline, e tudo sincroniza quando a conexão volta. A busca de cartas precisa de internet, porque consulta uma base de dados externa.',
			},
			{
				question: 'Troquei de celular. Perco meus decks?',
				answer: 'Não. Decks, coleções e lista de desejos ficam na sua conta, não no aparelho. Entre com o mesmo login e está tudo lá.',
			},
			{
				question: 'O app escaneia cartas pela câmera?',
				answer:
					'Não. A câmera serve pra ler o QR Code de um deck que alguém compartilhou com você. Pra adicionar cartas, você usa a busca, em português ou em inglês.',
			},
			{
				question: 'É um app oficial da Konami?',
				answer:
					'Não. É um app feito por fã, sem vínculo, patrocínio ou endosso da Konami. Os dados das cartas vêm da API pública do YGOPRODeck.',
			},
			{
				question: 'Como apago minha conta?',
				answer:
					'No app, em Configurações, Conta, Excluir conta. A exclusão é imediata e remove seus decks, coleções e lista de desejos. A compra do Acesso Vitalício continua na sua conta da loja e pode ser restaurada numa conta nova.',
			},
		],
	},
	final: {
		title: 'Feche o próximo deck sem comprar carta repetida',
		body: 'Baixe grátis e cadastre o primeiro deck hoje.',
	},
	footer: {
		product: 'Produto',
		legal: 'Legal',
		privacy: 'Privacidade',
		terms: 'Termos de uso',
		support: 'Suporte',
		contact: 'Contato',
		englishOnly: 'Páginas em inglês',
		disclaimer:
			'App feito por fã, sem vínculo com a Konami: não é patrocinado nem endossado por ela. Nomes, artes e marcas das cartas pertencem aos seus respectivos donos. Os dados das cartas vêm da API pública do YGOPRODeck.',
		rights: 'Todos os direitos reservados.',
	},
	download: {
		title: 'Baixar o YGO Tracker',
		body: 'Escolha a loja do seu celular.',
		redirecting: 'Abrindo a loja do seu celular…',
	},
	notFound: {
		title: 'Página não encontrada',
		body: 'Essa carta não está no deck. O endereço pode ter mudado ou nunca ter existido.',
		back: 'Voltar para o início',
	},
};

const en: Copy = {
	meta: {
		title: 'Yu-Gi-Oh! Collection & Deck Tracker App | YGO Tracker',
		description:
			'Track your physical Yu-Gi-Oh! cards, see which cards each deck is missing and what it costs to finish, and build a shopping list. Free on iPhone and Android.',
		ogImageAlt: 'YGO Tracker: organize your Yu-Gi-Oh! collection',
	},
	a11y: {
		skipToContent: 'Skip to content',
		home: 'YGO Tracker home',
		storeLinks: 'Download the app',
		appStoreAlt: 'Download on the App Store',
		playStoreAlt: 'Get it on Google Play',
		screenshotAlt:
			"YGO Tracker home screen on iPhone: total collection, active decks, missing cards, estimated cost left and the deck list with each deck's progress.",
		included: 'Included',
		notIncluded: 'Not included',
		mainNav: 'Page sections',
		footerNav: 'Footer links',
	},
	nav: { features: 'Features', plans: 'Pricing', faq: 'FAQ', guide: 'Guide', download: 'Download' },
	hero: {
		eyebrow: 'For people who collect physical cards',
		title: 'Know exactly what is missing from every Yu-Gi-Oh! deck',
		lead: 'Track the cards you own, see what is missing and what it costs to finish each deck. All on your phone, even offline.',
		note: 'Free on iPhone and Android',
	},
	trust: ['Free to start', 'One-time payment, no subscription', 'Works offline', 'Search in English or Portuguese'],
	ribbon: [
		'Decks with progress',
		'Set collections',
		'Wishlist',
		'Search in EN and PT',
		'QR codes',
		'Works offline',
		'Shopping list',
		'One-time payment',
	],
	problem: {
		eyebrow: 'The problem',
		title: 'Your missing-cards list is scattered everywhere',
		body: [
			'A screenshot in the camera roll, a spreadsheet you have not opened since March, a note you messaged to yourself and never found again.',
			'YGO Tracker puts it all in one place. Add your physical decks, tick off what you own, and let the app do the math on what is still left to buy.',
		],
		scattered: {
			screenshot: 'IMG_0412.PNG',
			sheetName: 'deck_final_v3.xlsx',
			sheetRows: [
				['Blue-Eyes', '2 or 3?'],
				['Ash Blossom', 'have 1'],
				['Called by…', '???'],
			],
			chatFrom: 'Me',
			chatText: 'remember: need 2 more Ash Blossom',
			chatTime: 'Mar 14',
		},
		label:
			'Before: a screenshot, a spreadsheet and a message with loose cards. After: a deck screen in YGO Tracker, showing how many copies of each card you own and what is left to spend.',
	},
	features: {
		eyebrow: 'Features',
		title: 'Everything to organize your Yu-Gi-Oh! collection',
		items: [
			{
				id: 'decks',
				icon: 'layers-outline',
				title: 'Decks with progress',
				body: 'Say how many copies the deck calls for and how many are already in your binder. The app shows how close the deck is and roughly what the rest will cost. Main, Extra and Side stay separate.',
			},
			{
				id: 'collections',
				icon: 'cube-outline',
				title: 'Set collections',
				body: 'Import a whole set and tick cards off as they come in. One look and you know how far you are from completing it.',
			},
			{
				id: 'wishlist',
				icon: 'heart-outline',
				title: 'Wishlist with reference prices',
				body: 'The cards you are hunting live in their own list, with quantity and price. Changed your mind? Move a card straight into a deck.',
			},
			{
				id: 'search',
				icon: 'search-outline',
				title: 'Search in English or Portuguese',
				body: 'Type the name in either language. The app finds the card and shows the art, which helps when you learned one name and the shop lists the other.',
			},
			{
				id: 'shopping',
				icon: 'clipboard-outline',
				title: 'When you go shopping',
				body: 'Export your shopping list and walk up to the counter knowing exactly what to ask for. Want to hand a deck to a friend? Generate a QR code. To get theirs, scan the code or paste a YDKe URL.',
			},
		],
		extras: [
			{
				id: 'offline',
				icon: 'cloud-offline-outline',
				title: 'Works with no signal',
				body: 'Creating decks, ticking cards and adjusting quantities all work offline. In line at the tournament or in the corner of the shop with no bars. It syncs on its own once you are back.',
			},
			{
				id: 'account',
				icon: 'person-circle-outline',
				title: 'Your data, your account',
				body: 'New phone? Sign in and it is all there. If you ever want out, you can delete your account and everything in it from inside the app.',
			},
		],
	},
	screens: {
		deckDetail: 'A deck screen in YGO Tracker: progress, cards owned, cost left and the card grid with how many copies of each you have.',
		cardDetail:
			'Card detail: artwork, printing and rarity, copies needed and owned, and whether it goes in the Main Deck or the Side Deck.',
		collections: 'Collections screen: total sets and cards owned, and each set with its code, year and percentage complete.',
		wishlist: 'Wishlist: cards you want to buy, with type, quantity, reference price and the estimated total.',
		search: "Card search by name, with each result's type, attack and defense and a banned-card badge.",
		qrShare: 'A deck QR code, ready for another player to scan in YGO Tracker.',
		ydkeImport: 'Import a deck from a YDKe URL: deck name and a field to paste the URL.',
	},
	steps: {
		eyebrow: 'How it works',
		title: 'Finish a Yu-Gi-Oh! deck in three steps',
		items: [
			{ title: 'Build the deck', body: 'Search for the cards and set how many copies of each the deck needs.' },
			{ title: 'Tick what you own', body: 'Opened a pack or traded a card? Update your binder with a few taps.' },
			{ title: 'Take the list to the shop', body: 'Copy what is missing, with the cost estimate, and buy only what you need.' },
		],
		guideCta: 'Want the full walkthrough, from binders to the shopping list?',
		guideLink: 'Read the guide to organizing your collection',
	},
	plans: {
		eyebrow: 'Pricing',
		title: 'Start free. Unlock everything with a single payment.',
		lead: 'The free plan covers your first deck. When one deck stops being enough, Lifetime Access lifts every limit for good.',
		free: {
			name: 'Free',
			rarity: 'Common',
			price: '$0',
			tagline: 'For your first deck',
			lines: [
				{ text: `${L.activeDecks} active deck`, included: true },
				{ text: `Up to ${L.wishlistItems} wishlist items`, included: true },
				{ text: `Up to ${L.collections} collections`, included: true },
				{ text: 'Search in English or Portuguese', included: true },
				{ text: 'Export your shopping list', included: true },
				{ text: 'Export and import decks by QR code', included: false },
				{ text: 'Copy and import YDKe URLs', included: false },
			],
		},
		premium: {
			name: 'Lifetime Access',
			rarity: 'Ultra Rare',
			price: 'One-time payment',
			tagline: 'For when one deck is not enough',
			seal: 'No subscription',
			lines: [
				{ text: 'Unlimited active decks', included: true },
				{ text: 'Unlimited wishlist', included: true },
				{ text: 'Unlimited collections', included: true },
				{ text: 'Search in English or Portuguese', included: true },
				{ text: 'Export your shopping list', included: true },
				{ text: 'Export and import decks by QR code', included: true },
				{ text: 'Copy and import YDKe URLs', included: true },
			],
		},
		note: 'The price is shown in the app, in your local store currency. The purchase belongs to your App Store or Google Play account.',
	},
	faq: {
		eyebrow: 'FAQ',
		title: 'Frequently asked questions',
		more: 'Did not find your answer?',
		moreLink: 'Visit the support page',
		items: [
			{
				question: 'Is YGO Tracker free?',
				answer: `Yes. You can download and use it for free with ${L.activeDecks} active deck, up to ${L.wishlistItems} wishlist items and up to ${L.collections} collections. To lift those limits, Lifetime Access is a one-time payment with no subscription.`,
			},
			{
				question: 'How do I know which cards my deck is missing?',
				answer:
					'Add the deck with how many copies of each card it needs and tick how many you already own. YGO Tracker shows what is missing, how complete the deck is and roughly what it costs to finish, and exports a shopping list.',
			},
			{
				question: 'Can I search cards by their Portuguese names?',
				answer:
					'Yes. Search understands both English and Portuguese card names and shows the card art, which helps if you play with Portuguese cards and buy from shops that list them in English.',
			},
			{
				question: 'Are the prices real market values?',
				answer:
					'No. The values are the ones you enter for each card, and the app uses them to estimate what is left to spend. It does not check shop prices or track the market.',
			},
			{
				question: 'Does the app work without internet?',
				answer:
					'Yes. You can create and edit decks, tick cards and adjust quantities offline, and everything syncs once you are back online. Card search needs a connection because it queries an external database.',
			},
			{
				question: 'I got a new phone. Do I lose my decks?',
				answer:
					'No. Decks, collections and wishlist live on your account, not on the device. Sign in with the same login and everything comes back.',
			},
			{
				question: 'Does the app scan cards with the camera?',
				answer:
					'No. The camera reads the QR code of a deck someone shared with you. To add cards, you use search, in English or Portuguese.',
			},
			{
				question: 'Is this an official Konami app?',
				answer:
					'No. It is a fan-made app with no affiliation, sponsorship or endorsement from Konami. Card data comes from the public YGOPRODeck API.',
			},
			{
				question: 'How do I delete my account?',
				answer:
					'In the app, go to Settings, Account, Delete account. Deletion is immediate and removes your decks, collections and wishlist. Lifetime Access stays with your store account and can be restored on a new account.',
			},
		],
	},
	final: {
		title: 'Finish your next deck without buying doubles',
		body: 'Download it for free and add your first deck today.',
	},
	footer: {
		product: 'Product',
		legal: 'Legal',
		privacy: 'Privacy',
		terms: 'Terms of use',
		support: 'Support',
		contact: 'Contact',
		englishOnly: '',
		disclaimer:
			'Fan-made app with no ties to Konami: not sponsored or endorsed by them. Card names, artwork and trademarks belong to their respective owners. Card data comes from the public YGOPRODeck API.',
		rights: 'All rights reserved.',
	},
	download: {
		title: 'Download YGO Tracker',
		body: 'Pick the store for your phone.',
		redirecting: 'Opening the store for your phone…',
	},
	notFound: {
		title: 'Page not found',
		body: 'That card is not in the deck. The address may have changed or never existed.',
		back: 'Back to the home page',
	},
};

export const COPY: Record<Locale, Copy> = { 'pt-br': ptBR, en };
