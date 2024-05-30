export default function formatCNPJ(cpf) {
  return cpf.replace(/\D/g, '');
}
