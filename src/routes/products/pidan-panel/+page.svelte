<script lang="ts">
	import { resolve } from '$app/paths';

	type FeatureItem = {
		id: string;
		title: string;
		description: string;
		status: 'live' | 'upcoming';
	};

	const currentFeatures: FeatureItem[] = [
		{
			id: 'core-classifier',
			title: 'Smart Core Classifier',
			description:
				'Deeply analyzes configuration signatures and directory trees without relying on JAR filenames, accurately identifying server families and Minecraft versions.',
			status: 'live'
		},
		{
			id: 'multi-engine',
			title: 'One-Click Multi-Ecosystem Installer',
			description:
				'Directly connects to official upstream mirrors, supporting Paper, Purpur, Folia, Spigot, Fabric, Forge, NeoForge, and official Vanilla cores.',
			status: 'live'
		},
		{
			id: 'snapshot-filtering',
			title: 'Intelligent Snapshot Filtering',
			description:
				'Hides development snapshots and preview builds by default to protect beginner server stability, with a one-click toggle to explore experimental versions.',
			status: 'live'
		},
		{
			id: 'backup-exclusions',
			title: 'Smart Backup & Selective Exclusions',
			description:
				'Supports flexible path wildcard rules to automatically exclude temporary caches and dependency libraries, saving substantial storage space and bandwidth.',
			status: 'live'
		},
		{
			id: 'graceful-shutdown',
			title: 'Adaptive Graceful Shutdown Protection',
			description:
				'Configurable 5 to 300 second graceful shutdown window with adaptive polling, completely eliminating chunk rollbacks and world corruption caused by Docker SIGKILL.',
			status: 'live'
		},
		{
			id: 'java-matrix',
			title: 'Temurin Java Matrix Auto-Matching',
			description:
				'Built-in environment matrix spanning Java 8 through Java 25, automatically recommending the optimal Eclipse Temurin JRE container for the target Minecraft version.',
			status: 'live'
		},
		{
			id: 'dynamic-resources',
			title: 'Dynamic Resource & Startup Tuning',
			description:
				'Adjust min/max memory allocations (-Xms/-Xmx), primary server JAR, and stop timeout parameters on the fly without recreating containers.',
			status: 'live'
		},
		{
			id: 'missing-core-alert',
			title: 'Missing Binary Recovery Banner',
			description:
				'Automatically detects missing executable JARs upon launch, presenting an alert banner with an instant reinstallation wizard to safeguard worlds and configurations.',
			status: 'live'
		},
		{
			id: 'web-terminal',
			title: 'High-Fidelity Web Terminal',
			description:
				'Powered by XTerm.js with Minecraft 16-color ANSI rendering, auto-scroll, fullscreen mode, and command history memory (Up/Down arrow keys).',
			status: 'live'
		},
		{
			id: 'sse-streaming',
			title: 'Real-Time SSE Log Streaming',
			description:
				'Millisecond-latency log delivery over Server-Sent Events with automatic 3-second self-healing reconnection, eliminating CPU-heavy polling.',
			status: 'live'
		},
		{
			id: 'file-manager',
			title: 'Online File System Manager',
			description:
				'Full in-browser file explorer with recursive directory traversal, atomic text configuration editing, multipart uploads, renaming, and safe deletion.',
			status: 'live'
		}
	];

	const upcomingFeatures: FeatureItem[] = [
		{
			id: 'cron-tasks',
			title: 'Scheduled Tasks & Auto-Backups',
			description:
				'Configure Cron expressions for automated routine backups, scheduled server restarts, and timed console commands.',
			status: 'upcoming'
		},
		{
			id: 'mod-marketplace',
			title: 'Mod & Plugin Marketplace',
			description:
				'Integrated catalog aggregating Modrinth, CurseForge, and SpigotMC for one-click search and hot-installation.',
			status: 'upcoming'
		},
		{
			id: 'multi-node',
			title: 'Multi-Node Distributed Clusters',
			description:
				'Centralized control panel orchestrating multiple physical host nodes, supporting cross-node instance migration and load balancing.',
			status: 'upcoming'
		},
		{
			id: 'metrics-monitor',
			title: 'Real-Time Performance Metrics',
			description:
				'Visual telemetry charts monitoring CPU, RAM, network I/O, and real-time TPS and MSPT fluctuation graphs.',
			status: 'upcoming'
		},
		{
			id: 'player-whitelist',
			title: 'Player Management & Whitelist',
			description:
				'Real-time online player roster with one-click kick, ban, OP permission delegation, and whitelist administration.',
			status: 'upcoming'
		},
		{
			id: 'rbac-permissions',
			title: 'Granular Role-Based Access Control (RBAC)',
			description:
				'Invite collaborator sub-users with isolated per-instance permissions across console, files, backups, and settings.',
			status: 'upcoming'
		}
	];
</script>

<svelte:head>
	<title>Pidan Panel - Next-Generation Minecraft Management Panel</title>
	<meta
		name="description"
		content="A next-generation Minecraft management panel, ideal for beginners with some basic knowledge as well as server owners looking to boost efficiency and convenience."
	/>
</svelte:head>

