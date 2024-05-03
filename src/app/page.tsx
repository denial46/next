import { db } from "~/server/db"

export const dynamic = "force-dynamic";

const mockUrls = [
  'https://utfs.io/f/961e2aff-e07a-4464-a409-d9d50760b9b1-fw35r4.jpg',
  'https://utfs.io/f/1ca3981b-bf2b-41d9-bf49-0857d95b6508-fkn6dh.jpg',
  'https://utfs.io/f/254d16d9-67a0-4c52-a077-7445197f8e53-ey1620.jpg',
  'https://utfs.io/f/e76060e1-64db-4cae-9c5f-ea30e57c2c59-jidw8h.jpg',
  'https://utfs.io/f/96725b4c-2875-443b-ba91-b651d73a919b-iuzhru.jpg',
  'https://utfs.io/f/94a68ce7-b53f-4f83-af5a-42bd79f8e26b-4qxbyu.jpg',
  'https://utfs.io/f/010d6634-fd06-4ef7-bae6-797e328c317f-ojwjsw.jpg'
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
          {posts.map(post => (<div key={post.id}>{post.name}</div>))}
          {mockImages.map((image) => (
            <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
          ))
        }
      </div>
    </main>
  );
}
