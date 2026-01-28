const baseApiURL = import.meta.env.VITE_API_URL;

export async function getMiembrosDeJunta() {
    const res = await fetch(`${baseApiURL}api/miembroDeJunta`);
    if (!res.ok) {
        throw new Error('Error al obtener miembros de junta');
    }
    const response = await res.json();
    return response.data;
}
