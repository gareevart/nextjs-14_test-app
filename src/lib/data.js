const users = [
	{ id: 1, name: 'John' },
	{ id: 2, name: 'Elena' },
	{ id: 3, name: 'Bred' },
]

const posts = [
	{ id: 1, title: 'Post 1', body: 'text for body', userID: 1 },
	{ id: 2, title: 'Post 2', body: 'text for body', userID: 2 },
	{ id: 3, title: 'Post 3', body: 'text for body', userID: 3 },
	{ id: 4, title: 'Post 4', body: 'text for body', userID: 1 },
]

export const getPosts = async () => {
	return posts;
};

export const getPost = async (id) => {
	return posts.find((post) => post.id === id);
}

export const getUser = async (id) => {
	return users.find((user) => user.id === id);
}