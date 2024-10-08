"use server";
import { revalidatePath } from 'next/cache';
import { Post, User } from './models';
import { connectToDb } from './utils';
import { signOut, signIn } from './auth';
import bcrypt from "bcryptjs";
import { put } from '@vercel/blob';

export const addPost = async (formData) => {
	const { title, desc, slug, userId, img } = Object.fromEntries(formData);
	let imageUrl = img; // Перемещено сюда

	try {
		connectToDb();

		// Если img - это File объект (загруженное изображение), а не URL
		if (img instanceof File) {
			const blob = await put(img.name, img, {
				access: 'public',
			});
			imageUrl = blob.url;
		}

		const newPost = new Post({
			title,
			desc,
			slug,
			userId,
			img: imageUrl, // Используем URL из Blob Storage или переданный URL
		});

		await newPost.save();
		console.log("Saved to db");
		revalidatePath("/blog");
	} catch (err) {
		console.log(err);
		return { error: "Post creation error!" }
	}

	// Убран console.log здесь, так как он больше не нужен
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
	"use server";
	await signIn("github");
};

export const handleLogout = async () => {
	"use server";
	await signOut("github");
};

export const register = async (previousState, formData) => {
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
		return { success: true };
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

		if (err.message.includes("CredentialsSignin")) {
			return { error: "Invalid username or password" };
		}
		throw err;
	}
};