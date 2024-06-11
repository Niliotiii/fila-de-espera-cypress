export default function extractEtapaTurma(value) {
  const regex = /.+ - (.+?) - .+/;
  return value.match(regex)[1];
}