<div class="min-h-screen bg-base-100 text-base-content">
	<!-- Hero Header -->
	<header class="border-b border-base-300 py-16 lg:py-24">
		<div class="container mx-auto px-4 max-w-4xl text-center space-y-6">
			<div class="inline-flex items-center gap-2">
				<span class="badge badge-primary font-mono text-xs uppercase tracking-wider px-3 py-1">
					Coming Soon
				</span>
			</div>

			<h1 class="text-4xl md:text-6xl font-extrabold tracking-tight">
				Pidan Panel
			</h1>

			<p class="text-lg md:text-xl text-base-content/80 max-w-3xl mx-auto leading-relaxed">
				A next-generation Minecraft management panel, ideal for beginners with some basic knowledge as well as server owners looking to boost efficiency and convenience.
			</p>

			<div class="pt-2 flex flex-wrap justify-center gap-4">
				<a
					href="https://github.com/BretRen/pdnode/issues"
					target="_blank"
					rel="noreferrer"
					class="btn btn-primary px-8 shadow-sm"
				>
					View on GitHub
				</a>
				<a
					href="https://chat.p67.click"
					target="_blank"
					rel="noreferrer"
					class="btn btn-outline px-8"
				>
					Join Community Chat
				</a>
			</div>
		</div>
	</header>

	<!-- Quick Navigation Bar -->
	<nav class="border-b border-base-300 bg-base-200/50 py-3 sticky top-0 z-20 backdrop-blur-md">
		<div class="container mx-auto px-4 max-w-4xl flex items-center justify-between">
			<div class="flex items-center gap-4 text-xs font-mono uppercase tracking-wider">
				<a href="#current-features" class="hover:text-primary transition-colors">
					Current Features ({currentFeatures.length})
				</a>
				<span class="text-base-content/30">/</span>
				<a href="#upcoming-features" class="hover:text-primary transition-colors">
					Coming Soon ({upcomingFeatures.length})
				</a>
			</div>

			<span class="text-xs font-mono text-base-content/50">
				Platform Specification
			</span>
		</div>
	</nav>

	<!-- Main Feature Catalog -->
	<main class="container mx-auto px-4 max-w-4xl py-12 space-y-16">
		<!-- Section 1: Current Features -->
		<section id="current-features" class="space-y-6">
			<div class="border-b border-base-300 pb-4 flex flex-wrap items-baseline justify-between gap-2">
				<div>
					<h2 class="text-2xl sm:text-3xl font-bold tracking-tight">
						Current Features
					</h2>
					<p class="mt-1 text-sm text-base-content/70">
						Ready-to-use capabilities fully supported across the frontend and connected backend daemons.
					</p>
				</div>
				<span class="badge badge-success badge-outline font-mono text-xs">
					{currentFeatures.length} Features Available
				</span>
			</div>

			<div class="divide-y divide-base-300 rounded-lg border border-base-300 bg-base-100 shadow-xs">
				{#each currentFeatures as item}
					<div class="p-5 sm:p-6 space-y-2 hover:bg-base-200/40 transition-colors">
						<div class="flex items-start justify-between gap-3">
							<div class="space-y-1 flex-1">
								<h3 class="text-base font-bold text-base-content">
									{item.title}
								</h3>
								<p class="text-sm text-base-content/80 leading-relaxed font-sans">
									{item.description}
								</p>
							</div>

							<span class="badge badge-success badge-sm font-mono shrink-0 uppercase">
								Available
							</span>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<!-- Section 2: Coming Soon -->
		<section id="upcoming-features" class="space-y-6">
			<div class="border-b border-base-300 pb-4 flex flex-wrap items-baseline justify-between gap-2">
				<div>
					<h2 class="text-2xl sm:text-3xl font-bold tracking-tight">
						Coming Soon
					</h2>
					<p class="mt-1 text-sm text-base-content/70">
						Upcoming capabilities currently in architectural design and active development.
					</p>
				</div>
				<span class="badge badge-primary badge-outline font-mono text-xs">
					{upcomingFeatures.length} In Pipeline
				</span>
			</div>

			<div class="divide-y divide-base-300 rounded-lg border border-base-300 bg-base-100 shadow-xs">
				{#each upcomingFeatures as item}
					<div class="p-5 sm:p-6 space-y-2 hover:bg-base-200/40 transition-colors">
						<div class="flex items-start justify-between gap-3">
							<div class="space-y-1 flex-1">
								<h3 class="text-base font-bold text-base-content">
									{item.title}
								</h3>
								<p class="text-sm text-base-content/80 leading-relaxed font-sans">
									{item.description}
								</p>
							</div>

							<span class="badge badge-neutral badge-sm font-mono shrink-0 uppercase">
								Coming Soon
							</span>
						</div>
					</div>
				{/each}
			</div>
		</section>
	</main>

	<!-- Footer CTA -->
	<footer class="border-t border-base-300 py-16 bg-base-200/40">
		<div class="container mx-auto px-4 max-w-3xl text-center space-y-6">
			<span class="badge badge-primary badge-outline font-mono text-xs uppercase tracking-wider">
				Coming Soon
			</span>
			<h2 class="text-2xl md:text-3xl font-bold tracking-tight">
				Pidan Panel is currently under active development.
			</h2>
			<p class="text-sm text-base-content/70 max-w-xl mx-auto leading-relaxed">
				Join the community discussion and contribute feature feedback on our open issue tracker.
			</p>
			<div class="flex flex-wrap justify-center gap-4 pt-2">
				<a
					href="https://github.com/BretRen/pdnode/issues"
					target="_blank"
					rel="noreferrer"
					class="btn btn-primary px-8"
				>
					GitHub Issues
				</a>
				<a
					href="https://chat.p67.click"
					target="_blank"
					rel="noreferrer"
					class="btn btn-outline px-8"
				>
					Community Chat
				</a>
				<a
					href={resolve('/')}
					class="btn btn-ghost px-6"
				>
					Pdnode Home
				</a>
			</div>
		</div>
	</footer>
</div>
