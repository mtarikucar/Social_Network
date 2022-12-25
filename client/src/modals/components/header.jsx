import { destroyAllModal } from "../../utils/modal"


export default function Header({title}){
    return(
        <header className="grid grid-cols-12 gap-4">
            <h6 className="col-start-1 col-span-6 uppercase text-xl mb-4 font-bold">{title}</h6>
            <button className="col-end-13 pb-5" onClick={destroyAllModal}>kapat</button>
        </header>
    )
}