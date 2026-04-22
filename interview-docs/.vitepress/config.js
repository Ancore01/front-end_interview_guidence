export default {
	title: '前端面试知识库',
	description: 'HTML | CSS | JavaScript | Vue | 浏览器 | 网络',
	themeConfig: {
		nav: [{ text: '首页', link: '/' }],
		sidebar: [
			{
				text: '基础',
				items: [
					{ text: 'HTML', link: '/html' },
					{ text: 'CSS', link: '/css' },
					{ text: 'JavaScript', link: '/javascript' },
				],
			},
			{
				text: '进阶',
				items: [
					{ text: '浏览器', link: '/browser' },
					{ text: '网络', link: '/network' },
					{ text: 'Vue', link: '/vue' },
					{ text: '手写代码', link: '/code' },
				],
			},
			{
				text: '面试题目',
				items: [
					{ text: '基础', link: '/browser' },
					{ text: '偏门', link: '/network' },
					{ text: '业务场景', link: '/vue' },
				],
			},
		],
		search: true,
	},
}
