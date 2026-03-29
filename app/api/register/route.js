import supabase from "@/lib/supabase"

export async function POST(req) {
  try {
    const { username, password } = await req.json()

    const { error } = await supabase
      .from("user") // match your table
      .insert([
        {
          name: username,
          password: password
        }
      ])

    if (error) {
      return Response.json({ error: error.message }, { status: 500 })
    }

    return Response.json({ success: true })
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 })
  }
}