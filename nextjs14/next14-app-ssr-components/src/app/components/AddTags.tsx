// nextjs 14 
import { revalidateTag } from "next/cache"

// Server Actions Example
export function AddTags () {
  async function handleCreateTag(form: FormData){
    'use server'
    
    const slug = form.get('slug')
    if(!slug) {
      return 
    }

    await fetch('http://localhost:3333/tags', {
      method: 'POST',
      body: JSON.stringify({
        slug,
      })
    })

    revalidateTag('get-tags')
  } 

  return (
    <form action={handleCreateTag} method="POST">
      <input type="text" name="slug" placeholder="Slug the Tag" />
      <button type="submit">Create Tag</button>
    </form>
  )
}