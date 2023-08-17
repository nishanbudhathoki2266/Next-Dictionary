export async function searchWord(keyword) {
  console.log(keyword);
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
  );

  const data = await response.json();

  if (data.message) throw new Error(data.message);

  return data;
}

searchWord("apple");
