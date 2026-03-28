import { createClient } from '@/lib/supabase/server'  // fix this import too
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: reports, error } = await supabase.from('reports').select()

  if (error) return <p>Error: {error.message}</p>

  return (
    <main style={{ padding: '2rem', color: 'white' }}>
      <h1>Reports</h1>
      {reports.length === 0 
        ? <p>No reports yet.</p>
        : <ul>{reports.map((r) => <li key={r.id}>{r.description}</li>)}</ul>
      }
    </main>
  )
}