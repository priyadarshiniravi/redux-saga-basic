export const fetchData = async () => {
    let user = await fetch("https://randomuser.me/api");
    return user.json();
};