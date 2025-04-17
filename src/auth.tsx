const useAuth = () => {
    const isAuthenticated= localStorage.getItem('accessToken');
console.log("isAuthenticated",isAuthenticated)
    return isAuthenticated;
}

export default useAuth;