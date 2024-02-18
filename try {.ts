try {
  const response = await fetch("https://twinword-word-graph-dictionary.p.rapidapi.com/definition/?entry=good", {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4fce01963amsh4cc5c4b638be63bp1ee122jsn2c5cb8993139',
      'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com'
    }
  });

  if (response.ok) {
    const result = await response.json();
    console.log(result);
  }
} catch (err) {
  console.error(err);
}