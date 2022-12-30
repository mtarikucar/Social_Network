import LoginModal from "./login";
import RegisterModal from "./register";
import editProfile from "./editProfile"
import sharePost from "./sharePost"

const modals = [
    {
        name: "login",
        element: LoginModal
    },
    {
        name: "register",
        element: RegisterModal
    },
    {
        name: "editProfile",
        element: editProfile
    },
    {
        name: "sharePost",
        element: sharePost
    }
]

export default modals