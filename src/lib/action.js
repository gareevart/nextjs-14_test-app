"use server";
import { revalidatePath } from 'next/cache';
import { Post, User } from './models';
import { connectToDb } from './utils';
import { signOut } from './auth';
import { signIn } from './auth';
import bcrypt from "bcryptjs";

export const addPost = async (formData) => {

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
		revalidatePath("/blog");

	} catch (err) {
		console.log(err);
		return { error: "Post creation error!" }
	}
	console.log(title, desc, slug, userId);
};

export const deletePost = async (formData) => {
	const { id } = Object.fromEntries(formData);

	try {
		connectToDb();

		await Post.findByIdAndDelete(id);
		console.log("Deleted from db");
		revalidatePath("/blog");

	} catch (err) {
		console.log(err);
		return { error: "Post creation error!" }
	}
};

export const handleGithubLogin = async () => {
	await signIn("github");
};

export const handleLogout = async () => {
	await signOut("github");
};

export const register = async (formData) => {
	const { username, email, password, img, passwordRepeat } = Object.fromEntries(formData);

	if (password !== passwordRepeat) {
		return { error: "Passwords do not match" };
	}
	try {
		connectToDb();

		const user = await User.findOne({ username });
		if (user) {
			return { error: "Username already exists" };
		}

		const salt = await bcrypt.genSalt(10);
		const hashewPassword = await bcrypt.hash(password, salt);

		const newUser = new User({
			username,
			email,
			password: hashewPassword,
			img,
		});

		await newUser.save();
		console.log("Saved to db");
	} catch (err) {
		console.log(err);
		return { error: "Something went wrong!" };
	}
};

export const login = async (formData) => {
	const { username, password } = Object.fromEntries(formData);
	try {
		await signIn("credentials", { username, password });
	} catch (err) {
		console.log(err);
		return { error: "Something went wrong!" };
	}
}