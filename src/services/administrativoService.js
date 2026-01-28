const baseApiURL = import.meta.env.VITE_API_URL;

export async function getAdministrativos() {
    const res = await fetch(`${baseApiURL}api/administrativo`);
    if (!res.ok) {
        throw new Error('Error al obtener personal administrativo');
    }
    const response = await res.json();
    return response.data;
}
