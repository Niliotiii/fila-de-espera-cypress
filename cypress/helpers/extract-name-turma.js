export default function extractNameTurma(value) {
  const regex = /^(.+?) - .+ - .+/;
  return value.match(regex)[1];
}
