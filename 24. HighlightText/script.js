const paragraph = document.getElementById('paragraph');

function highlightLongWords() {
  const words = paragraph.textContent.split(' ');

  for (let i = 0; i < words.length; i++) {
    const word = words[i].trim();
    if (word.length > 8) {
      words[i] = `<span class="highlighted">${word}</span>`;
    }
  }

  paragraph.innerHTML = words.join(' ');
}

highlightLongWords();
