let output

function print(s) {
  output.append(s)
  // TODO: scroll to bottom, but only if we were already scrolled to bottom.
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function sortString(s) {
  return s.split('').sort().join('')
}

function rand(n) {
  return Math.floor(Math.random() * n)
}

function sample(a) {
  return a[rand(a.length)]
}

function replace(s, i, c) {
  return s.slice(0, i) + c + s.slice(i + 1);
}

let words
const anagrams = new Map()
const alphabet = 'abcdefghijklmnopqrstuvwxyz'

async function main() {
  output = document.getElementById('output')
  words = window.frames[0].document.body.textContent.split('\n')
  words.forEach(word => {
    const key = sortString(word)
    if (!anagrams.has(key)) anagrams.set(key, [])
    anagrams.get(key).push(word)
  })
  const keys = Array.from(anagrams.keys())
  while (true) {
    const key = sample(keys)
    let word = sample(anagrams.get(key))
    let last
    for (let i = 0; i <= 999; i++) {
      if (word !== last) {
        print(word.toUpperCase() + ' ')
        await sleep(100)
      }
      last = word
      const letter = sample(alphabet)
      const r = rand(5)
      if (r < 3) {
        word += letter
      } else {
        word = replace(word, rand(word.length), r < 4 ? '' : letter)
      }
      const next = anagrams.get(sortString(word))
      word = next ? sample(next) : last
    }
    print('\n\n')
  }
}

window.onload = main

