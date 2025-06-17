let pronombre = ['the', 'our','your','my','their'];
let adjetivo = ['great', 'big', 'beautiful','old','special'];
let sustantivo = ['city', 'cat', 'moon', 'picture'];

for (let p = 0; p < pronombre.length; p++) {
  for (let a = 0; a < adjetivo.length; a++) {
    for (let s = 0; s < sustantivo.length; s++) {
        console.log(pronombre[p] + adjetivo[a] + sustantivo[s] + '.com');
      console.log(pronombre[p] + adjetivo[a] + sustantivo[s] + '.net');
       console.log(pronombre[p] + adjetivo[a] + sustantivo[s] + '.io');
    }
  }
}