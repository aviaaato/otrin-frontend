

const fetchGet = async (url) => {
    const requete = await fetch(url);
    return await requete.json();
}

export default fetchGet;