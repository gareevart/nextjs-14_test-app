import { Post, User } from './models';
import { connectToDb } from './utils';
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
	try {
		connectToDb();
		const posts = await Post.find();
		return posts;
	} catch (err) {
		console.log(err);
		throw new Error("Failed to fetch posts!");
	}
};

export const getPost = async (slug) => {
	try {
		connectToDb();
		const post = await Post.findOne({ slug });
		return post;
	} catch (err) {
		console.log(err);
		throw new Error("Failed to fetch post!");
	}
};

export const getUser = async (id) => {
	noStore();
	try {
		console.log(`Attempting to connect to the database and fetch user with id: ${id}`);
		await connectToDb();
		console.log(`Connected to the database. Searching for user with id: ${id}`);
		const user = await User.findById(id);

		if (!user) {
			console.log(`User with id ${id} not found`);
			return null; // Возвращаем null вместо выброса исключения
		}

		console.log(`Successfully fetched user: ${user.username || user._id}`);
		return user;
	} catch (err) {
		console.error('Error in getUser:', err);
		return null; // Возвращаем null в случае любой ошибки
	}
};


export const getUsers = async () => {
	try {
		connectToDb();
		const users = await User.find();
		return users;
	} catch (err) {
		console.log(err);
		throw new Error("Failed to fetch users!");
	}
};