export async function getPosts(subreddit = 'popular') {
  const response = await fetch(
    `https://www.reddit.com/r/${subreddit}.json?raw_json=1`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch subreddit');
  }

  const json = await response.json();
  return json.data.children.map(child => child.data);
}
