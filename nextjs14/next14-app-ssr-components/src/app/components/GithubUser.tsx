export interface GithubUserProps {
  username: string
}

export async function GithubUser ({ username }: GithubUserProps) {

  const response = await fetch(`https://api.github.com/users/${username}`, {
    cache: "no-store"
  })
  const user = await response.json()
  await new Promise(resolve => setTimeout(resolve, 4000))

  return (
    <>
      <h2>GithubUser Data: {username}</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  )

}