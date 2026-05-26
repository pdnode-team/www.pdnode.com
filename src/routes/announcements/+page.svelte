<script lang="ts">
	import CheckPocketbaseStatus from '$lib/components/CheckPocketbaseStatus.svelte';
	import PocketBase from 'pocketbase';
	import { onMount } from 'svelte';

	const pb = new PocketBase('https://api.pdnode.com/');

	interface Announcement {
		readonly id: string;
		title: string;
		category: string;
		label: string;
		badgeClass: string;
		isPinned: boolean;
		summary: string;
		details: string;
		created: Date;
	}

	function formatDate(dateStr: string | Date): string {
		if (!dateStr) return '';
		const date = new Date(dateStr);

		// 使用中国（zh-CN）时区和 24 小时制
		return date
			.toLocaleString('zh-CN', {
				year: 'numeric',
				month: '2-digit',
				day: '2-digit',
				hour: '2-digit',
				minute: '2-digit',
				hour12: false // 使用 24 小时制
			})
			.replace(/\//g, '-'); // 把默认的 2026/05/25 替换为 2026-05-25
	}

	// 1. 模拟公告占位符数据（包含标题、分类、是否置顶、发布时间、正文摘要等）
	let announcements = $state<Announcement[]>([]);

	onMount(async () => {
		const records = (await pb.collection('announcements').getFullList({})) as Announcement[];
		announcements = records;
	});

	// 2. 当前筛选的分类（'' 表示全部）
	let currentCategory = $state('');

	// 3. 当前在 Modal 弹窗中查看详情的公告
	let activeAnnouncement = $state<Announcement | null>(null);

	// 4. 计算属性（Derived）：先过滤分类，再严格按照【置顶优先 -> 时间倒序】排序
	let filteredAnnouncements = $derived(
		announcements!
			.filter((a) => currentCategory === '' || a.category === currentCategory)
			.sort((a, b) => {
				// 先按置顶状态排（true 在前）
				if (a.isPinned !== b.isPinned) {
					return a.isPinned ? -1 : 1;
				}
				// 再按发布时间倒序排
				return new Date(b.created).getTime() - new Date(a.created).getTime();
			})
	);

	// 打开弹窗的方法
	function openModal(announcement: Announcement) {
		activeAnnouncement = announcement;
	}

	// 关闭弹窗的方法
	function closeModal() {
		activeAnnouncement = null;
	}
</script>

<div class="h-screen w-full justify-center items-center">
	<div class="max-w-4xl mx-auto p-4 sm:p-6 bg-base-100 min-h-screen">
		{#if filteredAnnouncements.length === 0}
			<div class="text-center py-12 opacity-60">
				<p>No announcements at this time.</p>
			</div>
		{:else}
			<div class="space-y-4">
				{#each filteredAnnouncements as item (item.id)}
					<div
						class="card bg-base-200/50 hover:bg-base-200 transition-all duration-200 shadow-sm border {item.isPinned
							? 'border-primary/30 bg-primary/5'
							: 'border-transparent'}"
					>
						<div class="card-body p-5">
							<div class="flex items-start justify-between gap-4">
								<div class="space-y-2">
									<div class="flex flex-wrap items-center gap-2">
										{#if item.isPinned}
											<div class="badge badge-primary badge-sm gap-1 font-semibold animate-pulse">
												Pinned
											</div>
										{/if}
										<div class="badge {item.badgeClass} badge-sm text-content font-medium">
											{item.label}
										</div>
										<span class="text-xs opacity-50 font-mono">{formatDate(item.created)}</span>
									</div>

									<button
										class="card-title text-left text-base sm:text-lg text-base-content hover:text-primary transition-colors duration-150 block w-full"
										onclick={() => openModal(item)}
									>
										{item.title}
									</button>

									<p class="text-sm opacity-70 line-clamp-2 leading-relaxed">
										<!-- eslint-disable-next-line svelte/no-at-html-tags -->
										{@html item.summary}
									</p>
								</div>

								<div class="card-actions justify-end self-center shrink-0">
									<button
										class="btn btn-circle btn-ghost btn-sm text-primary"
										onclick={() => openModal(item)}
									>
										➔
									</button>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{/if}

		{#if activeAnnouncement}
			<div class="modal modal-open modal-bottom sm:modal-middle" role="dialog">
				<div class="modal-box max-w-2xl">
					<div class="flex items-center gap-2 mb-3">
						<div class="badge {activeAnnouncement.badgeClass} text-white">
							{activeAnnouncement.label}
						</div>
						<span class="text-xs opacity-50 font-mono"
							>{formatDate(activeAnnouncement.created)}</span
						>
					</div>

					<h3 class="font-bold text-xl mb-4 text-base-content">
						{activeAnnouncement.title}
					</h3>

					<div
						class="py-4 border-t border-b border-base-200 text-sm sm:text-base leading-loose whitespace-pre-line text-base-content/80"
					>
						<!-- eslint-disable-next-line svelte/no-at-html-tags -->
						{@html activeAnnouncement.details}
					</div>

					<div class="modal-action">
						<button class="btn btn-sm sm:btn-md" onclick={closeModal}>I see</button>
					</div>
				</div>
				<button class="modal-backdrop" onclick={closeModal}>Close</button>
			</div>
		{/if}
	</div>
</div>
<CheckPocketbaseStatus />
