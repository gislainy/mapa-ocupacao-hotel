export const global = {
  usuarioId: null,
  setUsuarioId(userId: string) {
    this.usuarioId = userId;
  },
  getUsuarioId() {
    return this.usuarioId;
  },
  limparCache() {
    this.usuarioId = null;
  }
}