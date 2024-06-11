export default function extractTurnoTurma(value) {
  const regex = /.+ - .+ - (.+)/;
  return value.match(regex)[1];
}
