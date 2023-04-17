import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function signIn({ email, password }) {
        try {
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;

            console.log(response);

            localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
            localStorage.setItem("@rocketnotes:token", token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({ user, token })

        } catch(error) {
           return error.response ? alert(error.response.data.message) : alert('Não foi possível fazer o login.')
        }
    }

    async function signOut() {
        localStorage.removeItem("@rocketnotes:user");
        localStorage.removeItem("@rocketnotes:token");

        setData({});
        await api.get("/");
    }

    async function updateProfile({ user, avatarFile }) {
        console.log(user, avatarFile)
        try {
            if(avatarFile) {
                const fileUploadForm = new FormData();
                fileUploadForm.append("avatar", avatarFile);

                const response = await api.patch('/users/avatar', fileUploadForm);
                user.avatar = response.data.avatar;

                console.log(user.avatar)
            }

            await api.put("/users", user);
            localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
            setData({ user, token: data.token });
            alert('Usuário atualizado com sucesso!');

        } catch {
            return error.response ? alert(error.response.data.message) : alert('Não foi possível atualizar as informações do usuário.')
        }
    }

    useEffect(() => {
        const user = localStorage.getItem("@rocketnotes:user");
        const token = localStorage.getItem("@rocketnotes:token");

        if (token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;


            setData({
                user: JSON.parse(user),
                token
            })
        }
    }, [])
    return (
        <AuthContext.Provider value={{ 
            signIn,
            signOut,
            updateProfile,
            user: data.user 
            }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth }