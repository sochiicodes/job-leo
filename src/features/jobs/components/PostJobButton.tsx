import { Link } from "react-router-dom"
import { EMPLOYER_FORM_URL } from "../../../constants/urls"
import { PlusCircle } from "lucide-react"

const PostJobButton = () =>{
    return(
        <Link
            to={EMPLOYER_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-brand-500 text-white rounded-full hover:bg-brand-600 transition-all hover:shadow-xl hover:shadow-brand-100 active:scale-95 text-sm font-bold flex items-center gap-2"
        >
            <PlusCircle className="w-4 h-4"/>
            Post Job
        </Link>
    )
}

export default PostJobButton;