import supabase from "@/lib/supabase"

export async function POST(req) {
  try {
    console.log("API HIT")

    const body = await req.json()
    console.log("BODY:", body)

    const { username, password } = body

    if (!username || !password) {
      return Response.json({ error: "Missing fields" }, { status: 400 })
    }

    const { data, error } = await supabase
      .from("user")
      .insert([
        {
          name: username,
          password: password
        }
      ])

    if (error) {
      console.log("SUPABASE ERROR:", error.message)
      return Response.json({ error: error.message }, { status: 500 })
    }

    console.log("SUCCESS:", data)

    return Response.json({ success: true })
  } catch (err) {
    console.log("CATCH ERROR:", err.message)
    return Response.json({ error: err.message }, { status: 500 })
  }
}