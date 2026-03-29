// import { connectDB } from '@/lib/db';

// export async function POST(req) {

//     try {
//         const { name, password } = await req.json();

//         const db = await connectDB();

//         await db.execute(
//             'INSERT INTO users (name, password) VALUES (?, ?)',
//             [name, password]
//         );

//         return Response.json({ message: 'Saved successfully!' });

//     } catch (error) {
//         console.log(error);
//         return Response.json({ message: 'Server error' });
//     }
// }

import supabase from "@/lib/supabase"

export async function POST(req) {
  const { username, password } = await req.json()

  const { error } = await supabase
    .from("users")
    .insert([{ username, password }])

  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }

  return Response.json({ message: "Success" })
}