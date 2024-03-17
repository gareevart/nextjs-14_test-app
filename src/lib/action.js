import { Post } from './models';
import { connectToDb } from './utils';

export const addPost = async (formData) => {
	"use server";

	// const title = formData.get("title");
	// const desc = formData.get("desc");
	// const slug = formData.get("slug");

	const { title, desc, slug, userId } = Object.fromEntries(formData);

	try {
		connectToDb();
		const newPost = new Post({
			title,
			desc,
			slug,
			userId,
		});

		await newPost.save();
		console.log("Saved to db");
	} catch (err) {
		console.log(err);
		return { error: "Post creation error!" }
	}
	console.log(title, desc, slug, userId);
} 