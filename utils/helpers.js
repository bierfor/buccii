
export const formatgiorno = giorno => {
    const giornoNuovo = new Date(giorno)
    const opzioni = {
        year : 'numeric',
        month: 'long',
        day : '2-digit',
    }
  return giornoNuovo.toLocaleDateString('it-IT', opzioni)
  
}
