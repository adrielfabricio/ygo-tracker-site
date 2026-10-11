import { FREE_LIMITS } from '../config/site';
import type { IconName } from '../icons';
import type { Locale } from './locales';

export type FeatureId = 'decks' | 'collections' | 'wishlist' | 'search' | 'shopping' | 'offline' | 'account';
type Item = { id: FeatureId; icon: IconName; title: string; body: string };
type ListRow = { name: string; qty: number; price: string };
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
	nav: { features: string; plans: string; faq: string; download: string };
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
		/** The "after": the app's missing list for one deck. */
		tidy: { title: string; subtitle: string; rows: ListRow[]; totalLabel: string; total: string; copy: string };
		/** Screen-reader description of the before/after illustration. */
		label: string;
	};
	features: { eyebrow: string; title: string; items: Item[]; extras: Item[] };
	/** Strings inside the small UI illustrations of the feature cards. */
	illo: {
		deckName: string;
		ready: string;
		setName: string;
		setCount: string;
		wishlist: ListRow[];
		searchQuery: string;
		resultPrimary: string;
		resultSecondary: string;
		copied: string;
		offline: string;
		synced: string;
		oldPhone: string;
		newPhone: string;
	};
	steps: { eyebrow: string; title: string; items: { title: string; body: string }[] };
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
		title: 'YGO Tracker: app para organizar sua coleção de Yu-Gi-Oh!',
		description:
			'Cadastre seus decks físicos de Yu-Gi-Oh!, marque as cartas que você já tem e veja o que falta comprar e quanto custa. Grátis para iPhone e Android.',
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
	nav: { features: 'Recursos', plans: 'Planos', faq: 'Dúvidas', download: 'Baixar' },
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
		'Wishlist',
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
		tidy: {
			title: 'Faltando',
			subtitle: 'Blue-Eyes · 3 cartas',
			rows: [
				{ name: 'Ash Blossom & Joyous Spring', qty: 2, price: 'R$ 24,00' },
				{ name: 'Called by the Grave', qty: 1, price: 'R$ 4,50' },
			],
			totalLabel: 'Estimativa',
			total: 'R$ 28,50',
			copy: 'Copiar lista',
		},
		label:
			'Antes: um print, uma planilha e uma mensagem com cartas soltas. Depois: a lista do que falta no deck, com quantidade, preço e o total estimado.',
	},
	features: {
		eyebrow: 'Recursos',
		title: 'Do primeiro booster ao deck fechado',
		items: [
			{
				id: 'decks',
				icon: 'layers-outline',
				title: 'Decks com progresso',
				body: 'Diga quantas cópias o deck pede e quantas já estão na sua pasta. O app mostra o quanto o deck está pronto e quanto custa, em média, o que falta. Main, Extra e Side ficam separados.',
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
				title: 'Wishlist com preço de referência',
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
				body: 'Copie a lista do que falta e chegue no balcão sabendo o que pedir. Pra passar um deck pra alguém, gere um QR Code. Pra receber o de outra pessoa, é só escanear.',
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
	illo: {
		deckName: 'Blue-Eyes',
		ready: 'pronto',
		setName: 'Coleção do set',
		setCount: '68 de 94 cartas',
		wishlist: [
			{ name: 'Ash Blossom & Joyous Spring', qty: 3, price: 'R$ 12,00' },
			{ name: 'Called by the Grave', qty: 2, price: 'R$ 4,50' },
		],
		searchQuery: 'dragão branco',
		resultPrimary: 'Dragão Branco de Olhos Azuis',
		resultSecondary: 'Blue-Eyes White Dragon',
		copied: 'Lista copiada',
		offline: 'Sem sinal',
		synced: 'Sincronizado',
		oldPhone: 'Celular antigo',
		newPhone: 'Celular novo',
	},
	steps: {
		eyebrow: 'Como funciona',
		title: 'Três passos até a lista de compras',
		items: [
			{ title: 'Monte o deck', body: 'Busque as cartas e diga quantas cópias de cada uma o deck pede.' },
			{ title: 'Marque o que já tem', body: 'Abriu um pacote ou trocou uma carta? Atualize a pasta em poucos toques.' },
			{ title: 'Leve a lista pra loja', body: 'Copie o que falta, com a estimativa de custo, e compre só o necessário.' },
		],
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
				{ text: `Até ${L.wishlistItems} itens na wishlist`, included: true },
				{ text: `Até ${L.collections} coleções`, included: true },
				{ text: 'Busca em português e inglês', included: true },
				{ text: 'Copiar a lista do que falta', included: true },
				{ text: 'Exportar e importar decks por QR Code', included: false },
				{ text: 'Copiar URLs YDKe', included: false },
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
				{ text: 'Wishlist ilimitada', included: true },
				{ text: 'Coleções ilimitadas', included: true },
				{ text: 'Busca em português e inglês', included: true },
				{ text: 'Copiar a lista do que falta', included: true },
				{ text: 'Exportar e importar decks por QR Code', included: true },
				{ text: 'Copiar URLs YDKe', included: true },
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
				answer: `Sim. Você baixa e usa de graça com ${L.activeDecks} deck ativo, até ${L.wishlistItems} itens na wishlist e até ${L.collections} coleções. Pra tirar esses limites, o Acesso Vitalício é um pagamento único, sem assinatura.`,
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
				answer: 'Não. Decks, coleções e wishlist ficam na sua conta, não no aparelho. Entre com o mesmo login e está tudo lá.',
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
					'No app, em Configurações, Conta, Excluir conta. A exclusão é imediata e remove seus decks, coleções e wishlist. A compra do Acesso Vitalício continua na sua conta da loja e pode ser restaurada numa conta nova.',
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
		title: 'YGO Tracker: Yu-Gi-Oh! Collection & Deck Tracker App',
		description:
			'Track the physical Yu-Gi-Oh! cards you own, see what is missing from each deck and what it costs to finish it. Free on iPhone and Android.',
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
	nav: { features: 'Features', plans: 'Pricing', faq: 'FAQ', download: 'Download' },
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
		tidy: {
			title: 'Missing',
			subtitle: 'Blue-Eyes · 3 cards',
			rows: [
				{ name: 'Ash Blossom & Joyous Spring', qty: 2, price: '$6.80' },
				{ name: 'Called by the Grave', qty: 1, price: '$1.20' },
			],
			totalLabel: 'Estimate',
			total: '$8.00',
			copy: 'Copy list',
		},
		label:
			'Before: a screenshot, a spreadsheet and a message with loose cards. After: the list of what the deck is missing, with quantities, prices and the estimated total.',
	},
	features: {
		eyebrow: 'Features',
		title: 'From the first booster to a finished deck',
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
				body: 'Copy your missing list and walk up to the counter knowing exactly what to ask for. Want to hand a deck to a friend? Generate a QR code. To get theirs, just scan it.',
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
	illo: {
		deckName: 'Blue-Eyes',
		ready: 'ready',
		setName: 'Set collection',
		setCount: '68 of 94 cards',
		wishlist: [
			{ name: 'Ash Blossom & Joyous Spring', qty: 3, price: '$3.40' },
			{ name: 'Called by the Grave', qty: 2, price: '$1.20' },
		],
		searchQuery: 'blue-eyes white',
		resultPrimary: 'Blue-Eyes White Dragon',
		resultSecondary: 'Dragão Branco de Olhos Azuis',
		copied: 'List copied',
		offline: 'No signal',
		synced: 'Synced',
		oldPhone: 'Old phone',
		newPhone: 'New phone',
	},
	steps: {
		eyebrow: 'How it works',
		title: 'Three steps to a shopping list',
		items: [
			{ title: 'Build the deck', body: 'Search for the cards and set how many copies of each the deck needs.' },
			{ title: 'Tick what you own', body: 'Opened a pack or traded a card? Update your binder with a few taps.' },
			{ title: 'Take the list to the shop', body: 'Copy what is missing, with the cost estimate, and buy only what you need.' },
		],
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
				{ text: 'Copy your missing list', included: true },
				{ text: 'Export and import decks by QR code', included: false },
				{ text: 'Copy YDKe URLs', included: false },
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
				{ text: 'Copy your missing list', included: true },
				{ text: 'Export and import decks by QR code', included: true },
				{ text: 'Copy YDKe URLs', included: true },
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
