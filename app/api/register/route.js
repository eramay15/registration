import { connectDB } from '@/lib/db';

export async function POST(req) {

    try {
        const { name, password } = await req.json();

        const db = await connectDB();

        await db.execute(
            'INSERT INTO users (name, password) VALUES (?, ?)',
            [name, password]
        );

        return Response.json({ message: 'Saved successfully!' });

    } catch (error) {
        console.log(error);
        return Response.json({ message: 'Server error' });
    }
}